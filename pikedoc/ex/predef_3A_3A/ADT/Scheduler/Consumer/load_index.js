// Indirect loader of the symbol index for ADT.Scheduler()->Consumer.

// Inherit ADT.Heap()->Element.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Heap/Element/load_index.js", "ADT.Heap()->Element");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Scheduler/Consumer/index.js", false, ["ADT.Heap()->Element"]);
