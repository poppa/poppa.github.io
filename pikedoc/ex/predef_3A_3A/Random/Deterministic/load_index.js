// Indirect loader of the symbol index for Random.Deterministic.

// Inherit Nettle.Fortuna.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Fortuna/load_index.js", "Nettle.Fortuna");

PikeDoc.loadScript("ex/predef_3A_3A/Random/Deterministic/index.js", false, ["Nettle.Fortuna"]);
