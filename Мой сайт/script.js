// Данные фильмов (используем локальные изображения)
const movies = [
{
id: 1,
title: "Аватар",
genre: "Фантастика, Приключения",
duration: "162 мин",
rating: "8.1",
year: "2009",
description: "Бывший морпех Джейк Салли прикован к инвалидному креслу. Несмотря на немощное тело, Джейк в душе по-прежнему остается воином. Он получает задание совершить путешествие в несколько световых лет к базе землян на планете Пандора.",
image: "images/avatar.jpg"
},
{
id: 2,
title: "Мстители: Война бесконечности",
genre: "Фантастика, Боевик",
duration: "149 мин",
rating: "8.4",
year: "2018",
description: "Пока Мстители и их союзники продолжают защищать мир от различных опасностей, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности.",
image: "images/avengers.jpg"
},
{
id: 3,
title: "Робин Гуд",
genre: "Приключения, Боевик",
duration: "140 мин",
rating: "6.7",
year: "2010",
description: "Легендарный герой средневековой Англии, защитник бедных и обездоленных, борется с несправедливостью и коррупцией.",
image: "images/robinhood.jpg"
},
{
id: 4,
title: "Форсаж",
genre: "Боевик, Криминал",
duration: "106 мин",
rating: "6.8",
year: "2001",
description: "Полицейский под прикрытием пытается выяснить, кто совершает дерзкие ограбления грузовиков, перевозящих дорогую электронику.",
image: "images/fastandfurious.jpg"
},
{
id: 5,
title: "Человек-паук",
genre: "Фантастика, Боевик",
duration: "121 мин",
rating: "7.4",
year: "2002",
description: "Питер Паркер - обычный школьник, который после укуса генетически модифицированного паука получает сверхчеловеческие способности.",
image: "images/spiderman.webp"
},
{
id: 6,
title: "Спартак",
genre: "Исторический, Драма",
duration: "196 мин",
rating: "8.0",
year: "1960",
description: "История восстания рабов под предводительством Спартака в Древнем Риме.",
image: "images/spartacus.webp"
},
{
id: 7,
title: "Отряд самоубийц",
genre: "Боевик, Приключения",
duration: "123 мин",
rating: "6.0",
year: "2016",
description: "Секретное правительственное агентство вербует группу опасных суперзлодеев для выполнения особо рискованных заданий.",
image: "images/suicide_squad.webp"
},
{
id: 8,
title: "Терминатор",
genre: "Фантастика, Боевик",
duration: "107 мин",
rating: "8.0",
year: "1984",
description: "Робот-убийца из постапокалиптического будущего прибывает в наши дни, чтобы убить женщину, чей будущий сын возглавит сопротивление машин.",
image: "images/terminator.jpg"
},
{
id: 9,
title: "Снайпер",
genre: "Боевик, Драма",
duration: "132 мин",
rating: "7.3",
year: "2014",
description: "История Криса Кайла, самого результативного снайпера в истории США.",
image: "images/orig.webp"
},
{
id: 10,
title: "Резидент",
genre: "Ужасы, Экшен",
duration: "100 мин",
rating: "6.6",
year: "2021",
description: "Девушка пытается выжить в городе, захваченном зомби.",
image: "images/resident.webp"
},
{
id: 11,
title: "Голодные игры",
genre: "Фантастика, Приключения",
duration: "142 мин",
rating: "7.2",
year: "2012",
description: "В постапокалиптическом государстве ежегодно проводятся смертельные игры, где дети сражаются насмерть на глазах у всей нации.",
image: "images/hunger_games.webp"
},
{
id: 12,
title: "Рэмпейдж",
genre: "Фантастика, Боевик",
duration: "107 мин",
rating: "6.1",
year: "2018",
description: "Приматолог пытается спасти своего друга-гориллу, который превратился в гигантского монстра после научного эксперимента.",
image: "images/ремпейдж.webp"
},
{
id: 13,
title: "Игра престолов",
genre: "Фэнтези, Драма",
duration: "55-80 мин (серия)",
rating: "9.2",
year: "2011-2019",
description: "Эпическая сага о борьбе за Железный Трон в вымышленном мире Семи Королевств.",
image: "images/gameofthrones.jpg"
},
{
id: 14,
title: "Гладиатор",
genre: "Исторический, Драма",
duration: "155 мин",
rating: "8.5",
year: "2000",
description: "Римский генерал Максимус становится гладиатором, чтобы отомстить за убийство своей семьи.",
image: "images/gladiator.jpeg"
},
{
id: 15,
title: "Лара Крофт",
genre: "Приключения, Боевик",
duration: "118 мин",
rating: "6.3",
year: "2018",
description: "Молодая и бесстрашная авантюристка Лара Крофт отправляется на поиски пропавшего отца.",
image: "images/laracroft.jpg"
}
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
// Навигация
setupNavigation();
// Загрузка фильмов на главную
loadMovies();
// Загрузка расписания
loadSchedule();
// Настройка бронирования
setupBooking();
// Настройка модального окна
setupModal();
// Настройка мобильного меню
setupMobileMenu();
// Установка минимальной даты для бронирования (сегодня)
const today = new Date().toISOString().split('T')[0];
document.getElementById('date-select').min = today;
document.getElementById('date-select').value = today;
});

