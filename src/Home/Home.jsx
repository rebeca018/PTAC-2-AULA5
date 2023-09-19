import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div class="home">
            <img src="/imagem/capa.png" alt="" />
            <div class="home">
                <p class="texto">testando</p>
            </div>
            <Link to="/todo">todo</Link>
        </div>

    );
}