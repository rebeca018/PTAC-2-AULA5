import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
   //const [atividade, setAtividade] = useState("");
   const [imagem, setImagem] = useState("")
   const [titulo, setTitulo] = useState("");
   const [autor, setAutor] = useState("");
   const [preco, setPreco] = useState("");
   const [lista, setLista] = useState([]);
   const [id, setId] = useState(1);

   const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            imagem: imagem,
            titulo: titulo,
            autor: autor,
            preco: preco,
            id: id
        }]);
        setId(id + 1);
        setImagem("");
        setTitulo("");
        setAutor("");
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
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Livros</h1>

        
            

            <form onSubmit={salvar}>

                <p>Imagem</p>
                <input value={imagem} type="text"
                onChange={(e)=>{ setImagem(e.target.value)}} />
                
                <p>Título</p>
                <input value={titulo} type="text"
                onChange={(e)=>{ setTitulo(e.target.value)}} />

                <p>Autor</p>
                <input value={autor} type="text"
                onChange={(e)=>{ setAutor(e.target.value)}} />

                <p>Preço</p>
                <input value={preco} type="text"
                onChange={(e)=>{ setPreco(e.target.value)}} />
                <button>ADD</button>
            </form>

            {lista.map((ativ)=>
            <ul key={ativ.id}>
                <div class="book-card">
                <img src="{ativ.imagem}" class="book-card-img"></img>
                <p class="book-card-p">{ativ.titulo}</p>
                <p class="book-card-p">{ativ.autor}</p>
                <p class="book-card-p">{ativ.preco}</p>
                <button onClick={() => apagar(ativ.id)}>Remover</button>
                </div>
            </ul>)}
           
        </div>
    );
}
