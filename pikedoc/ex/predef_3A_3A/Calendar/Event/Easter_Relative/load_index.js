// Indirect loader of the symbol index for Calendar.Event.Easter_Relative.

// Inherit Calendar.Event.Easter.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Easter/load_index.js", "Calendar.Event.Easter");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Easter_Relative/index.js", false, ["Calendar.Event.Easter"]);
