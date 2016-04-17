// Indirect loader of the symbol index for GTK2.TreeModelFilter.

// Inherit GTK2.G.Object.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/G/Object/load_index.js", "GTK2.G.Object");

// Inherit GTK2.TreeDragSource.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeDragSource/load_index.js", "GTK2.TreeDragSource");

// Inherit GTK2.TreeModel.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeModel/load_index.js", "GTK2.TreeModel");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeModelFilter/index.js", false, ["GTK2.G.Object","GTK2.TreeDragSource","GTK2.TreeModel"]);
