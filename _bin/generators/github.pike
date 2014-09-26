/*
  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.
*/

#include "../../../social-keys/github.pike";
inherit "../generator.pike";

string generate(string template)
{
  mapping data;

#ifndef REGEN_GITHUB
   data = get_cache();
#endif

  if (!data) {
    write("Re-generating Github...");
    Social.Github api = Social.Github(API_KEY, API_SECRET, 0, 0);
    api->authorization->access_token = ACCESS_TOKEN;
    data = api->get("users/poppa");
    save_cache(data);
    write("OK!\n");
  }

#if 0
  String.Buffer b = String.Buffer();

  foreach (data->data, mapping m) {
    mapping x = ([
      "id"           : m->id,
      "link"         : m->link,
      "created_time" : m->created_time,
      "caption"      : m->caption->text,
      "comments"     : m->comments->count,
      "likes"        : m->likes->count,
      "elapsed"      : Social.time_elapsed((int)m->created_time)
    ]);

    mapping fr = flat_mapping(m);
    fr->elapsed = x->elapsed;
    fr->_data = Parser.encode_html_entities(
                  string_to_utf8(Standards.JSON.encode(x)));

    b->add(replace_template(template, fr));
  }

  return b->get();
#endif

  return "<p>GITHUB</p>";
}