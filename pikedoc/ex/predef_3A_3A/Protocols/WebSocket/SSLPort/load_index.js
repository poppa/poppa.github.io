// Indirect loader of the symbol index for Protocols.WebSocket.SSLPort.

// Inherit Protocols.HTTP.Server.SSLPort.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/HTTP/Server/SSLPort/load_index.js", "Protocols.HTTP.Server.SSLPort");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/WebSocket/SSLPort/index.js", false, ["Protocols.HTTP.Server.SSLPort"]);
