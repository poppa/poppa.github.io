// Indirect loader of the symbol index for SSL.Cipher.RC2.

// Inherit Nettle.BufferedCipher()->Buffer.State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/Buffer/State/load_index.js", "Nettle.BufferedCipher()->Buffer.State");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/RC2/index.js", false, ["Nettle.BufferedCipher()->Buffer.State"]);
