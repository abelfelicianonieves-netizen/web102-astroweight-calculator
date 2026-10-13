var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

planets.forEach(function(planet) {
    var option = document.createElement('option');
    option.value = planet[0];
    option.textContent = planet[0];
    document.getElementById('planets').appendChild(option);
});

function calculateWeight(weight, planetName) {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i][0] === planetName) {
            return (weight * planets[i][1]).toFixed(2);
        }
    }
}

function handleClickEvent(e) {
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(userWeight, planetName);

    document.getElementById('output').textContent =
        `If you were on ${planetName}, you would weigh ${result}lbs!`;
}

document.getElementById('calculate-button').onclick = handleClickEvent;