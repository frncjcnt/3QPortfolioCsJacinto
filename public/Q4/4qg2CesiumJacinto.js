let movies = {};
const key = 'mData';

document.querySelectorAll(".star").forEach(star => { //determines rating
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

    if(title.trim() === '' || year.trim() === ''){
        alert('Please fill in title and/or year');
        return;
    } // error msg

    const newrating = parseInt(selectedRating) || 0;
    if(movies[title]){
        movies[title].ratings.push(newrating);
    }
    else{
    movies[title] = {
        year,
        genre,
        ratings: [newrating]
    };
    }

    localStorage.setItem(key, JSON.stringify(movies)); //the magic line
    
    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.querySelector('select[name="genre"]').value = '';
    selectedRating = 0;
    updateStars(0);

    dispMov();
}

function dispMov() { //displays all movies in a ul
    const mList = document.getElementById('mList');
    mList.innerHTML = '';

    Object.entries(movies).forEach(([title, entry]) => {
        let sum = 0;
        for (let i = 0; i < entry.ratings.length; i++) {
            sum += parseInt(entry.ratings[i]);
        }
        const avg = Math.round(sum / entry.ratings.length); //idk how to make partially colored stars, .: js round it up/down to nearest int
        const li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong> (${entry.year}) - Genre: ${entry.genre} - Rating: ${'&#9733;'.repeat(avg)} (${entry.ratings.length}) <button onclick="delM('${title}')">Delete</button>`;
        mList.appendChild(li);
    });
}

window.onload = function(){
    loadMovies();
    dispMov();
};

// 2nd graded

function clearAll(){ //clear all localstorage entries (for debugging & tidying up), comes w/ confirmation
    if(!confirm('Are you sure you want to clear all entries?')){
        return;
    }
    localStorage.removeItem(key);
    movies = {};
    dispMov();
}

function delM(title){ //delete a specific movie entry
    delete movies[title];
    localStorage.setItem(key, JSON.stringify(movies));
    dispMov();
}

//movie entries are updated every time dispmov is called