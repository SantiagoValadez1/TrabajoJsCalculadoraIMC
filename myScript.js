document.getElementById("btnCalcular").addEventListener("click", calcularIMC);

class Persona {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    obtenerIMC() {
        return this.peso / (this.altura * this.altura);
    }

    obtenerCategoria(imc) {
        if (imc < 18.5) return "Bajo peso";
        else if (imc < 25) return "Normal";
        else if (imc < 30) return "Sobrepeso";
        else return "Obesidad";
    }

    obtenerImagen(categoria) {
        const imgs = {
            "Bajo peso": "bajoPeso.png",
            "Normal": "pesoNormal.png",
            "Sobrepeso": "sobrepeso.jpeg",
            "Obesidad": "oyegelda.png"
        };
        return imgs[categoria];
    }
}

function calcularIMC(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const div = document.getElementById("resultadoIMC");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Ingresa datos validos");
        return;
    }

    const persona = new Persona(peso, altura);
    const imc = persona.obtenerIMC();
    const categoria = persona.obtenerCategoria(imc);
    const imagen = persona.obtenerImagen(categoria);

    div.innerHTML = `
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>Categoria: ${categoria}</p>
        <img src="${imagen}" width="100">
    `;
}
