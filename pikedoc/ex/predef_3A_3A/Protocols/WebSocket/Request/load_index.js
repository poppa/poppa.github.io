// Indirect loader of the symbol index for Protocols.WebSocket.Request.

// Inherit Protocols.HTTP.Server.Request.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/HTTP/Server/Request/load_index.js", "Protocols.HTTP.Server.Request");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/WebSocket/Request/index.js", false, ["Protocols.HTTP.Server.Request"]);
