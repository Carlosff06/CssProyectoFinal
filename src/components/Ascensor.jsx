import { useEffect, useLayoutEffect } from 'react';
import styles from '../styles/Ascensor.module.css';
import bootstrapStyles from '../styles/bootstrap.module.css';

const Ascensor = () => {

useLayoutEffect(() => {
    const runInit = () => {
      if (window.initAscensor) {
        window.initAscensor(); // ← vuelve a conectar listeners
      }
    };

    const existingScript = document.querySelector('script[data-pisos]');

    if (existingScript) {
      runInit(); // script ya está → solo reinicia lógica
    } else {
      const tag = document.createElement('script');
      tag.src = '/pisos.js'; // debe estar en public/
      tag.defer = true;
      tag.dataset.pisos = 'true';
      tag.onload = runInit;
      document.body.appendChild(tag);
    }

    return () => {
      // solo limpia si implementas una función como window.destroyAscensor
      if (window.destroyAscensor) window.destroyAscensor();
    };
  }, []);  
return(
  <div className={styles.entorno}>
    <section className={styles['ascensor-completo']} id='ascensor-completo'>
      <div className={styles.cuartomecanismo}>
        <div className={styles.tracción}>
          <div className={styles.polea} id='polea'>
            <div className={`${styles.punto} ${styles.punto1}`}></div>
            <div className={`${styles.punto} ${styles.punto2}`}></div>

            <div className={styles.centropolea} id='centropolea'>
              <div className={styles.interiorpolea}></div>
            </div>

            <div className={`${styles.punto} ${styles.punto3}`}></div>
            <div className={`${styles.punto} ${styles.punto4}`}></div>
            <div className={`${styles.punto} ${styles.punto5}`}></div>
            <div className={`${styles.punto} ${styles.punto6}`}></div>
            <div className={`${styles.punto} ${styles.punto7}`}></div>
            <div className={`${styles.punto} ${styles.punto8}`}></div>
          </div>
        </div>
      </div>

      <div className={styles.paredes}>
        <div className={styles.techo}></div>

        {/* ——— Cabina y mecanismo ——— */}
        <div className={styles.ascensor}>
          <div className={styles.pared1}></div>

          <div className={`${styles.mecanismo} mecanismo`}>
            <div id='cable' className={styles.cable}></div>

            <div className={styles.cabina} id='cabina'>
              <div className={styles['pared-cabina1']}></div>

              <div className={styles['cuerpo-cabina']}>
                <div className={styles['techo-cabina']}>
                  <div className={styles['ico-container']}>
                    <div className={styles.ico} id='ico-bajar'>▼</div>
                    <div className={styles.ico} id='ico-subir'>▲</div>
                  </div>
                </div>

                <div className={styles.puertas}>
                  <div className={`${styles['puerta-ascensor-1']} puerta-ascensor-1`}></div>
                  <div className={`${styles['puerta-ascensor-2']} puerta-ascensor-2`} ></div>
                </div>
              </div>

              <div className={styles['pared-cabina2']}></div>
            </div>
          </div>

          <div className={styles.pared2}>
            <button
              type="button"
              id='piso1'
              className={`
                ${bootstrapStyles.btn}
                ${bootstrapStyles['btn-secondary']}
                ${bootstrapStyles['m-5']}
                ${bootstrapStyles['text-center']}
                ${styles.piso1}
              `}
            >
              ▲
            </button>
          </div>
        </div>

        <div className={styles.piso}></div>
      </div>
    </section>

    {/* —— Tarjeta con el formulario —— */}
    <div className={`${bootstrapStyles.container} ${styles.cont}`}>
      <div className={`
        ${bootstrapStyles.card}
        ${bootstrapStyles['my-3']}
        ${styles.card1}
      `}>
        <div className={bootstrapStyles['card-header']}>Formulas</div>

        <div className={bootstrapStyles['card-body']}>
          <form className={styles.formulario} id='formulario'>
            <div className={bootstrapStyles.row}>
              <div className={bootstrapStyles.col}>
                {/* Aceleración */}
                <div className={styles.licontainer}>
                  <div className={styles.formcontainer}>
                    <span className={bootstrapStyles['input-group-text']}>
                      Aceleración
                    </span>
                    <input
                      type="text"
                      
                      id="aceleracion"
                      placeholder="Introduzca la aceleración"
                      className={`
                        ${bootstrapStyles['form-control']}
                        ${bootstrapStyles['w-75']}
                        ${styles.aceleracion}
                      `}
                      
                    />
                    <span className={bootstrapStyles['input-group-text']}>m/s²</span>
                  </div>
                </div>

                {/* Fuerza */}
                <div className={styles.licontainer}>
                  <div className={styles.formcontainer}>
                    <span className={bootstrapStyles['input-group-text']}>
                      Fuerza
                    </span>
                    <input
                      type="text"
                      id='fuerza'
                      placeholder="Introduzca la fuerza"
                      className={`
                        ${bootstrapStyles['form-control']}
                        ${bootstrapStyles['w-75']}
                        ${styles.fuerza}
                      `}
                      
                    />
                    <span className={bootstrapStyles['input-group-text']}>N</span>
                  </div>
                </div>

                {/* Masa */}
                <div className={styles.licontainer}>
                  <div className={styles.formcontainer}>
                    <span className={bootstrapStyles['input-group-text']}>
                      Masa
                    </span>
                    <input
                      type="text"
                      id='masa'
                      placeholder="Introduzca la masa"
                      className={`
                        ${bootstrapStyles['form-control']}
                        ${bootstrapStyles['w-75']}
                        ${styles.masa}
                      `}
                      
                    />
                    <span className={bootstrapStyles['input-group-text']}>Kg</span>
                  </div>
                </div>

                {/* Peso */}
                <div className={styles.licontainer}>
                  <div className={styles.formcontainer}>
                    <span className={bootstrapStyles['input-group-text']}>
                      Peso
                    </span>
                    <input
                      type="text"
                      id='peso'
                      placeholder="Peso"
                      className={`
                        ${bootstrapStyles['form-control']}
                        ${bootstrapStyles['w-75']}
                        ${styles.peso}
                      `}
                      
                    />
                    <span className={bootstrapStyles['input-group-text']}>N</span>
                  </div>
                </div>

                {/* Tensión */}
                <div className={styles.licontainer}>
                  <div className={styles.formcontainer}>
                    <span className={bootstrapStyles['input-group-text']}>
                      Tensión
                    </span>
                    <input
                      type="text"
                      id='tension'
                      placeholder="Tensión"
                      className={`
                        ${bootstrapStyles['form-control']}
                        ${bootstrapStyles['w-75']}
                        ${styles.tension}
                      `}
                     
                    />
                    <span className={bootstrapStyles['input-group-text']}>N</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Ascensor;
