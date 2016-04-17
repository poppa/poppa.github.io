// Indirect loader of the symbol index for SSL.Cipher.DES3.

// Inherit Nettle.BufferedCipher()->Buffer.State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/Buffer/State/load_index.js", "Nettle.BufferedCipher()->Buffer.State");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/DES3/index.js", false, ["Nettle.BufferedCipher()->Buffer.State"]);
