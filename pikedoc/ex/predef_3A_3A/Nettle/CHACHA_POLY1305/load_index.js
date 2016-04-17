// Indirect loader of the symbol index for Nettle.CHACHA_POLY1305.

// Inherit Nettle.AEAD.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/AEAD/load_index.js", "Nettle.AEAD");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/CHACHA_POLY1305/index.js", false, ["Nettle.AEAD"]);
