// Indirect loader of the symbol index for Nettle.RIPEMD160()->State.

// Inherit Nettle.Hash()->State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Hash/State/load_index.js", "Nettle.Hash()->State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/RIPEMD160/State/index.js", false, ["Nettle.Hash()->State"]);
