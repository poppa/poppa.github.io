// Indirect loader of the symbol index for System.FSEvents.BlockingEventStream.

// Inherit System.FSEvents.EventStream.
PikeDoc.loadScript("ex/predef_3A_3A/System/FSEvents/EventStream/load_index.js", "System.FSEvents.EventStream");

PikeDoc.loadScript("ex/predef_3A_3A/System/FSEvents/BlockingEventStream/index.js", false, ["System.FSEvents.EventStream"]);
