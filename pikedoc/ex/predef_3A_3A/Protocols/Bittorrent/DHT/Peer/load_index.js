// Indirect loader of the symbol index for Protocols.Bittorrent.DHT()->Peer.

// Inherit Protocols.Bittorrent.DHT()->Node.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Bittorrent/DHT/Node/load_index.js", "Protocols.Bittorrent.DHT()->Node");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Bittorrent/DHT/Peer/index.js", false, ["Protocols.Bittorrent.DHT()->Node"]);
