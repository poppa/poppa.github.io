// Indirect loader of the symbol index for Calendar.YMD.Hour.

// Inherit Calendar.Time.Hour.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Hour/load_index.js", "Calendar.Time.Hour");

// Inherit Calendar.YMD.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/load_index.js", "Calendar.YMD.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/Hour/index.js", false, ["Calendar.Time.Hour","Calendar.YMD.YMD"]);
