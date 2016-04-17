// Indirect loader of the symbol index for Calendar.YMD.SuperTimeRange.

// Inherit Calendar.Time.SuperTimeRange.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/SuperTimeRange/load_index.js", "Calendar.Time.SuperTimeRange");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/YMD/SuperTimeRange/index.js", false, ["Calendar.Time.SuperTimeRange"]);
