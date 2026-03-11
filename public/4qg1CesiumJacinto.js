let sRating = 0;
let movies = [];
const key = 'mData';

document.querySelectorAll(".star").forEach(star => {
      star.addEventListener("click", function() {
        selectedRating = this.getAttribute("data-value");
        updateStars(selectedRating);
      });
    });
    
function updateStars(rating){
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('selected');
        if(parseInt(star.dataset.value) <= rating){
            star.classList.add('selected')
        }
    })
}

function loadMovies(){
    const stored = localStorage.getItem(key);
    if(stored){
        movies = JSON.parse(stored);
    }
}

function addMovie(){
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const genre = document.querySelector('select[name="genre"]').value;
    const movieRating = selectedRating || 0;
    
    if(title.trim() === '' || year.trim() === ''){
        alert('Please fill in title and year');
        return;
    } // error msg
    
    const entry = {
        title: title,
        year: year,
        genre: genre,
        rating: movieRating
    };

    movies.push(entry); // all movie entries are in the movies array, objs are pushed as indeces
    
    localStorage.setItem(key, JSON.stringify(movies)); //the magic line
    
    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.querySelector('select[name="genre"]').value = '';
    updateStars(0);
    selectedRating = 0;
    
    dispMov();
}

function dispMov(){
    mList.innerHTML = '';
    movies.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${entry.title}</strong> (${entry.year}) - Genre: ${entry.genre} - Rating: ${'&#9733;'.repeat(entry.rating)}`;
        mList.appendChild(li);
    });
}

window.onload = function(){
    loadMovies();
    dispMov();
};