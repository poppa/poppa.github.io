// Indirect loader of the symbol index for Calendar.Event.Namedays.

// Inherit Calendar.Event.Event.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Event/load_index.js", "Calendar.Event.Event");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Event/Namedays/index.js", false, ["Calendar.Event.Event"]);
