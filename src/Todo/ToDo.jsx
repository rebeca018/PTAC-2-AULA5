import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   //const [atividade, setAtividade] = useState("");
   const [titulo, setTitulo] = useState("");
   const [autor, setAutor] = useState("");
   const [preco, setPreco] = useState("")
   const [lista, setLista] = useState([]);
   const [id, setId] = useState(1);

   const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            titulo: titulo,
            autor: autor,
            preco: preco,
            id: id
        }]);
        setId(id + 1);
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

            <p>{titulo}</p>
            <p>{autor}</p>
            <p>{preco}</p>

            <form onSubmit={salvar}>
                <input value={titulo} type="text"
                onChange={(e)=>{ setTitulo(e.target.value)}} />
                <input value={autor} type="text"
                onChange={(e)=>{ setAutor(e.target.value)}} />
                <input value={preco} type="text"
                onChange={(e)=>{ setPreco(e.target.value)}} />
                <button>ADD</button>
            </form>

            {lista.map((ativ)=>
            <ul key={ativ.id}>
                <li>{ativ.titulo}</li>
                <li>{ativ.autor}</li>
                <li>{ativ.preco}</li>
                <button onClick={() => apagar(ativ.id)}>Remover</button>
            </ul>)}
           
        </div>
    );
}

//filter id diferente 