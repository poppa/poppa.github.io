// Indirect loader of the symbol index for Cache.Policy.Timed.

// Inherit Cache.Policy.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Cache/Policy/Base/load_index.js", "Cache.Policy.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Cache/Policy/Timed/index.js", false, ["Cache.Policy.Base"]);
