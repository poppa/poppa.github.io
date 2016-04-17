// Indirect loader of the symbol index for Filesystem.Monitor.symlinks.

// Inherit Filesystem.Monitor.basic.
PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/basic/load_index.js", "Filesystem.Monitor.basic");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/symlinks/index.js", false, ["Filesystem.Monitor.basic"]);
