// Indirect loader of the symbol index for Filesystem.Monitor.basic()->EventStreamMonitor.

// Inherit Filesystem.Monitor.basic()->Monitor.
PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/basic/Monitor/load_index.js", "Filesystem.Monitor.basic()->Monitor");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/basic/EventStreamMonitor/index.js", false, ["Filesystem.Monitor.basic()->Monitor"]);
