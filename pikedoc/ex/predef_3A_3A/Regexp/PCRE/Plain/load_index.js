// Indirect loader of the symbol index for Regexp.PCRE.Plain.

// Inherit Regexp.PCRE._pcre.
PikeDoc.loadScript("ex/predef_3A_3A/Regexp/PCRE/_pcre/load_index.js", "Regexp.PCRE._pcre");

PikeDoc.loadScript("ex/predef_3A_3A/Regexp/PCRE/Plain/index.js", false, ["Regexp.PCRE._pcre"]);
