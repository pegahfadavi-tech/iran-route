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

async function loadPosterData() {
  try {
    const response = await fetch('poster-data.json');
    const data = await response.json();
    updatePosterContent(data);
  } catch (error) {
    console.error('Error loading poster data:', error);
  }
}

function updatePosterContent(data) {
  // Cover
  document.getElementById('cover-img').src = data.coverImage;
  document.getElementById('logo-img').src = data.logo;
  document.getElementById('poster-title').textContent = data.title;
  document.getElementById('poster-subtitle').textContent = data.subtitle;

  // Highlights
  const highlightsList = document.getElementById('highlights-list');
  highlightsList.innerHTML = data.highlights.map(h =>
    `<li><i class="fas ${h.icon}"></i> ${h.text}</li>`
  ).join('');

  // Details
  const detailsList = document.getElementById('details-list');
  detailsList.innerHTML = data.details.map(d =>
    `<li><i class="fas ${d.icon}"></i> ${d.text}</li>`
  ).join('');

  // Google Map
  const mapContainer = document.getElementById('map-container');
  mapContainer.innerHTML = `<iframe src="${data.googleMapEmbed}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  // Contact
  const contact = data.contact;
  const contactContent = document.getElementById('contact-content');
  contactContent.innerHTML = `
    <div><strong>تلفن:</strong> ${contact.phone}</div>
    <div><strong>ایمیل:</strong> <a href="mailto:${contact.email}">${contact.email}</a></div>
    <div><strong>اینستاگرام:</strong> <a href="https://instagram.com/${contact.instagram}" target="_blank">@${contact.instagram}</a></div>
    <div><strong>ثبت‌نام:</strong> <a href="${contact.registerLink}" target="_blank">لینک ثبت‌نام</a></div>
    <div><img src="${contact.qrCode}" alt="QR ثبت‌نام" style="max-width:120px; margin-top:1rem;"></div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosterData();
}); 