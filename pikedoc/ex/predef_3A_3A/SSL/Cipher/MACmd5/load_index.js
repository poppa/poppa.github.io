// Indirect loader of the symbol index for SSL.Cipher.MACmd5.

// Inherit SSL.Cipher.MACsha.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MACsha/load_index.js", "SSL.Cipher.MACsha");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/MACmd5/index.js", false, ["SSL.Cipher.MACsha"]);
