// Movie data with local images
const movies = [
{ title: "Аватар", year: 2009, rating: 7.9, image: "images/avatar.jpg" },
{ title: "Голодные игры", year: 2012, rating: 7.2, image: "images/hunger_games.webp" },
{ title: "Снайпер", year: 2014, rating: 7.3, image: "images/orig.webp" },
{ title: "Терминатор", year: 1984, rating: 8.1, image: "images/terminator.jpg" },
{ title: "Гладиатор", year: 2000, rating: 8.5, image: "images/gladiator.jpeg" },
{ title: "Мстители: Война бесконечности", year: 2018, rating: 8.4, image: "images/avengers.jpg" },
{ title: "Резидент", year: 2002, rating: 6.7, image: "images/resident.webp" },
{ title: "Робин Гуд", year: 2010, rating: 6.6, image: "images/robinhood.jpg" },
{ title: "Форсаж", year: 2001, rating: 6.8, image: "images/fastandfurious.jpg" },
{ title: "Ремпейдж", year: 2018, rating: 6.1, image: "images/rampage.webp" },
{ title: "Отряд самоубийц", year: 2016, rating: 5.9, image: "images/suicide_squad.webp" },
{ title: "Шаг вперед 2: Улицы", year: 2008, rating: 6.5, image: "images/stepup.jpg" },
{ title: "Игра престолов", year: 2011, rating: 9.2, image: "images/gameofthrones.jpg" },
{ title: "Человек-паук", year: 2002, rating: 7.4, image: "images/spiderman.webp" },
];

// Schedule data
const schedule = {
today: [
{ movie: "Аватар", time: "14:00", hall: "Зал 1", format: "2D • 12+" },
{ movie: "Голодные игры", time: "16:30", hall: "Зал 2", format: "2D • 16+" },
{ movie: "Мстители: Война бесконечности", time: "19:00", hall: "Зал 3", format: "3D • 12+" },
{ movie: "Терминатор", time: "21:30", hall: "Зал 1", format: "2D • 18+" },
{ movie: "Форсаж", time: "18:00", hall: "Зал 4", format: "2D • 16+" },
{ movie: "Человек-паук", time: "20:45", hall: "Зал 2", format: "2D • 12+" },
],
tomorrow: [
{ movie: "Гладиатор", time: "15:00", hall: "Зал 1", format: "2D • 16+" },
{ movie: "Снайпер", time: "17:30", hall: "Зал 3", format: "2D • 18+" },
{ movie: "Резедент зло", time: "20:00", hall: "Зал 2", format: "2D • 18+" },
{ movie: "Отряд самоубийц", time: "22:30", hall: "Зал 4", format: "2D • 18+" },
{ movie: "Игра престолов", time: "19:15", hall: "Зал 1", format: "2D • 18+" },
{ movie: "Ремпейдж", time: "21:45", hall: "Зал 3", format: "2D • 16+" },
],
weekend: [
{ movie: "Аватар", time: "12:00", hall: "Зал 1", format: "3D • 12+" },
{ movie: "Голодные игры", time: "14:30", hall: "Зал 2", format: "2D • 16+" },
{ movie: "Шаг вперед", time: "17:00", hall: "Зал 4", format: "2D • 12+" },
{ movie: "Мстители: Война бесконечности", time: "19:30", hall: "Зал 3", format: "3D • 12+" },
{ movie: "Робин Гуд", time: "22:00", hall: "Зал 1", format: "2D • 16+" },
{ movie: "Человек-паук", time: "20:15", hall: "Зал 2", format: "2D • 12+" },
]
};

// Price mapping
const seatPrices = {
standard: 500,
comfort: 800,
vip: 1200
};

