// Indirect loader of the symbol index for Calendar.YMD.Minute.

// Inherit Calendar.Time.Minute.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Minute/load_index.js", "Calendar.Time.Minute");

// Inherit Calendar.YMD.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/load_index.js", "Calendar.YMD.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/Minute/index.js", false, ["Calendar.Time.Minute","Calendar.YMD.YMD"]);
