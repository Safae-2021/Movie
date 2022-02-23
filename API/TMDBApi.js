

const API_TOKEN ="6af2198ca66343ed8e37d7631e7e5fcf";
export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url)  
    .then((response) => response.json())
    .catch((error) => console.error(error))
    
}