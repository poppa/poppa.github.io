// Indirect loader of the symbol index for MasterObject()->Codec.

// Inherit MasterObject()->Decoder.
PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/Decoder/load_index.js", "MasterObject()->Decoder");

// Inherit MasterObject()->Encoder.
PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/Encoder/load_index.js", "MasterObject()->Encoder");

PikeDoc.loadScript("ex/predef_3A_3A/MasterObject/Codec/index.js", false, ["MasterObject()->Decoder","MasterObject()->Encoder"]);
