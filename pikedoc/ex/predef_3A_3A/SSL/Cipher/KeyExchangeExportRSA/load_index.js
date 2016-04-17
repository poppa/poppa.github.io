// Indirect loader of the symbol index for SSL.Cipher.KeyExchangeExportRSA.

// Inherit SSL.Cipher.KeyExchangeRSA.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeRSA/load_index.js", "SSL.Cipher.KeyExchangeRSA");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeExportRSA/index.js", false, ["SSL.Cipher.KeyExchangeRSA"]);
