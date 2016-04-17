// Indirect loader of the symbol index for SSL.Cipher.KeyExchangeECDHEPSK.

// Inherit SSL.Cipher.KeyExchangeECDHE.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeECDHE/load_index.js", "SSL.Cipher.KeyExchangeECDHE");

// Inherit SSL.Cipher.KeyExchangePSK.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangePSK/load_index.js", "SSL.Cipher.KeyExchangePSK");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangeECDHEPSK/index.js", false, ["SSL.Cipher.KeyExchangeECDHE","SSL.Cipher.KeyExchangePSK"]);
