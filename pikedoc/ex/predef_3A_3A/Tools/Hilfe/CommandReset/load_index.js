// Indirect loader of the symbol index for Tools.Hilfe.CommandReset.

// Inherit Tools.Hilfe.Command.
PikeDoc.loadScript("ex/predef_3A_3A/Tools/Hilfe/Command/load_index.js", "Tools.Hilfe.Command");

PikeDoc.loadScript("ex/predef_3A_3A/Tools/Hilfe/CommandReset/index.js", false, ["Tools.Hilfe.Command"]);
