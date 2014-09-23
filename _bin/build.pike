/*
  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.
*/

constant real_path = combine_path(__DIR__, "../");
constant site_path = combine_path(__DIR__, "../_site/");
constant tmpl_path = combine_path(site_path, "_template/");
constant generators_path = combine_path(__DIR__, "generators");

#if constant(System.Inotify)
import System.Inotify;
DirectoryWatcher monitor;
#endif

mapping(string:int(0..1)) no_copy_asset = ([]);
mapping(string:object) generators = ([]);

int main(int argc, array(string) argv)
{
# ifndef NO_GENERATORS
  scan_dir(generators_path, lambda(string s) {
    if (has_suffix(s, ".pike")) {
      string name = (s - generators_path)[1..];
      generators[name] = ((program) s)();
    }
  });
# endif /* NO_GENERATORS */

#ifdef LISTEN
#if !constant(System.Inotify)
  werror("System.Inotify is not present on this system %O!\n", System.Inotify);
  return 1;
#endif



  write("Adding watcher for \"%s\"\n", site_path);

  int last_call = 0;

  function wcb = lambda(int mask, int cookie, string name, mixed ... args) {
    werror("Mask: %4d, Cookie: %4d, File: %s\n", mask, cookie, name);

    switch (mask) {
      case IN_ACCESS:
        werror("IN_ACCESS\n");
        break;

      case IN_ATTRIB:
        werror("IN_ATTRIB\n");
        break;

      case IN_CLOSE:
        werror("IN_CLOSE\n");
        break;

      case IN_CLOSE_WRITE:
        werror("IN_CLOSE_WRITE\n");
        break;

      case IN_CLOSE_NOWRITE:
        werror("IN_CLOSE_NOWRITE\n");
        break;

      case IN_CREATE:
        werror("IN_CREATE\n");
        break;

      case IN_DELETE:
        werror("IN_DELETE\n");
        break;

      case IN_DELETE_SELF:
        werror("IN_DELETE_SELF\n");
        break;

      case IN_MODIFY:
        werror("IN_MODIFY\n");
        break;

      case IN_MOVE_SELF:
        werror("IN_MOVE_SELF\n");
        break;

      case IN_MOVED_FROM:
        werror("IN_MOVED_FROM\n");
        break;

      case IN_MOVED_TO:
        werror("IN_MOVED_TO\n");
        break;

      case IN_OPEN:
        werror("IN_OPEN\n");
        break;

      case IN_MOVE:
        werror("IN_MOVE\n");
        break;

      case IN_DONT_FOLLOW:
        werror("IN_DONT_FOLLOW\n");
        break;

      case IN_MASK_ADD:
        werror("IN_MASK_ADD\n");
        break;

      case IN_ONESHOT:
        werror("IN_ONESHOT\n");
        break;

      case IN_ONLYDIR:
        werror("IN_ONLYDIR\n");
        break;

      case IN_IGNORED:
        werror("IN_IGNORED\n");
        break;

      case IN_ISDIR:
        werror("IN_ISDIR\n");
        break;

      case IN_Q_OVERFLOW:
        werror("IN_Q_OVERFLOW\n");
        break;

      case IN_UNMOUNT:
        werror("IN_UNMOUNT\n");
        break;

      default:
        error("Unknown mask!\n");
        break;
    }

    last_call = time();
  };

  monitor = DirectoryWatcher(site_path, 1);
  monitor->monitor(IN_MOVE|IN_MODIFY|IN_CREATE|IN_DELETE, wcb);

  return -1;
#else

  build();
#endif
}

class FileSystemWatcher
{
  protected string path;
  protected System.Inotify.Instance watcher;

  void create(string path)
  {
    this_program::path = path;
    watcher = System.Inotify.Instance();
  }
}

class DirectoryWatcher
{
  inherit FileSystemWatcher;

  private array(int) watchers = ({});
  private int(0..1) recursive;

  void create(string path, void|int(0..1) recursive)
  {
    ::create(path);
    this_program::recursive = recursive;
  }

