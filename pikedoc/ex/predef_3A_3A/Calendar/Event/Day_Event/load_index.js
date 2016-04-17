// Indirect loader of the symbol index for Calendar.Event.Day_Event.

// Inherit Calendar.Event.Event.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Event/load_index.js", "Calendar.Event.Event");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Day_Event/index.js", false, ["Calendar.Event.Event"]);
