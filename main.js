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

    // display movies

    const selector = document.getElementById("movie")

    const displayMovie = (selector, poster, name, date, description) => {
        selector.innerHTML += `
       
        <div>
        <br>
        <img src="${poster}" alt="poster of ${name}">
        </div>
        <div>
            <h1>${name}</h1>
            <h3>${date} </h2>
        <div>
        <br>
        <button id="myBtn">Read More</button>
            <div id="myModal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <h4> date de parution: ${date}</h4>
                <p> synopsis: ${description}</p>
              </div>
            </div>
            <br>`
            

    }
}

// popup

function showMore() {

    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
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
