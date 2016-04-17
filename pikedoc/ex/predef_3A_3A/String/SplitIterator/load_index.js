// Indirect loader of the symbol index for String.SplitIterator.

// Inherit Iterator.
PikeDoc.loadScript("ex/predef_3A_3A/Iterator/load_index.js", "Iterator");

PikeDoc.loadScript("ex/predef_3A_3A/String/SplitIterator/index.js", false, ["Iterator"]);
