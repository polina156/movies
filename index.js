const movieTitles = [
    'Космическая станция', 
    'Тайна старого дома', 
    'Поезд на север'
];
const moviePosters = [
    'covers/space.jpg', 
    'covers/house.jpg', 
    'covers/train.jpg'
];

function renderMovies() {
    movieList.innerHTML = ''; 

    movieTitles.forEach((title, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const span = document.createElement('span');

        img.src = moviePosters[index];
        img.className = 'movie-poster';

        span.textContent = title;
        span.className = 'movie-title';

        li.append(img, span);
        movieList.append(li);
    });
}

renderMovies();