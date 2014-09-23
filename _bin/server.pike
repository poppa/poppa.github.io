#!/usr/bin/env pike
/*
  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.

  A simple HTTP server for local development. Per default the server will
  listen on port 8080 but an arbitrary port number can be given as first
  argument to this program.

  You can stop a running server by adding "stop" as first argument:
  user@computer:~/path$ server.pike stop
*/

constant DEFAULT_PORT = 8080;
constant PIDFILE = combine_path(__DIR__, "server.pid");
constant HTTP_ROOT = combine_path(__DIR__, "../");

int main(int argc, array(string) argv)
{
  int port = DEFAULT_PORT;

  if (argc > 1 && argv[1] == "stop") {
    int pid;

    if (Stdio.exist(PIDFILE)) {
      pid = (int) Stdio.read_file(PIDFILE);
      kill(pid, 2);
    }

    exit(0);
  }
  else if (argc > 1) {
    int tmp = (int) argv[1];

    if (tmp > 0)
      port = tmp;
  }

  mixed e = catch {
    Protocols.HTTP.Server.Port(handle_request, port);
    write("\n# Starting server on port %d for %s\n", port, HTTP_ROOT);

    Stdio.write_file(PIDFILE, "" + getpid());

    signal(1, onsig);
    signal(2, onsig);
    signal(3, onsig);
    signal(15, onsig);

    return -1;
  };

  werror("Unable to start server on port %d. Is one running?\nError: %s\n",
         port, describe_error(e));

  exit(1);
}

void onsig(int sig)
{
  werror("Stopping server...\n");
  rm(PIDFILE);
  exit(0);
}

string file_not_found(string fname)
{
  return
    "<html><body><h1>404 - File not found</h1>\n"
    "<code>" + Parser.encode_html_entities(fname) + "</code>"
    "</body></html>\n";
}

void handle_request(Protocols.HTTP.Server.Request request)
{
  string file = combine_path(HTTP_ROOT, request->not_query[1..]);

  file = Protocols.HTTP.uri_decode(file);
  Stdio.Stat s = file_stat(file);

  if (s && s->isdir) {
    file = combine_path(file, "index.html");
    s = file_stat(file);
  }

  if (!s) {
    request->response_and_finish(([
      "data"  : file_not_found(request->not_query),
      "type"  : "text/html",
      "error" : 404
    ]));
  }
  else {
    request->response_and_finish(([
      "file" : Stdio.File(file),
      "type" : Protocols.HTTP.Server.filename_to_type(file)
    ]));
  }
}