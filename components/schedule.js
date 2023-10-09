class Schedule extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('code');

        if (pageParam == 100) {
        // Fetch the external HTML file
        fetch('components/schedule_c.html')
            .then(response => response.text())
            .then(html => {
                // Set the fetched HTML content as the innerHTML of the custom element
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching HTML file:', error);
            });
        }
        if (pageParam == 930) {
            // Fetch the external HTML file
            fetch('components/schedule_cr.html')
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

customElements.define('schedule-component', Schedule);