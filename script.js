// Load trip data from JSON file
async function loadTripData() {
    try {
        const response = await fetch('data/travel.json');
        const data = await response.json();
        updatePageContent(data);
    } catch (error) {
        console.error('Error loading trip data:', error);
    }
}

// Update page content with trip data
function updatePageContent(data) {
    // Update title and description
    document.querySelector('h1').textContent = data.title;
    document.querySelector('h2').textContent = data.subtitle;
    document.querySelector('.summary').textContent = data.description;

    // Update highlights
    const highlightsList = document.querySelector('.highlights');
    highlightsList.innerHTML = data.highlights.map(highlight => 
        `<li><i class="fas fa-${highlight.icon}"></i> ${highlight.text}</li>`
    ).join('');

    // Update trip info
    const tripInfoList = document.querySelector('.trip-info');
    tripInfoList.innerHTML = data.tripInfo.map(info => 
        `<li><i class="fas fa-${info.icon}"></i> ${info.text}</li>`
    ).join('');

    // Update contact information
    document.getElementById('phone-number').textContent = data.contact.phone;
    document.querySelector('.register-btn').href = data.contact.registrationLink;
    document.querySelector('.social-info p').textContent = `@${data.contact.instagram}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadTripData();
}); 