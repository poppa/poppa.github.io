// Indirect loader of the symbol index for ADT.Struct()->uint64.

// Inherit ADT.Struct()->Long.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Long/load_index.js", "ADT.Struct()->Long");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/uint64/index.js", false, ["ADT.Struct()->Long"]);
