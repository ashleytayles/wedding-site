class Nav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        // Fetch the external HTML file
        fetch('components/nav.html')
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

customElements.define('nav-component', Nav);