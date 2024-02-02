const input = document.querySelector('#search-input');
const container = document.querySelector('.container');

input.addEventListener('input', function() {
    let value = input.value;

    fetch(`https://swapi.dev/api/people/?search=${value}`)
    .then(response => response.json())
    .then(data => {
        let results = data.results;
        container.innerHTML = '';

        results.forEach(character => {
            container.innerHTML += generateCard(character);
        })
    })
})
