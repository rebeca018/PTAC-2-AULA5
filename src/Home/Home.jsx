import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div class="home">
            <img src="/imagem/capa.png" alt="" />
            <div class="home">
                <h3 class="texto-home">Bem-vindo(a) à minha biblioteca! Abaixo está um resumo dos meus livros favoritos e aqui ... está a minha wishlist , a minha lista de livros que desejo comprar</h3>

                <div>
                    <img src="https://m.media-amazon.com/images/I/71P-Mok4cqL._AC_UL320_.jpg" alt="" class="book-card-img"/>
                    <p class="book-card-p">Estilhaça-me</p> 
                    <p class="book-card-p">Thareh Mafi</p>
                    <p class="book-card-p">Universo dos livros</p>
                </div>

            </div>
           <h2><Link to="/todo">todo</Link></h2>
        </div>

    );
}