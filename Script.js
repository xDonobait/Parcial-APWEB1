document.getElementById('nomina-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const horas = parseInt(document.getElementById('horas').value);
    const valorHora = 51000; //Valor de cada hora
    const maxHoras = 76; //Maximo de horas mensuales

    if (horas > maxHoras) {
        alert('El número de horas no puede ser mayor a 76.');
        return;
    }

    const salarioMensual = horas * valorHora; //Multiplicamos la cantidad de horas por el valor de cada una
    const descuento = salarioMensual * 0.08; //Calculamos el descuento multiplicandolo
    const salarioNeto = salarioMensual - descuento; //Calculamos el valor total restando

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h3>Resultados para ${nombre}:</h3>
        <p>Salario Bruto: $${salarioMensual.toLocaleString()}</p>
        <p>Descuento (8%): $${descuento.toLocaleString()}</p>
        <p><strong>Salario Neto: $${salarioNeto.toLocaleString()}</strong></p>
    `; //Resultados
});
