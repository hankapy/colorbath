// Hae elementit
const fontTitleSelect = document.getElementById('font-title');
const fontTextSelect = document.getElementById('font-text');
const primaryColorSelect = document.getElementById('primary-color');
const secondaryColorSelect = document.getElementById('secondary-color');
const accentColor1Select = document.getElementById('accent-color1');
const accentColor2Select = document.getElementById('accent-color2');
const exampleBox = document.querySelector('.example-box');
const exampleTitles = document.querySelectorAll('.example-box .example-title'); // Hae kaikki otsikot
const exampleText = document.querySelector('.example-box .example-text');
const invertedExampleBox = document.querySelector('.inverted');
const invertedExampleTitles = invertedExampleBox.querySelectorAll('.example-title'); // Hae kaikki otsikot
const invertedExampleText = invertedExampleBox.querySelector('.example-text');
const accentButtons = document.querySelectorAll('.accent-button');

// Lisää tapahtumankuuntelijat
fontTitleSelect.addEventListener('change', (event) => {
    exampleTitles.forEach(title => {
        title.style.fontFamily = event.target.value; // Muutetaan kaikkien otsikoiden fontti
    });
    invertedExampleTitles.forEach(title => {
        title.style.fontFamily = event.target.value; // Muutetaan myös toisen boksin otsikkofontti
    });
});

fontTextSelect.addEventListener('change', (event) => {
    exampleText.style.fontFamily = event.target.value; // Ensimmäisen boksin tekstifontti
    invertedExampleText.style.fontFamily = event.target.value; // Toisen boksin tekstifontti
});

primaryColorSelect.addEventListener('change', (event) => {
    exampleTitles.forEach(title => {
        title.style.color = event.target.value; // Muutetaan kaikkien otsikoiden väri
    });
    exampleText.style.color = event.target.value; // Ensimmäisen boksin tekstiväri

    // Muutetaan toisen boksin värit päinvastaisiksi
    invertedExampleTitles.forEach(title => {
        title.style.color = event.target.value === '#000' ? '#fff' : '#000'; // Toisen boksin otsikoiden väri
    });
    invertedExampleText.style.color = event.target.value === '#000' ? '#fff' : '#000'; // Toisen boksin tekstiväri
});

secondaryColorSelect.addEventListener('change', (event) => {
    exampleBox.style.backgroundColor = event.target.value; // Ensimmäisen boksin taustaväri
    invertedExampleBox.style.backgroundColor = event.target.value === '#000' ? '#fff' : '#000'; // Muutetaan toisen boksin taustaväri päinvastaiseksi

    // Varmistetaan, että tekstivärit päivittyvät oikein
    exampleText.style.color = event.target.value === '#000' ? '#fff' : '#000'; // Ensimmäisen boksin tekstiväri
    exampleTitles.forEach(title => {
        title.style.color = event.target.value === '#000' ? '#fff' : '#000'; // Ensimmäisen boksin otsikoiden väri
    });
    invertedExampleText.style.color = event.target.value; // Toisen boksin tekstiväri
    invertedExampleTitles.forEach(title => {
        title.style.color = event.target.value; // Toisen boksin otsikoiden väri
    });
});

accentColor1Select.addEventListener('change', (event) => {
    accentButtons[0].style.backgroundColor = event.target.value;
    invertedExampleBox.querySelector('.accent-button').style.backgroundColor = event.target.value; // Muutetaan toisen boksin painikkeen väri
});

accentColor2Select.addEventListener('change', (event) => {
    accentButtons[1].style.backgroundColor = event.target.value;
    invertedExampleBox.querySelectorAll('.accent-button')[1].style.backgroundColor = event.target.value; // Muutetaan toisen boksin toisen painikkeen väri
});