// Current ticket info
let currentTicketInfo = {
movie: "Аватар",
time: "Сегодня, 14:00",
hall: "Зал 1",
format: "2D • 12+",
image: "images/avatar.jpg"
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
// Initialize Swiper
const swiper = new Swiper('.hero-slider', {
loop: true,
speed: 1000,
autoplay: {
delay: 5000,
disableOnInteraction: false,
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
effect: 'fade',
fadeEffect: {
crossFade: true
},
});

// Render movies
renderMovies();
// Render schedule for today by default
renderSchedule('today');
// Setup schedule tab switching
setupScheduleTabs();
// Setup mobile menu
setupMobileMenu();
// Setup header scroll effect
setupHeaderScroll();
// Setup smooth scrolling for anchor links
setupSmoothScrolling();
// Setup modal functionality
setupModal();
// Setup ticket form functionality
setupTicketForm();
});

// Render movies to the grid
function renderMovies() {
const moviesGrid = document.getElementById('moviesGrid');
moviesGrid.innerHTML = '';
movies.forEach(movie => {
const movieCard = document.createElement('div');
movieCard.className = 'movie-card';
// Generate star rating HTML
const stars = Math.round(movie.rating / 2);
let starsHtml = '';
for (let i = 0; i < 5; i++) {
if (i < stars) {
starsHtml += '<i class="fas fa-star"></i>';
} else {
starsHtml += '<i class="far fa-star"></i>';
}
}
// Use placeholder if image not found
const imageSrc = movie.image;
movieCard.innerHTML = `
<img src="${imageSrc}" alt="${movie.title}" class="movie-poster" onerror="this.src='https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'">
<div class="movie-info">
<div>
<h3 class="movie-title">${movie.title}</h3>
<p class="movie-year">${movie.year}</p>
</div>
<div class="movie-rating">
${starsHtml}
<span>${movie.rating}</span>
</div>
</div>
`;
// Add click event to open ticket modal
movieCard.addEventListener('click', function() {
openTicketModal(movie.title, "14:00", "Зал 1", "2D • 12+", imageSrc);
});
moviesGrid.appendChild(movieCard);
});
}

// Render schedule for a specific day
function renderSchedule(day) {
const scheduleGrid = document.getElementById('scheduleGrid');
scheduleGrid.innerHTML = '';
schedule[day].forEach(session => {
const scheduleCard = document.createElement('div');
scheduleCard.className = 'schedule-card';
const dayText = day === 'today' ? 'Сегодня' : day === 'tomorrow' ? 'Завтра' : 'Сб-Вс';
scheduleCard.innerHTML = `
<div class="schedule-time">
<div class="time">${session.time}</div>
<div class="date">${dayText}</div>
</div>
<div class="schedule-info">
<h3>${session.movie}</h3>
<p>${session.hall} • ${session.format}</p>
<button class="btn buy-ticket-btn" style="margin-top: 10px; padding: 8px 15px; font-size: 14px;"
data-movie="${session.movie}"
data-time="${dayText}, ${session.time}"
data-hall="${session.hall}"
data-format="${session.format}">
Купить билет
</button>
</div>
`;
scheduleGrid.appendChild(scheduleCard);
});
// Add event listeners to buy ticket buttons
document.querySelectorAll('.buy-ticket-btn').forEach(btn => {
btn.addEventListener('click', function() {
const movie = this.getAttribute('data-movie');
const time = this.getAttribute('data-time');
const hall = this.getAttribute('data-hall');
const format = this.getAttribute('data-format');
// Find movie image
const movieData = movies.find(m => m.title === movie);
const image = movieData ? movieData.image : 'images/avatar.jpg';
openTicketModal(movie, time, hall, format, image);
});
});
}

// Setup schedule tab switching
function setupScheduleTabs() {
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
btn.addEventListener('click', function() {
// Remove active class from all buttons
tabBtns.forEach(b => b.classList.remove('active'));
// Add active class to clicked button
this.classList.add('active');
// Get day from data attribute
const day = this.getAttribute('data-day');
// Render schedule for selected day
renderSchedule(day);
});
});
}

