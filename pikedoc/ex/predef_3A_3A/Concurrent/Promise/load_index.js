// Indirect loader of the symbol index for Concurrent.Promise.

// Inherit Concurrent.Future.
PikeDoc.loadScript("ex/predef_3A_3A/Concurrent/Future/load_index.js", "Concurrent.Future");

PikeDoc.loadScript("ex/predef_3A_3A/Concurrent/Promise/index.js", false, ["Concurrent.Future"]);
