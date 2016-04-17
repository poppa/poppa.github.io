// Indirect loader of the symbol index for ADT.Struct()->SLong.

// Inherit ADT.Struct()->SWord.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/SWord/load_index.js", "ADT.Struct()->SWord");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/SLong/index.js", false, ["ADT.Struct()->SWord"]);
