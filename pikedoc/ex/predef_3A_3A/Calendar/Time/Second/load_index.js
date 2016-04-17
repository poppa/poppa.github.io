// Indirect loader of the symbol index for Calendar.Time.Second.

// Inherit Calendar.Time.TimeofDay.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/TimeofDay/load_index.js", "Calendar.Time.TimeofDay");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Time/Second/index.js", false, ["Calendar.Time.TimeofDay"]);
