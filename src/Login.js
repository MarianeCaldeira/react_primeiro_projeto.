import React from 'react';
import './Login.css';

export default function Login(){
    return(
        <div>
            <form>
                <input placeholder="insira seu nome" type="text" maxLength="30"/>
                
                <br/>

                <input className="senha" placeholder="insira sua senha" type="password" maxLength="6"/>

                <br/>

                <button>
                    Login
                </button>

                <p>
                    Esqueceu sua senha? 
                    <a href="#">
                        Clique aqui.
                    </a>
                </p>
            </form>
        </div>
    );
}
 