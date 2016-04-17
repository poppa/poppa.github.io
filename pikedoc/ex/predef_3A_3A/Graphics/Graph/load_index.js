// Indirect loader of the symbol index for Graphics.Graph.

// Inherit Graphics.Graph.create_pie.
PikeDoc.loadScript("ex/predef_3A_3A/Graphics/Graph/create_pie/load_index.js", "Graphics.Graph.create_pie");

PikeDoc.loadScript("ex/predef_3A_3A/Graphics/Graph/index.js", false, ["Graphics.Graph.create_pie"]);
