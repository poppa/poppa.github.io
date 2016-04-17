// Indirect loader of the symbol index for Calendar.Event.Orthodox_Easter_Relative.

// Inherit Calendar.Event.Easter_Relative.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Easter_Relative/load_index.js", "Calendar.Event.Easter_Relative");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Orthodox_Easter_Relative/index.js", false, ["Calendar.Event.Easter_Relative"]);
