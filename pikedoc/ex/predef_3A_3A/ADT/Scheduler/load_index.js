// Indirect loader of the symbol index for ADT.Scheduler.

// Inherit ADT.Heap.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Heap/load_index.js", "ADT.Heap");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/Scheduler/index.js", false, ["ADT.Heap"]);
