// Indirect loader of the symbol index for Calendar.YMD.Fraction.

// Inherit Calendar.Time.Fraction.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Fraction/load_index.js", "Calendar.Time.Fraction");

// Inherit Calendar.YMD.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/load_index.js", "Calendar.YMD.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/Fraction/index.js", false, ["Calendar.Time.Fraction","Calendar.YMD.YMD"]);
