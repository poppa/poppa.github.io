// Indirect loader of the symbol index for ADT.Struct()->uint16.

// Inherit ADT.Struct()->Word.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Word/load_index.js", "ADT.Struct()->Word");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/uint16/index.js", false, ["ADT.Struct()->Word"]);
