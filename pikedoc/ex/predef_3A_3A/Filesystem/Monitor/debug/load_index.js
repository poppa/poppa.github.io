// Indirect loader of the symbol index for Filesystem.Monitor.debug.

// Inherit Filesystem.Monitor.symlinks.
PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/symlinks/load_index.js", "Filesystem.Monitor.symlinks");

PikeDoc.loadScript("ex/predef_3A_3A/Filesystem/Monitor/debug/index.js", false, ["Filesystem.Monitor.symlinks"]);
