// Indirect loader of the symbol index for Nettle.MD4()->State.

// Inherit Nettle.Hash()->State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Hash/State/load_index.js", "Nettle.Hash()->State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MD4/State/index.js", false, ["Nettle.Hash()->State"]);
