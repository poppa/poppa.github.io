// Indirect loader of the symbol index for Protocols.HTTP.Server.SSLPort.

// Inherit SSL.Port.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Port/load_index.js", "SSL.Port");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/HTTP/Server/SSLPort/index.js", false, ["SSL.Port"]);
