// Indirect loader of the symbol index for ADT.Struct()->uint8.

// Inherit ADT.Struct()->Byte.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Byte/load_index.js", "ADT.Struct()->Byte");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/uint8/index.js", false, ["ADT.Struct()->Byte"]);
