const form = document.querySelector('form');
const voornaamInput = document.getElementById('voornaam');
const naamInput = document.getElementById('naam');
const gebruikersnaamInput = document.getElementById('gebruikersnaam');
const adresInput = document.getElementById('adres');
const landInput = document.getElementById('land');
const provincieInput = document.getElementById('provincie');
const emailInput = document.getElementById('email');




let errors = [];



function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

