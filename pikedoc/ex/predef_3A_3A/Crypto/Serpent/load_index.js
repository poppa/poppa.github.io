// Indirect loader of the symbol index for Crypto.Serpent.

// Inherit Nettle.SERPENT.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SERPENT/load_index.js", "Nettle.SERPENT");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Serpent/index.js", false, ["Nettle.SERPENT"]);
