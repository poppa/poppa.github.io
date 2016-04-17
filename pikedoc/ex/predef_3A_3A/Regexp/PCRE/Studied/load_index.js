// Indirect loader of the symbol index for Regexp.PCRE.Studied.

// Inherit Regexp.PCRE.Plain.
PikeDoc.loadScript("ex/predef_3A_3A/Regexp/PCRE/Plain/load_index.js", "Regexp.PCRE.Plain");

PikeDoc.loadScript("ex/predef_3A_3A/Regexp/PCRE/Studied/index.js", false, ["Regexp.PCRE.Plain"]);
