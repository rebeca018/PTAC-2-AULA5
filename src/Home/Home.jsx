import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div>
            <img src="/imagem/capa.png" alt="" />
            <h3 class="texto-home">Bem-vindo(a) à minha biblioteca!</h3>
            <h3 class="texto-home">Abaixo está um resumo dos meus livros favoritos </h3>

                
                <div class="book">

                    <div class="book-card-home">
                        <div class="card-a"><img src="https://m.media-amazon.com/images/I/71P-Mok4cqL._AC_UL320_.jpg" alt="" class="book-card-img"/></div>

                        <div class="card-b">
                            <p class="card-p">Livro: Estilhaça-me</p> 
                            <p class="card-p">Autora: Thareh Mafi</p>
                            <p class="card-p">Editora: Universo dos livros</p>
                            <p class="card-p">No eletrizante primeiro volume da série Estilhaça-me, Tahereh Mafi apresenta um mundo distópico hipnotizante, uma emocionante história de super-heróis e uma heroína inesquecível. Eu li essa série de livros em Janeiro de 2022, e se tornou um dos meus livros favoritos. Os meus personagens favoritos são a Juliette, o Aaron e o Kenji.</p>
                        </div>
                        
                    </div>

                    <div class="book-card-home">
                        <div class="card-a"><img src="https://m.media-amazon.com/images/I/91Fk75hVxRL._AC_UL320_.jpg" alt="" class="book-card-img"/></div>

                        <div class="card-b">
                            <p class="card-p">Livro: Six Of Crows</p> 
                            <p class="card-p">Autora: Leigh Bargudo</p>
                            <p class="card-p">Editora: Gutenberg</p>
                            <p class="card-p">Six Of Crows é o primeiro livro de uma duologia do Grishaverso e deve ser lido depois da triologia de Sombra e Ossos. E conta a história de 6 pessoas unidas pela proposta de receber 1 milhão de Kruges para retirar uma pessoa da prisão de mais alta segurança, um livro emocionante e cheio de reviravoltas.</p>
                        </div>

                    </div>

                    <div class="book-card-home">
                        <div class="card-a"><img src="https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UL320_.jpg" alt="" class="book-card-img"/></div>

                        <div class="card-b">
                            <p class="card-p">Livro: Percy Jackson</p> 
                            <p class="card-p">Autor: Rick Riordan</p>
                            <p class="card-p">Editora: Intrínseca</p>
                            <p class="card-p">Primeiro volume da saga Percy Jackson e os olimpianos, O ladrão de raios esteve entre os primeiros lugares na lista das séries mais vendidas do The New York Times. O autor conjuga lendas da mitologia grega com aventuras no século XXI.</p>
                        </div>

                
                    </div>

                </div>


            <div class="rodape">
                <h3 class="texto-r">Aqui está a minha <Link to="/todo">wishlist</Link>, a minha lista de livros.</h3>
            </div>
            
           
        </div>

    );
}
