// Indirect loader of the symbol index for Calendar.Islamic.

// Inherit Calendar.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/load_index.js", "Calendar.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Islamic/index.js", false, ["Calendar.YMD"]);
