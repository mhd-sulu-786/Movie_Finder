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
    link = link + `&t=${searchValue.value}&plot=full&r=json`;
    console.log(link);
    fetch(link)
        .then(response => response.json())
        .then(data => {
            searchValue.value='';
            title.innerHTML = data.Title;
            if (title.value=='undefined') {
                

                alert(' Wrong specling or name');
                searchValue.value='';
                console.error(error);
                document.getElementById('card_1').style.display='none';
            }
            else{
                document.getElementById('card_1').style.display='block';

            }
            // document.getElementById('dscribtion').innerHTML=data.plot;
            img.innerHTML = `<img src="${data.Poster}" alt="${data.Title}">`;
            Year.innerHTML = 'Year:-'+data.Year;
            Actors.innerHTML = 'Actors:-'+ data.Actors;
            Released.innerHTML = 'Released:-'+ data.Released;
            Awards.innerHTML = 'Awards:-'+ data.Awards;
            Country.innerHTML = 'country:-'+ data.Country;
            Director.innerHTML = 'Director:-'+ data.Director;
            Language.innerHTML = 'Language:-'+data.Language;
            Writer.innerHTML = 'Writer:-'+data.Writer;
            Genre.innerHTML = 'Genre:-'+data.Genre;
            imdbRating.innerHTML = 'IMDB Raiting:-'+data.imdbRating;
        })
        .catch(error => {
            alert(' Wrong specling or name');
            searchValue.value='';
            console.error(error);
            document.getElementById('card_1').style.display='none';
        });
}