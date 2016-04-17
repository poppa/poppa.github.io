// Indirect loader of the symbol index for Search.Queue.MySQL.

// Inherit Search.Queue.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Search/Queue/Base/load_index.js", "Search.Queue.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Search/Queue/MySQL/index.js", false, ["Search.Queue.Base"]);
