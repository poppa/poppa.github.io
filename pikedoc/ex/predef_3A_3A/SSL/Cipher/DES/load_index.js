// Indirect loader of the symbol index for SSL.Cipher.DES.

// Inherit Nettle.BufferedCipher()->Buffer.State.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BufferedCipher/Buffer/State/load_index.js", "Nettle.BufferedCipher()->Buffer.State");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/DES/index.js", false, ["Nettle.BufferedCipher()->Buffer.State"]);
