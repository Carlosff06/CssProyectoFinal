import { useEffect } from "react";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  
    const navigate = useNavigate();
      const routes = ["/dev/todo-list", "/dev/ascensor", "/dev/mauricio", "/dev/carlos"];

  useEffect(() => {
    
    /* colores de fondo según la posición */
    const colors = [
  "linear-gradient(120deg, #42a5f5 0%, #7e57c2 100%)",
  "linear-gradient(120deg, #66bb6a 0%, #ffa726 100%)",
  "linear-gradient(120deg, #ef5350 0%, #ab47bc 100%)",
  "linear-gradient(120deg, #26c6da 0%, #8d6e63 100%)",
];

  

    /* opciones del carrusel + callback */
    const options = {
      dist: -30,
      shift: 0,
      padding: 20,
      indicators: true,
      onCycleTo: (el) => {
        /* quitar y agregar .active a la tarjeta correspondiente */
        document
          .querySelectorAll(".person-card")
          .forEach((c) => c.classList.remove("active"));

        if (el) {
          const card = el.querySelector(".person-card");
          if (card) card.classList.add("active");

          /* cambiar fondo */
          const idx = Array.from(el.parentNode.children).indexOf(el);
          document.body.style.background = colors[idx % colors.length];
            navigate(routes[idx]);
        }
      },
    };

    /* inicializar todas las instancias encontradas */
    const instances = Array.from(
      document.querySelectorAll(".carousel")
    ).map((elem) => M.Carousel.init(elem, options));

    /* marcar la primera tarjeta como activa cuando cargue */
    setTimeout(() => {
      const first = document.querySelector(".carousel-item .person-card");
      if (first) first.classList.add("active");
      document.body.style.background = colors[0];
    }, 100);

    /* limpiar al desmontar */
    return () => instances.forEach((inst) => inst.destroy());
  }, []);

  return (
    <div className="container">
      <h4 className="center-align">Equipo de Desarrollo</h4>

      <div className="carousel center-align">
        {/* ─── Item 1 ─── */}
        <div className="carousel-item" onClick={() => console.log("Card clicked") } >
          <div className="card person-card z-depth-3"
          
          >
            <div className="card-content">
              <img src="/todolist.png" alt="Avatar" className="person-avatar" />
              <span className="card-title">Todo List</span>
              
            </div>
          </div>
        </div>

        {/* ─── Item 2 ─── */}
        <div className="carousel-item">
          <div className="card person-card z-depth-3">
            <div className="card-content">
              <img src="/ascensor.png" alt="Avatar" className="person-avatar" />
              <span className="card-title">Ascensor</span>
              
            </div>
          </div>
        </div>

        {/* ─── Item 3 ─── */}
        <div className="carousel-item">
          <div className="card person-card z-depth-3">
            <div className="card-content">
              <img src="avatar.avif" alt="Avatar" className="person-avatar" />
              <span className="card-title">Mauricio Millan</span>
              <p>
                <i className="material-icons tiny">email</i> Millan@email.com
              </p>
              <p>
                <i className="material-icons tiny">phone</i> 99988877
              </p>
            </div>
          </div>
        </div>
         {/* ─── Item 4 ─── */}
        <div className="carousel-item">
          <div className="card person-card z-depth-3">
            <div className="card-content">
              <img src="avatar.avif" alt="Avatar" className="person-avatar" />
              <span className="card-title">Carlos Felipe</span>
              <p>
                <i className="material-icons tiny">email</i> carlosfelipefdezfalcon@gmail.com
              </p>
              <p>
                <i className="material-icons tiny">phone</i> 99988877
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
