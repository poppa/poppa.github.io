// Indirect loader of the symbol index for Multiset.Iterator.

// Inherit Iterator.
PikeDoc.loadScript("ex/predef_3A_3A/Iterator/load_index.js", "Iterator");

PikeDoc.loadScript("ex/predef_3A_3A/Multiset/Iterator/index.js", false, ["Iterator"]);
