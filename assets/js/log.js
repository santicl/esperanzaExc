import { getData, setSpaces, LOCATION } from "./components/components.js";

// Paths to URL
const esperanzaPATH = 'https://exhibidor.netlify.app/hospital-esperanza.html';
const esperanzaPATHAlternate = 'http://localhost/esperanza/hospital-esperanza.html';

const colonialPATH = 'https://exhibidor.netlify.app/colonial.html';
const colonialPATHAlternate = 'http://localhost/esperanza/colonial.html';

const crecerPATH = 'https://exhibidor.netlify.app/crecer.html';
const crecerPATHAlternate = 'http://localhost/esperanza/crecer.html';

// API'S
const API_ESPERANZA = 'https://api-esperanza-default-rtdb.firebaseio.com/esperanza.json';
const API_CRECER = 'https://api-crecer-default-rtdb.firebaseio.com/crecer.json';
const API_COLONIAL = 'https://api-colonial-default-rtdb.firebaseio.com/colonial.json';


setSpaces();

const main = (API) => {
    window.onload = getData(API);
}

if (LOCATION === esperanzaPATH || LOCATION === esperanzaPATHAlternate) {
    main(API_ESPERANZA);
}

if (LOCATION === colonialPATH || LOCATION === colonialPATHAlternate) {
    main(API_COLONIAL);
}

if (LOCATION === crecerPATH || LOCATION === crecerPATHAlternate) {
    main(API_CRECER);    
}