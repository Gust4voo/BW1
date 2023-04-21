// Il codice utilizza il metodo querySelectorAll per selezionare tutti gli elementi del DOM con la classe starColor. In seguito, viene usato il metodo forEach per associare l'evento mouseover a ciascuno degli elementi selezionati.


const stars = document.querySelectorAll(".starColor");

stars.forEach((starColor) => {
  starColor.addEventListener("mouseover", () => {
    const currentValue = parseInt(starColor.getAttribute("data-value"));
    stars.forEach((s) => {
      if (parseInt(s.getAttribute("data-value")) <= currentValue) {
        s.classList.add("selected");
      } else {
        s.classList.remove("selected");
      }
    });
  });

  // l'evento click associato a ciascun elemento, funziona allo stesso modo dell'evento mouseover, ma rimuove innanzitutto la classe selected da tutti gli elementi e poi aggiunge la classe selected solo agli elementi con un data-value inferiore o uguale al valore corrente.

  starColor.addEventListener("click", () => {
    const currentValue = parseInt(starColor.getAttribute("data-value"));
    stars.forEach((s) => {
      s.classList.remove("selected");
      if (parseInt(s.getAttribute("data-value")) <= currentValue) {
        s.classList.add("selected");
      }
    });
  });
});