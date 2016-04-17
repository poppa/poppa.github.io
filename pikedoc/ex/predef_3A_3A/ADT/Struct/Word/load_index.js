// Indirect loader of the symbol index for ADT.Struct()->Word.

// Inherit ADT.Struct()->Item.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Item/load_index.js", "ADT.Struct()->Item");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Word/index.js", false, ["ADT.Struct()->Item"]);
