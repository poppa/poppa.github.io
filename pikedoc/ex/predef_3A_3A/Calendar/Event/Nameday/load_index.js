// Indirect loader of the symbol index for Calendar.Event.Nameday.

// Inherit Calendar.Event.Day_Event.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Day_Event/load_index.js", "Calendar.Event.Day_Event");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Nameday/index.js", false, ["Calendar.Event.Day_Event"]);
