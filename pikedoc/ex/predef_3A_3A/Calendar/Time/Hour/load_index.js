// Indirect loader of the symbol index for Calendar.Time.Hour.

// Inherit Calendar.Time.TimeofDay.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/TimeofDay/load_index.js", "Calendar.Time.TimeofDay");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Hour/index.js", false, ["Calendar.Time.TimeofDay"]);
