// Indirect loader of the symbol index for Calendar.Event.Monthday_Weekday_Relative.

// Inherit Calendar.Event.Gregorian_Fixed.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Gregorian_Fixed/load_index.js", "Calendar.Event.Gregorian_Fixed");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Monthday_Weekday_Relative/index.js", false, ["Calendar.Event.Gregorian_Fixed"]);
