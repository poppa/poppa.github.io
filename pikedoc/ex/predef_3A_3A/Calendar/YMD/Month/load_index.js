// Indirect loader of the symbol index for Calendar.YMD.Month.

// Inherit Calendar.YMD.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/load_index.js", "Calendar.YMD.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/Month/index.js", false, ["Calendar.YMD.YMD"]);
