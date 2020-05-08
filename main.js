function mainFunction() {
    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value;
    var random = Math.floor(Math.random() * (+max - +min)) + +min; 
    document.getElementById("randomNumber").innerHTML = random;
};