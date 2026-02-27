// Add a new service dynamically
document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-cards');

    const newService = document.createElement('div');
    newService.classList.add('col-md-6', 'col-lg-4');

    newService.innerHTML = `
        <div class="service-card p-5 text-center h-100">
            <i class="bi bi-cloud-arrow-up display-3 mb-3"></i>
            <h5 class="fw-bold mb-3">Cloud Services</h5>
            <p>Reliable cloud hosting and storage solutions to scale your business seamlessly.</p>
        </div>
    `;

    servicesContainer.appendChild(newService);
});