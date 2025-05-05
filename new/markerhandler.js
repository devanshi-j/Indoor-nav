document.addEventListener("DOMContentLoaded", function () {
  if (typeof AFRAME !== 'undefined') {
    AFRAME.registerComponent('markerhandler', {
      init: function () {
        this.el.sceneEl.addEventListener('targetFound', (e) => {
          const markerId = e.target.id;  // Get the marker's ID from the DOM element

          console.log("Detected marker ID:", markerId);

          if (markerId && typeof window.setUserLocation === 'function') {
            window.setUserLocation(markerId);  // Update user location based on marker ID
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
