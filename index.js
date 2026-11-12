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
        const deleteBtn = document.createElement('button'); 

        img.src = moviePosters[index];
        img.className = 'movie-poster';

        span.textContent = title;
        span.className = 'movie-title';

        deleteBtn.textContent = 'Удалить';
        deleteBtn.className = 'btn-delete';
        deleteBtn.addEventListener('click', () => {
            movieTitles.splice(index, 1);
            moviePosters.splice(index, 1);
            renderMovies(); 
        });
      
        li.append(img, span, deleteBtn); 
        movieList.append(li);
    });
}