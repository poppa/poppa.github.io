// Indirect loader of the symbol index for Calendar.Event.Date.

// Inherit Calendar.Event.Day_Event.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Day_Event/load_index.js", "Calendar.Event.Day_Event");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Date/index.js", false, ["Calendar.Event.Day_Event"]);
