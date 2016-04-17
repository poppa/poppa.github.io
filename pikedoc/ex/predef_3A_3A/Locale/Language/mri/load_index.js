// Indirect loader of the symbol index for Locale.Language.mri.

// Inherit Locale.Language.abstract.
PikeDoc.loadScript("ex/predef_3A_3A/Locale/Language/abstract/load_index.js", "Locale.Language.abstract");

PikeDoc.loadScript("ex/predef_3A_3A/Locale/Language/mri/index.js", false, ["Locale.Language.abstract"]);
