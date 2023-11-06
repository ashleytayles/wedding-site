class Map extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('code');

        if (urlParams.has('d')) {
        // Fetch the external HTML file
        fetch('components/map_c.html')
            .then(response => response.text())
            .then(html => {
                // Set the fetched HTML content as the innerHTML of the custom element
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching HTML file:', error);
            });
        }
        if (urlParams.has('e')) {
            // Fetch the external HTML file
            fetch('components/map_r.html')
                .then(response => response.text())
                .then(html => {
                    // Set the fetched HTML content as the innerHTML of the custom element
                    this.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error fetching HTML file:', error);
                });
            }
    }
}

customElements.define('map-component', Map);