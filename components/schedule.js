class Schedule extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

        const urlParams = new URLSearchParams(queryString);
        urlParams.get('d');
        urlParams.get('e');

        if (urlParams.has('d')) {
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
        if (urlParams.has('e')) {
            // Fetch the external HTML file
            fetch('components/schedule_r.html')
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