// Setup mobile menu toggle
function setupMobileMenu() {
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
if (mobileMenuBtn && mainNav) {
mobileMenuBtn.addEventListener('click', function() {
mainNav.classList.toggle('active');
this.innerHTML = mainNav.classList.contains('active')
? '<i class="fas fa-times"></i>'
: '<i class="fas fa-bars"></i>';
});
// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
link.addEventListener('click', function() {
mainNav.classList.remove('active');
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
});
});
}
}

// Setup header scroll effect
function setupHeaderScroll() {
const header = document.getElementById('header');
if (header) {
window.addEventListener('scroll', function() {
if (window.scrollY > 100) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});
}
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});
}
});
});
}

// Setup modal functionality
function setupModal() {
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
if (modalOverlay && modalClose) {
// Close modal when clicking close button
modalClose.addEventListener('click', function() {
modalOverlay.style.display = 'none';
});
// Close modal when clicking outside
modalOverlay.addEventListener('click', function(e) {
if (e.target === modalOverlay) {
modalOverlay.style.display = 'none';
}
});
// Close modal with Escape key
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
modalOverlay.style.display = 'none';
}
});
}
}

// Setup ticket form functionality
function setupTicketForm() {
const seatCount = document.getElementById('seatCount');
const seatType = document.getElementById('seatType');
const totalAmount = document.getElementById('totalAmount');
const ticketForm = document.getElementById('ticketForm');
const successMessage = document.getElementById('successMessage');
const closeSuccess = document.getElementById('closeSuccess');
// Calculate total price
function calculateTotal() {
if (seatCount && seatType && totalAmount) {
const count = parseInt(seatCount.value);
const type = seatType.value;
const price = seatPrices[type];
const total = count * price;
totalAmount.textContent = total;
}
}
// Initialize calculation
calculateTotal();
// Update total when selections change
if (seatCount && seatType) {
seatCount.addEventListener('change', calculateTotal);
seatType.addEventListener('change', calculateTotal);
}
// Handle form submission
if (ticketForm) {
ticketForm.addEventListener('submit', function(e) {
e.preventDefault();
// In a real application, you would send data to server here
console.log('Ticket purchase data:', {
movie: currentTicketInfo.movie,
time: currentTicketInfo.time,
hall: currentTicketInfo.hall,
format: currentTicketInfo.format,
seatCount: seatCount.value,
seatType: seatType.value,
name: document.getElementById('name').value,
email: document.getElementById('email').value,
phone: document.getElementById('phone').value,
total: totalAmount.textContent
});
// Show success message
if (successMessage) {
successMessage.style.display = 'flex';
document.getElementById('modalOverlay').style.display = 'none';
// Reset form
ticketForm.reset();
calculateTotal();
}
});
}
// Close success message
if (closeSuccess && successMessage) {
closeSuccess.addEventListener('click', function() {
successMessage.style.display = 'none';
});
// Close success message when clicking outside
successMessage.addEventListener('click', function(e) {
if (e.target === successMessage) {
successMessage.style.display = 'none';
}
});
}
}

// Open ticket modal with specific movie info
function openTicketModal(movie, time, hall, format, image) {
const modalOverlay = document.getElementById('modalOverlay');
const modalMovieTitle = document.getElementById('modalMovieTitle');
const modalMovieTime = document.getElementById('modalMovieTime');
const modalMovieHall = document.getElementById('modalMovieHall');
const modalMovieFormat = document.getElementById('modalMovieFormat');
const modalMoviePoster = document.getElementById('modalMoviePoster');
if (modalOverlay && modalMovieTitle) {
// Update modal content
currentTicketInfo = {
movie: movie,
time: time,
hall: hall,
format: format,
image: image
};
modalMovieTitle.textContent = movie;
modalMovieTime.textContent = time;
modalMovieHall.textContent = hall;
modalMovieFormat.textContent = format;
// Use placeholder if image not found
modalMoviePoster.src = image;
modalMoviePoster.onerror = function() {
this.src = 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
};
// Show modal
modalOverlay.style.display = 'flex';
// Scroll to top of modal
setTimeout(() => {
const modal = document.getElementById('ticketModal');
if (modal) {
modal.scrollTop = 0;
}
}, 10);
}
}