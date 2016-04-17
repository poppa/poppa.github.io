// Indirect loader of the symbol index for ADT.Struct()->Gnol.

// Inherit ADT.Struct()->Drow.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Drow/load_index.js", "ADT.Struct()->Drow");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Gnol/index.js", false, ["ADT.Struct()->Drow"]);
