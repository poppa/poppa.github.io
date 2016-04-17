// Indirect loader of the symbol index for Nettle.CHACHA_POLY1305()->State.

// Inherit Nettle.AEAD()->State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/AEAD/State/load_index.js", "Nettle.AEAD()->State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/CHACHA_POLY1305/State/index.js", false, ["Nettle.AEAD()->State"]);
