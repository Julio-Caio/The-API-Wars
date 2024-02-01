fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.container')
        data.results.forEach(character => {
            container.innerHTML += generateCard(character);
        });
    })
    .catch(error => console.log(error));

function generateCard(characterData) {
    return (
        `
        <div class="rainbow-border" style="width: 18.5rem; border-radius: 1.2em">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${characterData.name}
                </div>
                <div class="card-body">
                    <img src="https://starwars-visualguide.com/assets/img/characters/${characterData.url.match(/\d+/)}.jpg" class="card-img-top" alt="...">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Height: ${characterData.height}</li>
                        <li class="list-group-item">Mass: ${characterData.mass}</li>
                        <li class="list-group-item">Hair Color: ${characterData.hair_color}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    );
}