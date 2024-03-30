const apiUrl = "https://api.themoviedb.org/3";



export function get(path) {
    const apiKey = '188bd6678a62441e7ccc497076ec844e'; // Reemplaza 'tu_api_key' con tu API Key de TMDb
    return fetch(apiUrl + path + `?api_key=${apiKey}`)
        .then((result) => result.json());
}