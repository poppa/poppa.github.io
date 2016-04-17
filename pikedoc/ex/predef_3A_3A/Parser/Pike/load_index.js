// Indirect loader of the symbol index for Parser.Pike.

// Inherit Parser.C.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/C/load_index.js", "Parser.C");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/Pike/index.js", false, ["Parser.C"]);
