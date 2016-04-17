// Indirect loader of the symbol index for Yabu.LookupDB.

// Inherit Yabu.DB.
PikeDoc.loadScript("ex/predef_3A_3A/Yabu/DB/load_index.js", "Yabu.DB");

PikeDoc.loadScript("ex/predef_3A_3A/Yabu/LookupDB/index.js", false, ["Yabu.DB"]);
