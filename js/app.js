const countryDropdown = document.getElementById('countryDropdown');
const stateDropdown = document.getElementById('stateDropdown');
const cityDropdown = document.getElementById('cityDropdown');


const data = {
    USA: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Houston", "Dallas", "Austin"]
    },
    Canada: {
        Ontario: ["Toronto", "Ottawa", "London"],
        Quebec: ["Montreal", "Quebec City", "Gatineau"]
    }
};

// Populate country dropdown
for (const country in data) {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countryDropdown.appendChild(option);
}

countryDropdown.addEventListener('change', function() {
    stateDropdown.innerHTML = '<option value="">Select State</option>';
    cityDropdown.innerHTML = '<option value="">Select City</option>';

    const states = data[this.value];
    for (const state in states) {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    }
});

stateDropdown.addEventListener('change', function() {
    cityDropdown.innerHTML = '<option value="">Select City</option>';
    
    const cities = data[countryDropdown.value][this.value];
    for (const city of cities) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    }
});