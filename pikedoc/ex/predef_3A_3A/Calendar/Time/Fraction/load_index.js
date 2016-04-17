// Indirect loader of the symbol index for Calendar.Time.Fraction.

// Inherit Calendar.Time.Second.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Second/load_index.js", "Calendar.Time.Second");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Fraction/index.js", false, ["Calendar.Time.Second"]);
