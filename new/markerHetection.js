document.addEventListener("DOMContentLoaded", function () {
  if (typeof AFRAME !== 'undefined') {
    AFRAME.registerComponent('markerhandler', {
      init: function () {
        this.el.sceneEl.addEventListener('targetFound', (e) => {
          const targetIndex = e.detail.targetIndex;

          // Dynamically map the detected marker to the node ID from your SVG extraction
          const svgNodes = window.extractedNodes || [];
          const markerId = svgNodes[targetIndex]?.id;  // Use extracted SVG nodes

          console.log("Detected marker index:", targetIndex, "-> Node ID:", markerId);

          if (markerId && typeof window.setUserLocation === 'function') {
            window.setUserLocation(markerId);  // Update the user location based on the node ID
          }
        });
      }
    });

    // Attach the markerhandler component to the scene
    document.querySelector('a-scene').setAttribute('markerhandler', '');
  } else {
    console.error("AFRAME is not loaded");
  }
});
