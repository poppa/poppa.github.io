// Indirect loader of the symbol index for ADT.Struct()->int8.

// Inherit ADT.Struct()->SByte.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/SByte/load_index.js", "ADT.Struct()->SByte");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/int8/index.js", false, ["ADT.Struct()->SByte"]);
