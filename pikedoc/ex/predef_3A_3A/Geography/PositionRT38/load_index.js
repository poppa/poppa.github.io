// Indirect loader of the symbol index for Geography.PositionRT38.

// Inherit Geography.Position.
PikeDoc.loadScript("ex/predef_3A_3A/Geography/Position/load_index.js", "Geography.Position");

PikeDoc.loadScript("ex/predef_3A_3A/Geography/PositionRT38/index.js", false, ["Geography.Position"]);
