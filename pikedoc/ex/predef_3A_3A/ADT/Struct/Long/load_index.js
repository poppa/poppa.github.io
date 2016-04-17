// Indirect loader of the symbol index for ADT.Struct()->Long.

// Inherit ADT.Struct()->Word.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Word/load_index.js", "ADT.Struct()->Word");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Long/index.js", false, ["ADT.Struct()->Word"]);
