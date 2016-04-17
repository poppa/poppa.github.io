// Indirect loader of the symbol index for Protocols.Bittorrent.Generator.

// Inherit Protocols.Bittorrent.Torrent.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Bittorrent/Torrent/load_index.js", "Protocols.Bittorrent.Torrent");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Bittorrent/Generator/index.js", false, ["Protocols.Bittorrent.Torrent"]);
