// Indirect loader of the symbol index for Cache.Storage.Gdbm.

// Inherit Cache.Storage.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Cache/Storage/Base/load_index.js", "Cache.Storage.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Cache/Storage/Gdbm/index.js", false, ["Cache.Storage.Base"]);