// Настройка навигации
function setupNavigation() {
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
navLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
// Удаляем активный класс у всех ссылок и секций
navLinks.forEach(l => l.classList.remove('active'));
sections.forEach(s => s.classList.remove('active'));
// Добавляем активный класс к текущей ссылке
this.classList.add('active');
// Показываем соответствующую секцию
const targetId = this.getAttribute('href').substring(1);
document.getElementById(targetId).classList.add('active');
// Закрываем мобильное меню, если оно открыто
const navLinksContainer = document.querySelector('.nav-links');
navLinksContainer.classList.remove('active');
// Анимация бургера
burger.classList.remove('toggle');
});
});
}

// Загрузка фильмов
function loadMovies() {
const moviesContainer = document.getElementById('movies-container');
const movieSelect = document.getElementById('movie-select');
movies.forEach(movie => {
// Карточка фильма для главной
const movieCard = document.createElement('div');
movieCard.className = 'movie-card';
movieCard.innerHTML = `
<img src="${movie.image}" alt="${movie.title}" class="movie-poster">
<div class="movie-info">
<h3 class="movie-title">${movie.title}</h3>
<p class="movie-genre">${movie.genre} • ${movie.year}</p>
<div class="movie-actions">
<button class="btn btn-details" data-id="${movie.id}">Подробнее</button>
<button class="btn btn-buy" data-id="${movie.id}">Купить билет</button>
</div>
</div>
`;
moviesContainer.appendChild(movieCard);
// Опция для выбора фильма при бронировании
const option = document.createElement('option');
option.value = movie.id;
option.textContent = movie.title;
movieSelect.appendChild(option);
});
// Добавляем обработчики событий для кнопок
document.querySelectorAll('.btn-details').forEach(btn => {
btn.addEventListener('click', function() {
const movieId = parseInt(this.getAttribute('data-id'));
showMovieDetails(movieId);
});
});
document.querySelectorAll('.btn-buy').forEach(btn => {
btn.addEventListener('click', function() {
const movieId = parseInt(this.getAttribute('data-id'));
const movie = movies.find(m => m.id === movieId);
// Переключаемся на бронирование
document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
document.querySelector('.nav-links a[href="#booking"]').classList.add('active');
document.getElementById('booking').classList.add('active');
// Устанавливаем выбранный фильм
document.getElementById('movie-select').value = movieId;
});
});
}

// Загрузка расписания
function loadSchedule() {
const scheduleTable = document.getElementById('schedule-table');
const scheduleData = [
{ time: "10:00", movie: "Аватар", hall: "Зал 1", price: "250 руб." },
{ time: "13:30", movie: "Мстители: Война бесконечности", hall: "Зал 2", price: "350 руб." },
{ time: "15:00", movie: "Гладиатор", hall: "Зал 3", price: "350 руб." },
{ time: "17:00", movie: "Человек-паук", hall: "Зал 1", price: "450 руб." },
{ time: "19:30", movie: "Терминатор", hall: "Зал 2", price: "450 руб." },
{ time: "21:00", movie: "Голодные игры", hall: "VIP зал", price: "600 руб." },
{ time: "23:00", movie: "Резидент", hall: "Зал 3", price: "450 руб." }
];
// Заголовок таблицы
const header = document.createElement('div');
header.className = 'schedule-item schedule-header';
header.innerHTML = `
<div>Фильм</div>
<div>Время</div>
<div>Зал</div>
<div>Цена</div>
`;
scheduleTable.appendChild(header);
// Данные расписания
scheduleData.forEach(item => {
const scheduleItem = document.createElement('div');
scheduleItem.className = 'schedule-item';
scheduleItem.innerHTML = `
<div>${item.movie}</div>
<div>${item.time}</div>
<div>${item.hall}</div>
<div>${item.price}</div>
`;
scheduleTable.appendChild(scheduleItem);
});
// Обработчики для кнопок выбора даты
document.querySelectorAll('.date-btn').forEach(btn => {
btn.addEventListener('click', function() {
document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('active'));
this.classList.add('active');
// Здесь можно добавить загрузку расписания для выбранной даты
// loadScheduleForDate(this.textContent);
});
});
}