  void monitor(int mask, function callback, void|mixed ... args)
  {
    function _scan_dir;
    if (!args) args = ({});
    int w = watcher->add_watch(path, mask, callback, @args);

    watchers += ({ w });

    if (recursive) {
      _scan_dir = lambda(string p) {
        foreach (get_dir(p), string pp) {
          pp = combine_path(p, pp);

          if (Stdio.is_dir(pp)) {
            watchers += ({
              watcher->add_watch(pp, mask, callback, @args)
            });

            _scan_dir(pp);
          }
        }
      };
      _scan_dir(path);
    }
  }

  void stop_monitor()
  {
    foreach (watchers, int w) {
      write("Removing watcher: %d\n", w);
      watcher->rm_watch(w);
    }
  }

  void destroy()
  {
    werror("DirectoryWatcher->destroy()\n");
    stop_monitor();
  }
}

int build()
{
  mapping templates = ([]);
  array(Page) pages = ({});

  scan_dir(tmpl_path, lambda(string s) {
    string name = basename(s) - ".html";
    templates[name] = Template(s);
  });

  scan_dir(site_path, lambda (string s) {
    if (has_suffix(s, ".html")) {
      pages += ({ Page(s) });
    }
  });

  foreach (pages, Page p) {
    if (Template t = templates[p->template]) {
      t->render(p);
    }
    else {
      werror("No template was found for %O\n", p);
    }
  }

  scan_dir(combine_path(site_path, "assets"), lambda (string s) {
    if (no_copy_asset[s])
      return;

    string npath = s - "_site/";

    copy_file(s, npath);
  });

	return 0;
}

void scan_dir(string p, function func)
{
  foreach (get_dir(p), string path) {
    if (path[0] == '_')
      continue;

    string pp = combine_path(p, path);

    if (Stdio.is_dir(pp))
      scan_dir(pp, func);
    else
      func(pp);
  }
}

void copy_file(string from, string to)
{
  if (Stdio.exist(to)) {
    Stdio.Stat a = file_stat(from);
    Stdio.Stat b = file_stat(to);

    if (a->mtime <= b->mtime) {
      return;
    }
  }

  string dir = dirname(to);
  int(0..1) ok = 1;

  if (!Stdio.exist(dir))
    ok = Stdio.mkdirhier(dir);

  if (ok) Stdio.cp(from, to);
  else werror("Unable to create parent directories for %O\n", to);
}

void write_file(string path, string data, void|int(0..1) compare)
{
  string dir = dirname(path);
  int(0..1) ok = 1;

  if (!Stdio.exist(dir))
    ok = Stdio.mkdirhier(dir);
  else {
    if (Stdio.exist(path) && compare) {
      string old = Stdio.read_file(path);
      if (old == data)
        return;
    }
  }

  if (ok) {
    Stdio.write_file(path, data);
  }
  else {
    werror("Unable to create parent directories for %O\n", path);
  }
}

class Page
{
  string template;
  string contents;
  string title;
  string realpath;
  string sitepath;

  void create(string s)
  {
    realpath = combine_path(site_path, s);
    sitepath = realpath - "_site/";
    Parser.HTML p = Parser.HTML();

    p->add_containers(([
      "title": lambda(Parser.HTML pp, mapping attr, string data) {
        title = data;
      },

      "content": lambda(Parser.HTML pp, mapping attr, string data) {

#ifndef KEEP_WS
        pp = pp->clone();

        // Remove all unneccessary whietspace
        pp->_set_data_callback(lambda(Parser.HTML dp, string d) {
          if (sizeof(String.trim_all_whites(d)) == 0)
            return ({  });

          return ({ map(d/"\n", String.trim_all_whites) * " " });
        });

        contents = pp->feed(data)->finish()->read();
#else
        contents = data;
#endif
      },

      "template": lambda(Parser.HTML pp, mapping attr, string data) {
        template = data;
      },

#ifndef NO_GENERATORS
      "generator": lambda(Parser.HTML pp, mapping attr, string data) {
        if (object o = generators[attr->name]) {
          return o->generate(data);
        }
      }
#endif
    ]));

    p->feed(Stdio.read_file(realpath))->finish();

    template = template || "default";
  }
}

