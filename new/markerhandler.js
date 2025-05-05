 document.addEventListener("DOMContentLoaded", function () {
    if (typeof AFRAME !== 'undefined') {
      AFRAME.registerComponent('markerhandler', {
        init: function () {
          this.el.sceneEl.addEventListener('markerFound', (e) => {
            const markerEl = e.target;
            const markerId = markerEl.getAttribute('id');

            console.log("Detected marker with ID:", markerId);

            if (markerId && typeof window.setUserLocation === 'function') {
              window.setUserLocation(markerId);
              console.log("User location set via marker:", markerId);
            } else {
              console.warn("No valid markerId or setUserLocation function missing.");document.addEventListener("DOMContentLoaded", function () {
  if (typeof AFRAME !== 'undefined') {
    AFRAME.registerComponent('markerhandler', {
      init: function () {
        this.el.sceneEl.addEventListener('markerFound', (e) => {
          const markerEl = e.target;
          const markerId = markerEl.getAttribute('id');

          console.log("Detected marker with ID:", markerId);

          // Show marker detection message in UI
          const statusBox = document.getElementById('markerStatus');
          const markerIdText = document.getElementById('markerIdText');

          if (statusBox && markerIdText) {
            markerIdText.textContent = markerId || "Unknown";
            statusBox.style.display = 'block';

            // Hide it after 3 seconds
            setTimeout(() => {
              statusBox.style.display = 'none';
            }, 3000);
          }

          // Update user's location
          if (markerId && typeof window.setUserLocation === 'function') {
            window.setUserLocation(markerId);
            console.log("User location set via marker:", markerId);
          } else {
            console.warn("No valid markerId or setUserLocation function missing.");
          }
        });
      }
    });

    // Attach markerhandler to all markers
    document.querySelectorAll('a-marker').forEach(marker => {
      marker.setAttribute('markerhandler', '');
    });
  } else {
    console.error("AFRAME is not loaded.");
  }
});

            }
          });
        }
      });

      // Attach markerhandler to all markers
      document.querySelectorAll('a-marker').forEach(marker => {
        marker.setAttribute('markerhandler', '');
      });
    } else {
      console.error("AFRAME is not loaded.");
    }
  });
