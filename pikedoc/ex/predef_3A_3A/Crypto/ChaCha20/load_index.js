// Indirect loader of the symbol index for Crypto.ChaCha20.

// Inherit Nettle.CHACHA.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/CHACHA/load_index.js", "Nettle.CHACHA");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/ChaCha20/index.js", false, ["Nettle.CHACHA"]);
