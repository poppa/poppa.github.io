// Indirect loader of the symbol index for Filesystem.Monitor.basic()->Monitor.

// Inherit ADT.Heap()->Element.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Heap/Element/load_index.js", "ADT.Heap()->Element");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/basic/Monitor/index.js", false, ["ADT.Heap()->Element"]);
