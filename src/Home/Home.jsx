import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div>
            <img src="capa.png" alt="" />
            <div class="home">

            </div>
            <Link to="/todo">todo</Link>
        </div>

    );
}