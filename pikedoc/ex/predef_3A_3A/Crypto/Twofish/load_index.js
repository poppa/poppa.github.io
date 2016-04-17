// Indirect loader of the symbol index for Crypto.Twofish.

// Inherit Nettle.Twofish.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Twofish/load_index.js", "Nettle.Twofish");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Twofish/index.js", false, ["Nettle.Twofish"]);
