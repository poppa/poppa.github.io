// Indirect loader of the symbol index for Regexp.PCRE.Widestring.

// Inherit Regexp.PCRE.Plain.
PikeDoc.loadScript("ex/predef_3A_3A/Regexp/PCRE/Plain/load_index.js", "Regexp.PCRE.Plain");

PikeDoc.loadScript("ex/predef_3A_3A/Regexp/PCRE/Widestring/index.js", false, ["Regexp.PCRE.Plain"]);
