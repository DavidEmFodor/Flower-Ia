var network = new brain.NeuralNetwork();

network.train([
    {input: {SepalLengthCm: 0.51, SepalWidthCm: 0.35, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.49, SepalWidthCm: 0.30, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.47, SepalWidthCm: 0.32, PetalLengthCm: 0.13, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.46, SepalWidthCm: 0.31, PetalLengthCm: 0.15, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.50, SepalWidthCm: 0.36, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.54, SepalWidthCm: 0.39, PetalLengthCm: 0.17, PetalWidthCm: 0.04}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.46, SepalWidthCm: 0.34, PetalLengthCm: 0.14, PetalWidthCm: 0.03}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.50, SepalWidthCm: 0.34, PetalLengthCm: 0.15, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.44, SepalWidthCm: 0.29, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.49, SepalWidthCm: 0.31, PetalLengthCm: 0.15, PetalWidthCm: 0.01}, output: {setosa: 1, versicolor: 0, virginica:0}},
    
    {input: {SepalLengthCm: 0.64, SepalWidthCm: 0.32, PetalLengthCm: 0.45, PetalWidthCm: 0.15}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.69, SepalWidthCm: 0.31, PetalLengthCm: 0.49, PetalWidthCm: 0.15}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.55, SepalWidthCm: 0.23, PetalLengthCm: 0.40, PetalWidthCm: 0.13}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.65, SepalWidthCm: 0.28, PetalLengthCm: 0.46, PetalWidthCm: 0.15}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.57, SepalWidthCm: 0.28, PetalLengthCm: 0.45, PetalWidthCm: 0.13}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.63, SepalWidthCm: 0.33, PetalLengthCm: 0.47, PetalWidthCm: 0.16}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.49, SepalWidthCm: 0.24, PetalLengthCm: 0.33, PetalWidthCm: 0.10}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.66, SepalWidthCm: 0.29, PetalLengthCm: 0.46, PetalWidthCm: 0.13}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.55, SepalWidthCm: 0.24, PetalLengthCm: 0.37, PetalWidthCm: 0.10}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.60, SepalWidthCm: 0.34, PetalLengthCm: 0.45, PetalWidthCm: 0.16}, output: {setosa: 0, versicolor: 1, virginica:0}},


    {input: {SepalLengthCm: 0.63, SepalWidthCm: 0.33, PetalLengthCm: 0.60, PetalWidthCm: 0.25}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.58, SepalWidthCm: 0.27, PetalLengthCm: 0.51, PetalWidthCm: 0.19}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.71, SepalWidthCm: 0.30, PetalLengthCm: 0.59, PetalWidthCm: 0.21}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.63, SepalWidthCm: 0.29, PetalLengthCm: 0.56, PetalWidthCm: 0.18}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.65, SepalWidthCm: 0.30, PetalLengthCm: 0.58, PetalWidthCm: 0.22}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.76, SepalWidthCm: 0.30, PetalLengthCm: 0.66, PetalWidthCm: 0.21}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.73, SepalWidthCm: 0.29, PetalLengthCm: 0.63, PetalWidthCm: 0.18}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.72, SepalWidthCm: 0.36, PetalLengthCm: 0.61, PetalWidthCm: 0.25}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.65, SepalWidthCm: 0.32, PetalLengthCm: 0.51, PetalWidthCm: 0.20}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.68, SepalWidthCm: 0.30, PetalLengthCm: 0.55, PetalWidthCm: 0.21}, output: {setosa: 0, versicolor: 0, virginica:1}},
])
function formatDouble(num) {
    if (num % 1 !== 0) {
        let strNum = num.toString().replace('.', '');
        return parseFloat("0." + strNum);
    }
    return num;
}
function update(SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm) {
    var entrada = {
        SepalLengthCm: SepalLengthCm,
        SepalWidthCm: SepalWidthCm,
        PetalLengthCm: PetalLengthCm,
        PetalWidthCm: PetalWidthCm
    };

    var resultado = network.run(entrada);

    var porcentajeSetosa = (resultado.setosa * 100).toFixed(2);
    var porcentajeVersicolor = (resultado.versicolor * 100).toFixed(2);
    var porcentajeVirginica = (resultado.virginica * 100).toFixed(2);
    
    // Determinamos cuál es el tipo de flor con mayor porcentaje
    var tipoFlor = "";
    if (resultado.setosa > resultado.versicolor && resultado.setosa > resultado.virginica) {
        tipoFlor = "Iris-setosa";
    } else if (resultado.versicolor > resultado.setosa && resultado.versicolor > resultado.virginica) {
        tipoFlor = "Iris-versicolor";
    } else {
        tipoFlor = "Iris-virginica";
    }
    
    console.log("El tipo de flor es: " + tipoFlor);
    console.log("Iris-setosa: " + porcentajeSetosa + "%");
    console.log("Iris-versicolor: " + porcentajeVersicolor + "%");
    console.log("Iris-virginica: " + porcentajeVirginica + "%");


    document.getElementById("resultado").innerText = "Resultado: " + tipoFlor;
}

document.getElementById("flowerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var sepalLength = parseFloat(document.getElementById("sepalLength").value);
    var sepalWidth = parseFloat(document.getElementById("sepalWidth").value);
    var petalLength = parseFloat(document.getElementById("petalLength").value);
    var petalWidth = parseFloat(document.getElementById("petalWidth").value);
    update(sepalLength, sepalWidth, petalLength, petalWidth);
});