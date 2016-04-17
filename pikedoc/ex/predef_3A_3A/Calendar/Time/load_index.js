// Indirect loader of the symbol index for Calendar.Time.

// Inherit Calendar.TimeRanges.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/TimeRanges/load_index.js", "Calendar.TimeRanges");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/index.js", false, ["Calendar.TimeRanges"]);
