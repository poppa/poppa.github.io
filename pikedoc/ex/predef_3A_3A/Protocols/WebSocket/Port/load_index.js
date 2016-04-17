// Indirect loader of the symbol index for Protocols.WebSocket.Port.

// Inherit Protocols.HTTP.Server.Port.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/HTTP/Server/Port/load_index.js", "Protocols.HTTP.Server.Port");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/WebSocket/Port/index.js", false, ["Protocols.HTTP.Server.Port"]);