class Template
{
  string contents;
  string name;
  array(Asset) assets = ({});
  mapping(string:array(string)) bundles = ([]);

  Parser.HTML p;

  void create(string realpath)
  {
    name = basename(realpath) - ".html";
    contents = Stdio.read_file(realpath);
    p = Parser.HTML();

    p->add_tags(([
      "link": lambda(Parser.HTML ps, mapping attr) {
        if (attr->rel && lower_case(attr->rel) == "stylesheet") {
          Asset a = Css(attr);
          array ret;

          if (a->bundle) {
            no_copy_asset[a->get_real_path()] = 1;
            if (!bundles[a->bundle]) {
              bundles[a->bundle] = ({});
              attr->href = a->bundle;
              ret = ({ make_tag("link", attr) });
            }
            else {
              ret = ({});
            }

            bundles[a->bundle] += ({ a->get_contents() });

            return ret;
          }

          assets += ({ a });
        }
      }
    ]));

    p->add_containers(([
      "script": lambda(Parser.HTML ps, mapping attr) {
        if (attr->src) {
          Asset a = JavaScript(attr);
          array ret;

          if (a->bundle) {
            no_copy_asset[a->get_real_path()] = 1;
            if (!bundles[a->bundle]) {
              bundles[a->bundle] = ({});
              attr->src = a->bundle;
              ret = ({ make_container("script", attr, "") });
            }
            else {
              ret = ({});
            }

            bundles[a->bundle] += ({ a->get_contents() });

            return ret;
          }
        }
      }
    ]));

#ifndef KEEP_WS

    p->_set_data_callback(lambda(Parser.HTML pp, string d) {
      if (sizeof(String.trim_all_whites(d)) == 0)
        return ({});

      return ({ map(d/"\n", String.trim_all_whites) * " " });
    });

#endif

    contents = p->feed(contents)->finish()->read();

    foreach (bundles; string name; array s) {
      if (name[0] == '/')
        name = "." + name;

      write_file(combine_path(real_path, name), s*"\n", 1);
    }
  }

  string make_tag(string name, mapping attr)
  {
    m_delete(attr, "bundle");
    m_delete(attr, "minify");
    m_delete(attr, "contents");
    return "<" + name + sprintf("%{ %s=%O%}", (array) attr) + ">";
  }

  string make_container(string name, mapping attr, string data)
  {
    return make_tag(name, attr) + data + "</" + name + ">";
  }

  string render(Page page)
  {
    string data = replace(contents, ([ "${title}"    : page->title,
                                       "${contents}" : page->contents,
                                       "${date}"     : "" ]));
    write_file(page->sitepath, data, 1);
  }

  string _sprintf(int how)
  {
    return sprintf("%O(%O)", object_program(this), name);
  }
}

class Asset
{
  protected string contents;
  protected mapping attr;
  protected string realpath;

  int(0..1) minify = 0;
  string bundle;

  void create(mapping _attr)
  {
    attr = _attr;

    if (attr->href && sizeof(attr->href) && attr->href[0] == '/')
      attr->href = "." + attr->href;
    else if (attr->src && sizeof(attr->src) && attr->src[0] == '/')
      attr->src = "." + attr->src;

    if (attr->minify)
      minify = 1;

    if (attr->bundle)
      bundle = attr->bundle;
  }

  string get_real_path()
  {
    return realpath;
  }

  string get_contents();
}

class Css
{
  inherit Asset;

  void create(mapping attr)
  {
    ::create(attr);
    realpath = combine_path(site_path, attr->href);
  }

  string get_contents()
  {
    string d = Stdio.read_file(realpath);

#ifndef NO_MINIFY
# if constant(Standards.CSS)
    if (minify) d = Standards.CSS.minify(d);
# endif
#endif

    return d;
  }
}

class JavaScript
{
  inherit Asset;

  void create(mapping attr)
  {
    ::create(attr);
    realpath = combine_path(site_path, attr->src);
  }

  string get_contents()
  {
    string d = Stdio.read_file(realpath);

#ifndef NO_MINIFY
# if constant(Standards.JavaScript)
    if (minify) d = Standards.JavaScript.minify(d);
# endif
#endif

    return d;
  }
}
