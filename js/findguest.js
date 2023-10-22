// const urlParams = new URLSearchParams(window.location.search);
const queryParam = urlParams.get('guest')|| '';

// Check if the query parameter exists and update the HTML content
if (queryParam) {
    // Insert the outcome into the "result" div
    const resultDiv = document.getElementById('rsvpform');

}

// Create the iframe element
var iframe = document.createElement('iframe');

// Set iframe attributes (src, width, height, etc.)
iframe.src = `https://docs.google.com/forms/d/e/1FAIpQLScaTTeyz6EGhWNf82ztZsTJf6zzBHCpr631vm8E2vyu2FGYlg/viewform?embedded=true?usp=pp_url&entry.1498135098=${queryParam}`; // Replace with your desired URL
iframe.width = '100%'; // Set the desired width
iframe.height = '1250px'; // Set the desired height
iframe.frameborder = '0'; // Remove the iframe border

// Get the container element by its ID
var container = document.getElementById('rsvpform');

// Append the iframe to the container
container.appendChild(iframe);


// <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaTTeyz6EGhWNf82ztZsTJf6zzBHCpr631vm8E2vyu2FGYlg/viewform?embedded=true" width="640" height="690" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>