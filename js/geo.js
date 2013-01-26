function showMap(position) {
      // Show a map centered at (position.coords.latitude, position.coords.longitude).
    }

    // One-shot position request.
    navigator.geolocation.getCurrentPosition(showMap);