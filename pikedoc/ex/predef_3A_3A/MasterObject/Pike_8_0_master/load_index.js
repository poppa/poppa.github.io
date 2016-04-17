// Indirect loader of the symbol index for MasterObject()->Pike_8_0_master.

// Inherit MasterObject()->Pike_7_8_master.
PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/Pike_7_8_master/load_index.js", "MasterObject()->Pike_7_8_master");

PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/Pike_8_0_master/index.js", false, ["MasterObject()->Pike_7_8_master"]);
