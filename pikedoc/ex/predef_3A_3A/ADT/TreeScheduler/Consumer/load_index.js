// Indirect loader of the symbol index for ADT.TreeScheduler()->Consumer.

// Inherit ADT.Scheduler()->Consumer.
PikeDoc.loadScript("ex/predef_3A_3A/ADT/Scheduler/Consumer/load_index.js", "ADT.Scheduler()->Consumer");

PikeDoc.loadScript("ex/predef_3A_3A/ADT/TreeScheduler/Consumer/index.js", false, ["ADT.Scheduler()->Consumer"]);
