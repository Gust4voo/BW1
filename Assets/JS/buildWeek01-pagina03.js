// devo inserire url
let url = window.location.search;

// creo con urlsearch per il collegamento url del risultato del quiz
const parametro = new URLSearchParams(url);

// prendo dall'url il valore result
const score = parametro.get("result");

let numeroSuccessi = score;

let numeroTotale = 10;

document.getElementById(
    "rispostaPositiva"
).innerHTML = `<p>${numeroSuccessi}/${numeroTotale} questions</p>`;

let numeroFallimenti = numeroTotale - numeroSuccessi;
document.getElementById(
    "rispostaNegativa"
).innerHTML = `<p>${numeroFallimenti}/${numeroTotale} questions</p>`;

let percentualeSuccesso = (numeroSuccessi / numeroTotale) * 100;
document.getElementById("risultatoPositivo").innerHTML = percentualeSuccesso + "%";

let percentualeFallimento = 100 - percentualeSuccesso;
document.getElementById("risultatoNegativo").innerHTML = percentualeFallimento + "%";

// Le righe seguenti definiscono un oggetto data che contiene le informazioni necessarie per creare un grafico a torta.

var data = {
    labels: ["Correct", "Wrong"],
    datasets: [{
        data: [percentualeFallimento, percentualeSuccesso],
        backgroundColor: ["#c2128d", "#00ffff"],
        borderColor: ["#c2128d", "#00ffff"],
        borderWidth: 1,
    }, ],
};

var data = {
    labels: ["Wrong", "Correct"],
    datasets: [{
        data: [percentualeFallimento, percentualeSuccesso],
        backgroundColor: ["#c2128d", "#00ffff"],
        borderColor: ["#c2128d", "#00ffff"],
        borderWidth: 1,
    }, ],
};

// Le righe seguenti utilizzano la libreria Chart.js per creare un grafico a torta utilizzando i dati definiti nell'oggetto data.

var ctx = document.getElementById("ruotaRisultati").getContext("2d");
ctx.canvas.width = 600;
ctx.canvas.height = 600;
ctx.canvas.border = 1;

var ruotaRisultati = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
        responsive: false,
        cutoutPercentage: 72,
        maintainAspectRatio: false,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var index = tooltipItem.index;
                    return data.labels[index] + ": " + dataset.data[index] + "%";
                },
            },
        },
        legend: {
            display: false, // hide the legend
        },
    }, 
});

// Alla prima riga viene definita la funzione window.onload = function() {};. Questa funzione viene eseguita quando l'intera pagina è stata caricata.

window.onload = function() {};

// Le righe seguenti utilizzano un'istruzione condizionale if...else per visualizzare un messaggio di successo o di fallimento in base

if (numeroSuccessi > 5) {
    document.getElementById(
        "valutazioni"
    ).innerHTML = `<p class="p1">Congratulations!</p>
    <p class="p2correct">You passed the exam.</p>
    <p class="p3">We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)</p>`;
} else {
    document.getElementById(
        "valutazioni"
    ).innerHTML = `<p class="p1">We are sorry!</p>
      <p class="p2wrong">You didn't passed the exam. Try again.</p>`;
}
