import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="text-container">
                <p>Creado por Camilo Caro 😊</p> 
                <p>Hecho para fines de aprendizaje</p> 
            </div>
            <div className="social"> 
                <a 
                    href="https://www.instagram.com/andrescamilokro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram">
                </a>
                <a 
                    href="https://www.facebook.com/andres.c.kro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook">    
                </a>
                <a 
                    href="https://github.com/camilo-17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link github">
                </a>
                <a 
                    href="https://www.linkedin.com/in/andr%C3%A9s-camilo-caro-robayo-75092b15a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link linkedin">
                </a>
            </div>
        </footer>  
    )
}

export default Footer
