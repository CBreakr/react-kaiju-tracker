// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:4000/kaijus/'
const sightingsURL = 'http://localhost:4000/sightings'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

const headers = {
    "content-type": "application/json",
    accept: "application/json"
};

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more kaiju fetches
export const addKaiju = (kaiju) => {
    return fetch(kaijusURL, {
        method: "POST",
        headers,
        body: JSON.stringify(kaiju)
    })
    .then(parseData)
    .catch(catchError);
}

export const editKaiju = (kaiju) => {
    return fetch(`${kaijusURL}/${kaiju.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(kaiju)
    })
    .then(parseData)
    .catch(catchError);
}

export const deleteKaiju = (kaiju_id) => {
    return fetch(`${kaijusURL}/${kaiju_id}`, {
        method: "DELETE",
        headers
    })
    .then(parseData)
    .catch(catchError);
}

//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () => fetch(sightingsURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more sighting fetches
export const addSighting = (sighting) => {
    return fetch(sightingsURL, {
        method: "POST",
        headers,
        body: JSON.stringify(sighting)
    })
    .then(parseData)
    .catch(catchError);
}
