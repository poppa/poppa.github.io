// Indirect loader of the symbol index for Audio.Format.MP3.

// Inherit Audio.Format.ANY.
PikeDoc.loadScript("ex/predef_3A_3A/Audio/Format/ANY/load_index.js", "Audio.Format.ANY");

PikeDoc.loadScript("ex/predef_3A_3A/Audio/Format/MP3/index.js", false, ["Audio.Format.ANY"]);
