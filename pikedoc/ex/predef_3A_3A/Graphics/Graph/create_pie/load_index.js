// Indirect loader of the symbol index for Graphics.Graph.create_pie.

// Inherit Graphics.Graph.create_bars.
PikeDoc.loadScript("ex/predef_3A_3A/Graphics/Graph/create_bars/load_index.js", "Graphics.Graph.create_bars");

PikeDoc.loadScript("ex/predef_3A_3A/Graphics/Graph/create_pie/index.js", false, ["Graphics.Graph.create_bars"]);
