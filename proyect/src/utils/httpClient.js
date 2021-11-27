
const API = "https://api.themoviedb.org/3/";
export function get(path){
   return fetch(API+ path,{
        headers:{
           Authorization: "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjM5ZmVlYTQ3ODk0OTg4OTFlYzMzY2E5ODljMjJmMyIsInN1YiI6IjYxOGQ4M2ZiYzlkYmY5MDA0NGY2MmQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0C_jVLZ_cBJjUusXZP9MZUwKP7zsXaFPYMTw4DYAv8",
           "Content-type": "application/json;charset=utf-8",
           },
    }).then((result)=> result.json())
}