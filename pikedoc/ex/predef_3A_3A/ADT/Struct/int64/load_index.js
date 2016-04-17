// Indirect loader of the symbol index for ADT.Struct()->int64.

// Inherit ADT.Struct()->SLong.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/SLong/load_index.js", "ADT.Struct()->SLong");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/int64/index.js", false, ["ADT.Struct()->SLong"]);
