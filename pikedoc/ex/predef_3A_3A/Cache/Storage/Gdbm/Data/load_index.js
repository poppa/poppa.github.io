// Indirect loader of the symbol index for Cache.Storage.Gdbm()->Data.

// Inherit Cache.Data.
PikeDoc.loadScript("ex/predef_3A_3A/Cache/Data/load_index.js", "Cache.Data");

PikeDoc.loadScript("ex/predef_3A_3A/Cache/Storage/Gdbm/Data/index.js", false, ["Cache.Data"]);
