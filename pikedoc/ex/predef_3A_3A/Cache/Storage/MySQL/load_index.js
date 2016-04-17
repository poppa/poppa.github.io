// Indirect loader of the symbol index for Cache.Storage.MySQL.

// Inherit Cache.Storage.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Cache/Storage/Base/load_index.js", "Cache.Storage.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Cache/Storage/MySQL/index.js", false, ["Cache.Storage.Base"]);
