// Indirect loader of the symbol index for Array.Iterator.

// Inherit Iterator.
PikeDoc.loadScript("ex/predef_3A_3A/Iterator/load_index.js", "Iterator");

PikeDoc.loadScript("ex/predef_3A_3A/Array/Iterator/index.js", false, ["Iterator"]);
