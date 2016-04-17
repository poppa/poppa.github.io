// Indirect loader of the symbol index for Calendar.YMD.YMD.

// Inherit Calendar.TimeRanges.TimeRange.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/TimeRanges/TimeRange/load_index.js", "Calendar.TimeRanges.TimeRange");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/index.js", false, ["Calendar.TimeRanges.TimeRange"]);