// Настройка бронирования
function setupBooking() {
const bookBtn = document.querySelector('.book-btn');
bookBtn.addEventListener('click', function() {
const movieSelect = document.getElementById('movie-select');
const dateSelect = document.getElementById('date-select');
const timeSelect = document.getElementById('time-select');
const seatSelect = document.getElementById('seat-select');
const movieId = parseInt(movieSelect.value);
const movie = movies.find(m => m.id === movieId);
const date = dateSelect.value;
const time = timeSelect.value;
const seats = parseInt(seatSelect.value);
if (!movie) {
alert('Пожалуйста, выберите фильм');
return;
}
// Расчет цены
let pricePerTicket = 350; // Базовая цена
const hour = parseInt(time.split(':')[0]);
if (hour < 12) {
pricePerTicket = 250; // Утренний сеанс
} else if (hour >= 17) {
pricePerTicket = 450; // Вечерний сеанс
}
const totalPrice = pricePerTicket * seats;
// Показать подтверждение бронирования
const confirmation = `
Вы успешно забронировали ${seats} билет(а) на фильм "${movie.title}"!
Детали бронирования:
Фильм: ${movie.title}
Дата: ${date}
Время: ${time}
Количество мест: ${seats}
Общая стоимость: ${totalPrice} руб.
Пожалуйста, подойдите в кассу кинотеатра за 30 минут до сеанса для оплаты и получения билетов.
`;
alert(confirmation);
// Сброс формы
document.getElementById('booking-form').reset();
});
}

// Настройка модального окна
function setupModal() {
const modal = document.getElementById('movie-modal');
const closeBtn = document.querySelector('.close-modal');
const modalDetails = document.getElementById('modal-movie-details');
// Закрытие модального окна
closeBtn.addEventListener('click', function() {
modal.style.display = 'none';
});
// Закрытие при клике вне окна
window.addEventListener('click', function(e) {
if (e.target === modal) {
modal.style.display = 'none';
}
});
}

// Показать детали фильма
function showMovieDetails(movieId) {
const movie = movies.find(m => m.id === movieId);
const modal = document.getElementById('movie-modal');
const modalDetails = document.getElementById('modal-movie-details');
if (!movie) return;
modalDetails.innerHTML = `
<div class="modal-movie-info">
<img src="${movie.image}" alt="${movie.title}" class="modal-poster">
<div class="modal-details">
<h2>${movie.title} (${movie.year})</h2>
<p><strong>Жанр:</strong> ${movie.genre}</p>
<p><strong>Продолжительность:</strong> ${movie.duration}</p>
<p><strong>Рейтинг:</strong> ${movie.rating}/10</p>
<p><strong>Описание:</strong> ${movie.description}</p>
<div class="modal-actions">
<button class="btn btn-buy-modal" data-id="${movie.id}">Купить билет</button>
</div>
</div>
</div>
`;
modal.style.display = 'block';
// Обработчик для кнопки покупки в модальном окне
document.querySelector('.btn-buy-modal').addEventListener('click', function() {
modal.style.display = 'none';
// Переход к бронированию
document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
document.querySelector('.nav-links a[href="#booking"]').classList.add('active');
document.getElementById('booking').classList.add('active');
// Установка выбранного фильма
document.getElementById('movie-select').value = movieId;
});
}

// Настройка мобильного меню
function setupMobileMenu() {
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', function() {
navLinks.classList.toggle('active');
burger.classList.toggle('toggle');
});
// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', function() {
navLinks.classList.remove('active');
burger.classList.remove('toggle');
});
});
}

// Анимация бургера
document.querySelector('.burger').addEventListener('click', function() {
this.classList.toggle('toggle');
});