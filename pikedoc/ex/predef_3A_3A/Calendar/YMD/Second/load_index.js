// Indirect loader of the symbol index for Calendar.YMD.Second.

// Inherit Calendar.Time.Second.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Second/load_index.js", "Calendar.Time.Second");

// Inherit Calendar.YMD.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/load_index.js", "Calendar.YMD.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/Second/index.js", false, ["Calendar.Time.Second","Calendar.YMD.YMD"]);
