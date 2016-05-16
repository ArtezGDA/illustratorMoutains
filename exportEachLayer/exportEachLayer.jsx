// Export Each Layer as SVG

// Get the active document
if ( app.documents.length > 0 ) {
	var doc = app.activeDocument;
	
	// Get the layers
	if (doc.layers.length > 0) {
	var layers = doc.layers;
		
		// Print all layers
		for (var i = 0; i < layers.length; i++) {
			
			$.writeln(i);
			$.writeln(layers[i]);
		}
	}
}