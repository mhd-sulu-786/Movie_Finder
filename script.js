const accessKey = "eec0fb5";
let link = `https://www.omdbapi.com/?apikey=${accessKey}`;

const Year = document.getElementById('year');
const Actors = document.getElementById('Actors');
const Released = document.getElementById('Released');
const Awards = document.getElementById('Awards');
const Country = document.getElementById('Country');
const Director = document.getElementById('Director');
const Language = document.getElementById('Language');
const Writer = document.getElementById('Writer');
const Genre = document.getElementById('Genre');
const imdbRating = document.getElementById('imdbRating');
const img = document.getElementById('img');
const title = document.getElementById('title');
let searchValue = document.getElementById('search');
let btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", Push_data);

function Push_data() {
    // Reset the link variable to the original API URL
    link = `https://www.omdbapi.com/?apikey=${accessKey}`;

    // Append the search parameters
    link = link + `&t=${searchValue.value}&plot=full&r=json`;

    console.log(link);

    fetch(link)
        .then(response => response.json())
        .then(data => {
            searchValue.value = '';

            if (data.Title === undefined || data.Title === "N/A") {
                alert('Wrong spelling or name');
                document.getElementById('card_1').style.display = 'none';
            } else {
                document.getElementById('card_1').style.display = 'block';
                title.innerHTML = data.Title;

                img.innerHTML = `<img src="${data.Poster}" alt="${data.Title}">`;
                Year.innerHTML = 'Year: ' + data.Year;
                Actors.innerHTML = 'Actors: ' + data.Actors;
                Released.innerHTML = 'Released: ' + data.Released;
                Awards.innerHTML = 'Awards: ' + data.Awards;
                Country.innerHTML = 'Country: ' + data.Country;
                Director.innerHTML = 'Director: ' + data.Director;
                Language.innerHTML = 'Language: ' + data.Language;
                Writer.innerHTML = 'Writer: ' + data.Writer;
                Genre.innerHTML = 'Genre: ' + data.Genre;
                imdbRating.innerHTML = 'IMDB Rating: ' + data.imdbRating;
            }
        })
        .catch(error => {
            alert('Error fetching data. Please try again.');
            searchValue.value = '';
            console.error(error);
            document.getElementById('card_1').style.display = 'none';
        });
}
