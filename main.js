// Logic for temperature converter
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let fromType = document.querySelector("#fromType");
    let toType = document.querySelector("#toType");
    let result = document.querySelector("#result");

    if (inputValue == "") {
        alert("Please Enter any Number....")
        location.reload()
    }

    else if (fromType.value == "celcius" && toType.value == "celcius") {
        let Celcius = Number.parseFloat(inputValue) * 1
        result.innerHTML = Celcius.toFixed(2) + ` &deg;C`
    }
    
    else if (fromType.value == "celcius" && toType.value == "fahrenheit") {
        let Fahrenheit = Number.parseFloat(inputValue) * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    
    else if (fromType.value == "celcius" && toType.value == "kelvin") {
        let Kelvin = Number.parseFloat(inputValue) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
    
    else if (fromType.value == "fahrenheit" && toType.value == "celcius") {
        let Celcius = [(Number.parseFloat(inputValue) - 32) * 5]/9
        result.innerHTML = Celcius.toFixed(2) + ` &deg;C`
    }
    
    else if (fromType.value == "fahrenheit" && toType.value == "fahrenheit") {
        let Fahrenheit = Number.parseFloat(inputValue) * 1
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    
    else if (fromType.value == "fahrenheit" && toType.value == "kelvin") {
        let Kelvin = (Number.parseFloat(inputValue) - 32) * (5 / 9) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
    
    else if (fromType.value == "kelvin" && toType.value == "celcius") {
        let Celcius = Number.parseFloat(inputValue) - 273.15
        result.innerHTML = Celcius.toFixed(2) + ` &deg;C`
    }
    
    else if (fromType.value == "kelvin" && toType.value == "fahrenheit") {
        let Fahrenheit = (Number.parseFloat(inputValue) - 273.15) * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    
    else if (fromType.value == "kelvin" && toType.value == "kelvin") {
        let Kelvin = Number.parseFloat(inputValue) * 1
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
}