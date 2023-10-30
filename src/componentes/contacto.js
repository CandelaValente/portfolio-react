import './styles/contacto.css'


export function Contacto() {
    return (
        <>
            <div>
                <p>ahora puedes</p>
                <a href="https://github.com/CandelaValente" target="_blank" rel="noopener noreferrer">
                    ir a mi Github <i className="fa-brands fa-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/candela-valente/" target="_blank" rel="noopener noreferrer">
                    Contactame por Linkedin <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="/imagenes/candela_valente_cv.pdf" download="/imagenes/Candela_Valente_cv.pdf">
                    ¡descargar mi cv! <i className="fa-solid fa-download"></i>
                </a>

                <a href="mailto:candenavale18@gmail.com" target="_blank" rel="noopener noreferrer">
                    Enviarme un mail con tu consulta <i className="fa-solid fa-envelope"></i>
                </a>

                <a href="https://wa.me/5491156186405" target="_blank" rel="noopener noreferrer">
                    o escribirme por Whatsapp <i className="fa-brands fa-whatsapp"></i></a>
                <p>mantengamos el contacto! <i className="fa-solid fa-face-smile-beam"></i></p>
            </div>
        </>
    );
}