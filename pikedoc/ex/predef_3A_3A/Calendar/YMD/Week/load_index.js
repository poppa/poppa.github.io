// Indirect loader of the symbol index for Calendar.YMD.Week.

// Inherit Calendar.YMD.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/load_index.js", "Calendar.YMD.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/Week/index.js", false, ["Calendar.YMD.YMD"]);
