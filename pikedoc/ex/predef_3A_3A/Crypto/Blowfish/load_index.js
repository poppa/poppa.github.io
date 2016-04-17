// Indirect loader of the symbol index for Crypto.Blowfish.

// Inherit Nettle.BLOWFISH.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BLOWFISH/load_index.js", "Nettle.BLOWFISH");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Blowfish/index.js", false, ["Nettle.BLOWFISH"]);
