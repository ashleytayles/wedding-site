class Food extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('code');

        if (urlParams.has('d')) {
        // Fetch the external HTML file
        fetch('components/food.html')
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

customElements.define('food-component', Food);