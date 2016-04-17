// Indirect loader of the symbol index for Calendar.Swedish.

// Inherit Calendar.ISO.
PikeDoc.loadScript("ex/predef_3A_3A/Calendar/ISO/load_index.js", "Calendar.ISO");

PikeDoc.loadScript("ex/predef_3A_3A/Calendar/Swedish/index.js", false, ["Calendar.ISO"]);
