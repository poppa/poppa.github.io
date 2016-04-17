// Indirect loader of the symbol index for Calendar.YMD.

// Inherit Calendar.Time.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/load_index.js", "Calendar.Time");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/index.js", false, ["Calendar.Time"]);
