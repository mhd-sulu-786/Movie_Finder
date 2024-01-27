
const accessKey = "eec0fb5";
const baseUrl = `https://www.omdbapi.com/?apikey=${accessKey}`;
const searchValue = document.getElementById('search');
const btnSearch = document.getElementById("btnSearch");
const corsProxy = 'https://cors-anywhere.herokuapp.com/';


btnSearch.addEventListener("click", Push_data);

function Push_data() {
    const searchTerm = searchValue.value.trim();

    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }

    const url = `${corsProxy}${baseUrl}&t=${searchTerm}&plot=full&r=json`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data);

            if (data.Error) {
                alert(`Error: ${data.Error}`);
                document.getElementById('card_1').style.display = 'none';
            } else {
                document.getElementById('card_1').style.display = 'block';
                document.getElementById('title').innerHTML = data.Title;
                document.getElementById('img').src = data.Poster;
                document.getElementById('Year').innerHTML = 'Year: ' + data.Year;
                document.getElementById('Actors').innerHTML = 'Actors: ' + data.Actors;
                document.getElementById('Released').innerHTML = 'Released: ' + data.Released;
                document.getElementById('Awards').innerHTML = 'Awards: ' + data.Awards;
                document.getElementById('Country').innerHTML = 'Country: ' + data.Country;
                document.getElementById('Director').innerHTML = 'Director: ' + data.Director;
                document.getElementById('Language').innerHTML = 'Language: ' + data.Language;
                document.getElementById('Writer').innerHTML = 'Writer: ' + data.Writer;
                document.getElementById('Genre').innerHTML = 'Genre: ' + data.Genre;
                document.getElementById('imdbRating').innerHTML = 'IMDB Rating: ' + data.imdbRating;
            }
        })
        .catch(error => {
            alert('Error fetching data. Please try again.');
            console.error('Fetch error:', error);
            document.getElementById('card_1').style.display = 'none';
        });
}