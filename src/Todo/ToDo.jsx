import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
   //const [atividade, setAtividade] = useState("");
   const [imagem, setImagem] = useState("")
   const [titulo, setTitulo] = useState("");
   const [autor, setAutor] = useState("");
   const [editora, setEditora] = useState("");
   const [preco, setPreco] = useState("");
   const [lista, setLista] = useState([]);
   const [id, setId] = useState(1);

   const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            imagem: imagem,
            titulo: titulo,
            autor: autor,
            editora: editora,
            preco: preco,
            id: id
        }]);
        setId(id + 1);
        setImagem("");
        setTitulo("");
        setAutor("");
        setEditora("");
        setPreco("");
   };

   const apagar = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id){
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
        
   }


    return (
        <div class="lista">
            
            <h1 class="texto">Wishlist de Livros</h1>
            <h2 class="texto">Voltar para <Link to="/">home</Link></h2>
        
            

            <form onSubmit={salvar}>

                <p class="texto">Imagem</p>
                <input value={imagem} type="text"
                onChange={(e)=>{ setImagem(e.target.value)}} />
                
                <p class="texto">Título</p>
                <input value={titulo} type="text"
                onChange={(e)=>{ setTitulo(e.target.value)}} />

                <p class="texto">Autor</p>
                <input value={autor} type="text"
                onChange={(e)=>{ setAutor(e.target.value)}} />

                <p class="texto">Editora</p>
                <input value={editora} type="text"
                onChange={(e)=>{ setEditora(e.target.value)}} />

                <p class="texto">Preço</p>
                <input value={preco} type="text"
                onChange={(e)=>{ setPreco(e.target.value)}} />
                <br/>
                <button class="btn btn-secondary botao">ADD</button>
            </form>

            {lista.map((ativ)=>
            <ul key={ativ.id}>
                <div class="book-card">
                <img src={ativ.imagem} class="book-card-img"></img>
                <p class="book-card-p">{ativ.titulo}</p>
                <p class="book-card-p">{ativ.autor}</p>
                <p class="book-card-p">{ativ.editora}</p>
                <p class="book-card-p">R$ {ativ.preco}</p>
                <img src="/imagem/trash.png" alt="" class="lixinho" onClick={() => apagar(ativ.id)} />
                </div>
            </ul>)}
           
        </div>
    );
}
