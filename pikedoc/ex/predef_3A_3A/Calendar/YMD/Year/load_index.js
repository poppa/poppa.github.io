// Indirect loader of the symbol index for Calendar.YMD.Year.

// Inherit Calendar.TimeRanges.TimeRange.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/TimeRanges/TimeRange/load_index.js", "Calendar.TimeRanges.TimeRange");

// Inherit Calendar.YMD.YMD.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/YMD/load_index.js", "Calendar.YMD.YMD");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/Year/index.js", false, ["Calendar.TimeRanges.TimeRange","Calendar.YMD.YMD"]);
