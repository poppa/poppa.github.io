// Indirect loader of the symbol index for Thread.Fifo.

// Inherit Thread.Mutex.
PikeDoc.loadScript("ex/predef_3A_3A/Thread/Mutex/load_index.js", "Thread.Mutex");

// Inherit Thread.Condition.
PikeDoc.loadScript("ex/predef_3A_3A/Thread/Condition/load_index.js", "Thread.Condition");

// Inherit Thread.Condition.
PikeDoc.loadScript("ex/predef_3A_3A/Thread/Condition/load_index.js", "Thread.Condition");

PikeDoc.loadScript("ex/predef_3A_3A/Thread/Fifo/index.js", false, ["Thread.Mutex","Thread.Condition","Thread.Condition"]);
