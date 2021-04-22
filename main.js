// 
function keyStart() {
    let inputSearch = document.querySelector('.input-search')
    search(inputSearch.value);
}

function search(input) {

    let url = `https://www.omdbapi.com/?t=${input}&apikey=${key}`


    fetch(url)
        .then((response) => response.json())
        .then((data) => displayMovie(selector, data.Poster, data.Title, data.Year, data.Plot))
        .then((data) => showMore())
        .catch((error) => console.error(error));
    
        
    // display movies
    

    const selector = document.getElementById("movie")

    const displayMovie = (selector, poster, name, date, description) =>{
        selector.innerHTML += `
       
        <div class="card-body" id="info">
            <br>
            <img src="${poster}" alt="poster of ${name}">
            <h1>${name}</h1>
            <h3>${date} </h2>
        <div>
        <br>
        <button type="button" class="mybtn btn btn-primary" id="myBtn" onclick="showMore()">Plus d'information</button>
            <div id="myModal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <h4>${name}</h4>
                <h5> date de parution: ${date}</h5>
                <p> synopsis: ${description}</p>
              </div>
            </div>
            <br>`
            

    }

}
// popup

const showMore = () => {
    let modal = document.getElementsByClassName("modal")[0];
    let btn = document.getElementsByClassName("mybtn")[0];
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



function intersection() {
    // intersection Observer 
    var options = {
        root: document.getElementById('movie'),
        rootMargin: '0px',
        threshold: 1.0
    }

    var observer = new IntersectionObserver(callback, options);

    var target = document.getElementById('#listItem');
observer.observe(target);
}

