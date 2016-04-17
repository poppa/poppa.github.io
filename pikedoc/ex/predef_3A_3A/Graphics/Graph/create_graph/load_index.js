// Indirect loader of the symbol index for Graphics.Graph.create_graph.

// Inherit Graphics.Graph.polyline.
PikeDoc.loadScript("ex/predef_3A_3A/Graphics/Graph/polyline/load_index.js", "Graphics.Graph.polyline");

PikeDoc.loadScript("ex/predef_3A_3A/Graphics/Graph/create_graph/index.js", false, ["Graphics.Graph.polyline"]);
