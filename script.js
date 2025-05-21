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
  document.getElementById('cover-img').src = data.cover.image;
  document.getElementById('logo-img').src = data.cover.logo;
  document.getElementById('poster-title').textContent = data.cover.title;
  document.getElementById('poster-subtitle').textContent = data.cover.subtitle;
  document.getElementById('poster-desc').textContent = data.cover.description;

  // General Info
  const infoList = document.getElementById('info-list');
  infoList.innerHTML = data.generalInfo.map(item =>
    `<li><i class="fas ${item.icon}"></i> <strong>${item.title}:</strong> ${item.text}</li>`
  ).join('');

  // Food
  const foodList = document.getElementById('food-list');
  foodList.innerHTML = data.food.map(item =>
    `<div class="food-item">
      <img class="food-img" src="${item.image}" alt="${item.title}">
      <div class="food-info">
        <div class="food-title">${item.title}</div>
        <div class="food-desc">${item.desc}</div>
      </div>
    </div>`
  ).join('');

  // Transport
  const transportList = document.getElementById('transport-list');
  transportList.innerHTML = data.transport.map(item =>
    `<div class="transport-item">
      <img class="transport-img" src="${item.image}" alt="${item.title}">
      <div class="transport-info">
        <div class="transport-title">${item.title}</div>
        <div class="transport-desc">${item.desc}</div>
      </div>
    </div>`
  ).join('');

  // Map
  const mapContainer = document.getElementById('map-container');
  mapContainer.innerHTML = `<iframe src="${data.map.embed}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  // Contact
  const contact = data.contact;
  const contactContent = document.getElementById('contact-content');
  contactContent.innerHTML = `
    <img class="contact-img" src="${contact.image}" alt="تماس">
    <div><strong>آدرس:</strong> ${contact.address}</div>
    <div><strong>ایمیل:</strong> <a href="mailto:${contact.email}">${contact.email}</a></div>
    <div><strong>تلفن:</strong> ${contact.phone}</div>
    <div><strong>اینستاگرام:</strong> <a href="https://instagram.com/${contact.instagram}" target="_blank">@${contact.instagram}</a></div>
    <div><strong>وبسایت:</strong> <a href="https://${contact.website}" target="_blank">${contact.website}</a></div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosterData();
}); 