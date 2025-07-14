(function () {
  if (window.initAscensor) return;

  window.initAscensor = function initAscensor() {
    const pisoBtn = document.getElementById("piso1"),
      cabina = document.getElementById("cabina"),
      cable = document.getElementById("cable"),
      polea = document.getElementById("polea"),
      mecanismo = document.querySelector(".mecanismo"),
      puerta1 = document.querySelector('.puerta-ascensor-1'),
      puerta2 = document.querySelector('.puerta-ascensor-2');
    document.getElementById('fuerza').value=0;
document.getElementById('aceleracion').value=0;
document.getElementById('masa').value=0;

document.getElementById('tension').value=0;
document.getElementById('peso').value=0;
    if (!pisoBtn || !cabina || !cable || !polea || !mecanismo || !puerta1 || !puerta2) {
      console.warn("Ascensor: algunos elementos no se encontraron en el DOM");
      return;
    }

    let contador = 0,
      cantidad = 0,
      moviendo = false;

    function Fuerza() {
      let tiempo = setInterval(() => {
        cantidad += 1;
        let aceleracion = document.getElementById('aceleracion').value;
        let masa = parseInt(document.getElementById('masa').value);
        document.getElementById('fuerza').value = cantidad;
        if (aceleracion === 0 || masa === 0) {
          clearInterval(tiempo);
          cantidad = 0;
          document.getElementById('fuerza').value = 0;
        }
        if (cantidad >= masa * aceleracion) {
          clearInterval(tiempo);
          document.getElementById('fuerza').value = masa * aceleracion;
          document.getElementById('tension').value = parseFloat(document.getElementById('fuerza').value) + parseFloat(document.getElementById('peso').value);
        }
      }, 1);
    }

    function cambiarPiso() {
      console.log("Piso cambiado");
      if (!moviendo) {
        moviendo = true;
        puerta1.classList.remove('abrir');
        puerta1.classList.add('cerrar');
        puerta2.classList.remove('abrir');
        puerta2.classList.add('cerrar');
        pisoBtn.classList.add('btn-active');
        setTimeout(subirPiso, 2000);
      }
    }

    function subirPiso() {
      if (document.getElementById('masa').value < 600) {
        document.getElementById('aceleracion').value = 2;

        if (contador === 0) {
          pisoBtn.classList.add('btn-active');
          mecanismo.classList.remove("down");
          mecanismo.classList.add("move");
          mecanismo.classList.add("up");
          cable.classList.add("movement", "upper");
          cable.classList.remove("bajar");
          polea.classList.add("subir");
          polea.classList.remove("bajar");
          contador = 1;

          document.getElementById('fuerza').value = Math.abs(parseFloat(document.getElementById('aceleracion').value)) * parseFloat(document.getElementById('masa').value);
          document.getElementById('tension').value = parseFloat(document.getElementById('fuerza').value) + parseFloat(document.getElementById('peso').value);

          if (document.getElementById('aceleracion').value >= 0) {
            let tiempo1 = setTimeout(() => {
              document.getElementById('aceleracion').value = -4;
              let tiempo = setInterval(() => {
                document.getElementById('fuerza').value = Math.abs(parseFloat(document.getElementById('aceleracion').value)) * parseFloat(document.getElementById('masa').value);
                document.getElementById('tension').value = parseFloat(document.getElementById('fuerza').value) + parseFloat(document.getElementById('peso').value);

                if (parseFloat(document.getElementById('aceleracion').value) <= 0) {
                  document.getElementById('aceleracion').value = 0;
                  document.getElementById('fuerza').value = 0;
                  document.getElementById('tension').value = document.getElementById('peso').value;
                  clearInterval(tiempo);
                  pisoBtn.classList.remove('btn-active');
                  puerta1.classList.remove('cerrar');
                  puerta2.classList.remove('cerrar');
                  puerta2.classList.add('abrir');
                  puerta1.classList.add('abrir');
                }
              }, 900);
            }, 3000);
          }

        } else if (contador === 1) {
          mecanismo.classList.remove("move", "up");
          mecanismo.classList.add("down");
          cable.classList.remove("movement", "upper");
          cable.classList.add("bajar");
          polea.classList.remove("subir");
          polea.classList.add("bajar");
          contador = 0;

          document.getElementById('fuerza').value = document.getElementById('masa').value * Math.abs(parseFloat(document.getElementById('aceleracion').value));
          document.getElementById('tension').value = parseFloat(document.getElementById('peso').value) - parseFloat(document.getElementById('fuerza').value);

          if (document.getElementById('aceleracion').value >= 0) {
            let tiempo1 = setTimeout(() => {
              document.getElementById('aceleracion').value = -4;
              let tiempo = setInterval(() => {
                document.getElementById('fuerza').value = document.getElementById('masa').value * Math.abs(parseFloat(document.getElementById('aceleracion').value));
                document.getElementById('tension').value = parseFloat(document.getElementById('peso').value) - parseFloat(document.getElementById('fuerza').value);

                if (parseFloat(document.getElementById('aceleracion').value) <= 0) {
                  document.getElementById('aceleracion').value = 0;
                  document.getElementById('fuerza').value = 0;
                  document.getElementById('tension').value = 0;
                  clearInterval(tiempo);
                  pisoBtn.classList.remove('btn-active');
                  puerta1.classList.remove('cerrar');
                  puerta2.classList.remove('cerrar');
                  puerta2.classList.add('abrir');
                  puerta1.classList.add('abrir');
                }
              }, 900);
            }, 2500);
          }
        }

        setTimeout(() => {
          moviendo = false;
        }, 5500);
      }
    }

    pisoBtn.addEventListener("click", cambiarPiso, true);

    const masa = document.getElementById('masa');
    const peso = document.getElementById('peso');
    masa.addEventListener("change", (e) => {
      peso.value = e.target.value * 9.81;
    });

    document.getElementById('fuerza').addEventListener("change", (e) => {
      document.getElementById('tension').value = parseInt(e.target.value) + parseInt(peso.value);
    });
  };
})();
