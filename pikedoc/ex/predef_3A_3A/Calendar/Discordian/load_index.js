// Indirect loader of the symbol index for Calendar.Discordian.

// Inherit Calendar.Gregorian.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Gregorian/load_index.js", "Calendar.Gregorian");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Discordian/index.js", false, ["Calendar.Gregorian"]);
