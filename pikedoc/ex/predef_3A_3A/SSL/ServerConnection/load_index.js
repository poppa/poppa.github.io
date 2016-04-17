// Indirect loader of the symbol index for SSL.ServerConnection.

// Inherit SSL.Connection.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Connection/load_index.js", "SSL.Connection");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/ServerConnection/index.js", false, ["SSL.Connection"]);
