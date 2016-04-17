// Indirect loader of the symbol index for SSL.Cipher.KeyExchangeRSAPSK.

// Inherit SSL.Cipher.KeyExchangePSK.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangePSK/load_index.js", "SSL.Cipher.KeyExchangePSK");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeRSAPSK/index.js", false, ["SSL.Cipher.KeyExchangePSK"]);
