// Indirect loader of the symbol index for Protocols.WebSocket.defragment.

// Inherit Protocols.WebSocket.Extension.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/WebSocket/Extension/load_index.js", "Protocols.WebSocket.Extension");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/WebSocket/defragment/index.js", false, ["Protocols.WebSocket.Extension"]);
