// Indirect loader of the symbol index for ADT.Struct()->Chars.

// Inherit ADT.Struct()->Item.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Item/load_index.js", "ADT.Struct()->Item");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Struct/Chars/index.js", false, ["ADT.Struct()->Item"]);
