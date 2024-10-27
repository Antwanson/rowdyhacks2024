document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("deloreanVideo");

  // API function
  function makeApiCall() {
    fetch("https://example.com/api/endpoint") // Replace with your API URL
      .then(response => response.json())
      .then(data => {
        console.log("API Response:", data); // Process the API response here
      })
      .catch(error => console.error("API Call Error:", error));
  }

  // Trigger API call when video ends
  video.addEventListener("ended", makeApiCall);
});
