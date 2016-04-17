// Indirect loader of the symbol index for Filesystem.Monitor.symlinks()->DefaultMonitor.

// Inherit Filesystem.Monitor.basic()->DefaultMonitor.
PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/basic/DefaultMonitor/load_index.js", "Filesystem.Monitor.basic()->DefaultMonitor");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/symlinks/DefaultMonitor/index.js", false, ["Filesystem.Monitor.basic()->DefaultMonitor"]);
