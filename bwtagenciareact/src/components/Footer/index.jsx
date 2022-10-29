import React from "react";
import "./index.css";


function Footer(){
    return(
        <div className="footer">
            <div>
                     
                     <footer className="footer-distributed">
                   
                       <div className="footer-left">
                   
                   
                         <p className="footer-links">
                           <a href="index.html" className="link-1">Home</a>
                   
                           <a href="pacotes.html">Promoções</a>
                   
                           <a href="./cadastro.html">Cadastro</a>
                   
                           <a href="./ajuda.html">Contato</a>
                         </p>
                   
                         <p className="footer-company-name">BWT Travels Ltda © 2022</p>
                       </div>
                   
                       <div className="footer-center">
                   
                         <div>
                           <i className="fa fa-map-marker"></i>
                           <p><span>Avenida Paulista, 2222</span> São Paulo, Brasil</p>
                         </div>
                   
                         <div>
                           <i className="fa fa-phone"></i>
                           <p>(11) 2222.2020</p>
                         </div>
                   
                         <div>
                           <i className="fa fa-envelope"></i>
                           <p><a href="mailto:support@company.com">relacionamento@bwt.com</a></p>
                         </div>
                   
                       </div>
                   
                       <div className="footer-right">
                   
                         <p className="footer-company-about">
                           <span>Sobre Nós</span>
                           Somos uma empresa que preza pelo acolhimento e atendimento humanizado. Olhamos nossos clientes como amigos e sua
                           necessidade é o nosso combustível.
                         </p>
                   
                         <div className="footer-icons">
                   
                           <a href=" "> <i className="bi bi-instagram"></i></a>
                             <a href=" "><i className="bi bi-instagram"></i></a>
                                 <a href=" "><i className="bi bi-instagram"></i></a>

                   
                         </div>
                   
                       </div>
                   
                   
                     </footer>

            </div>
        </div>
    )
}
export default Footer;