// Indirect loader of the symbol index for SSL.ClientConnection.

// Inherit SSL.Connection.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Connection/load_index.js", "SSL.Connection");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/ClientConnection/index.js", false, ["SSL.Connection"]);
