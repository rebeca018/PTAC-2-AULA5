import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   //const [atividade, setAtividade] = useState("");
   const [titulo, setTitulo] = useState("");
   const [autor, setAutor] = useState("");
   const [lista, setLista] = useState([]);
   const [id, setId] = useState(1);

   const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
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
            <h1>Lista de Atividades</h1>

            <p>{titulo}</p>
            <p>{autor}</p>

            <form onSubmit={salvar}>
                <input value={titulo} type="text"
                onChange={(e)=>{ setAtividade(e.target.value)}} />
                <input value={autor} type="text"
                onChange={(e)=>{ setAtividade(e.target.value)}} />
                <input value={atividade} type="text"
                onChange={(e)=>{ setAtividade(e.target.value)}} />
                <button>ADD</button>
            </form>

            {lista.map((ativ)=>
            <ul key={ativ.id}>
                <li>{ativ.titulo}</li>
                <button onClick={() => apagar(ativ.id)}>Remover</button>
            </ul>)}
           
        </div>
    );
}

//filter id diferente 