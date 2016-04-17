// Indirect loader of the symbol index for Crypto.ChaCha20.POLY1305.

// Inherit Nettle.CHACHA_POLY1305.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/CHACHA_POLY1305/load_index.js", "Nettle.CHACHA_POLY1305");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/ChaCha20/POLY1305/index.js", false, ["Nettle.CHACHA_POLY1305"]);
