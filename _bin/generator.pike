/*
  Author: Pontus Östlund <https://profiles.google.com/poppanator>

  Permission to copy, modify, and distribute this source for any legal
  purpose granted as long as my name is still attached to it. More
  specifically, the GPL, LGPL and MPL licenses apply to this software.
*/

protected string cache_file;

void create()
{
  cache_file = basename(sprintf("%O", object_program(this))) + ".cache";
  cache_file = combine_path(__DIR__, "cache", cache_file);
}

string generate();

string replace_template(string data, mapping rep)
{
  foreach (indices(rep), string key) {
    data = replace(data, "${" + key + "}", rep[key]);
  }

  return data;
}

//! Turns a mapping like:
//!
//! @code
//!  ([ "images" : ([
//!       "standard_resolution" : ([
//!         "width" : 640,
//!         "height" : 640,
//!         "url" : "http://domain.com/path"
//!       ])
//!     ]),
//!     "id" : "abc123",
//!     "tags" : ({ "one", "two", "three" }),
//!     "link" : "http://domain.com/path/to/image"
//!  ])
//! @endcode
//!
//! Into something like:
//!
//! @code
//!  ([ "images.standard_resolution.width" : "640",
//!     "images.standard_resolution.height" : "640",
//!     "images.standard_resolution.url" : "http://domain.com/path",
//!     "id" : "abc123",
//!     "tags.1" : "one",
//!     "tags.2" : "two",
//!     "tags.3" : "three",
//!     "link" : "http://domain.com/path/to/image"
//!  ])
//! @endcode
//!
//! This is so that it's easy to replace template variables with values
//! from the mapping:
//!
//! @code
//!  <a href="${link}">
//!    <img src="${images.standard_resolution.url}"
//!         width="${images.standard_resolution.width}"
//!         height="${images.standard_resolution.url}" />
//!  </a>
//! @endcode
//!
//! @param m
mapping flat_mapping(mapping m)
{
  mapping r = ([]);
  function handle, handle_mapping, handle_array;

  handle_mapping = lambda(string k, mapping v) {
    foreach (v; string kk; mixed vv) {
      handle(k+kk, vv);
    }
  };

  handle_array = lambda(string k, array v) {
    int i = 0;
    foreach (v, mixed vv) {
      handle(k + (++i), vv);
    }
  };

  handle = lambda(string k, mixed v) {
    if (stringp(v) || intp(v) || floatp(v))
      r[k] = (string) v;
    else if (mappingp(v)) {
      handle_mapping(k + ".",v);
    }
    else if (arrayp(v)) {
      handle_array(k + ".", v);
    }
  };

  foreach (m; string key; mixed v) {
    handle(key, v);
  }

  return r;
}

protected mixed get_cache()
{
  if (!Stdio.exist(cache_file))
    return 0;

  return decode_value(Stdio.read_file(cache_file));
}

protected void save_cache(mixed data)
{
  if (!Stdio.exist(dirname(cache_file)))
    Stdio.mkdirhier(dirname(cache_file));

  Stdio.write_file(cache_file, encode_value(data));
}