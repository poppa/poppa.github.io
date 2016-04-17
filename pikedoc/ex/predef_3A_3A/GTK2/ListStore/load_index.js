// Indirect loader of the symbol index for GTK2.ListStore.

// Inherit GTK2.G.Object.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/G/Object/load_index.js", "GTK2.G.Object");

// Inherit GTK2.TreeDragDest.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeDragDest/load_index.js", "GTK2.TreeDragDest");

// Inherit GTK2.TreeDragSource.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeDragSource/load_index.js", "GTK2.TreeDragSource");

// Inherit GTK2.TreeModel.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeModel/load_index.js", "GTK2.TreeModel");

// Inherit GTK2.TreeSortable.
PikeDoc.loadScript("ex/predef_3A_3A/GTK2/TreeSortable/load_index.js", "GTK2.TreeSortable");

PikeDoc.loadScript("ex/predef_3A_3A/GTK2/ListStore/index.js", false, ["GTK2.G.Object","GTK2.TreeDragDest","GTK2.TreeDragSource","GTK2.TreeModel","GTK2.TreeSortable"]);
