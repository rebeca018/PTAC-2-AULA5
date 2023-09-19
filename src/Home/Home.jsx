import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div class="home">
            <img src="/imagem/capa.png" alt="" />
            

            <div class="home">
                
                <h3 class="texto-home">Bem-vindo(a) à minha biblioteca! Abaixo está um resumo dos meus livros favoritos e aqui está a minha <Link to="/todo">wishlist</Link>, a minha lista de livros.</h3>

                <div class="book-card-home">
                    <img src="https://m.media-amazon.com/images/I/71P-Mok4cqL._AC_UL320_.jpg" alt="" class="book-card-img"/>
                    <p class="book-card-p">Livro: Estilhaça-me</p> 
                    <p class="book-card-p">Autora: Thareh Mafi</p>
                    <p class="book-card-p">Editora: Universo dos livros</p>
                </div>

                <div class="book-card-home">
                    <img src="https://m.media-amazon.com/images/I/91Fk75hVxRL._AC_UL320_.jpg" alt="" class="book-card-img"/>
                    <p class="book-card-p">Livro: Six Of Crows</p> 
                    <p class="book-card-p">Autora: Leigh Bargudo</p>
                    <p class="book-card-p">Editora: Gutenberg</p>
                </div>

                <div class="book-card-home">
                    <img src="https://m.media-amazon.com/images/I/81e98vyHFmS._AC_UL320_.jpg" alt="" class="book-card-img"/>
                    <p class="book-card-p">Livro: Jogos de herança</p> 
                    <p class="book-card-p">Autora: Jennifer Barnes</p>
                    <p class="book-card-p">Editora: Alt</p>
                </div>

            </div>
           
        </div>

    );
}
