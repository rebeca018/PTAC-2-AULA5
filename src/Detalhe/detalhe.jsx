import { useParams } from "react-router-dom"
import Card from '../Componentes/Card';

export default function Detalhe(){
   const { id } = useParams();
   const lista = JSON.parse(localStorage.getItem("Lista"));
   console.log(lista);

    const livro = lista.filter((objeto) => {
         if(objeto.id == id){
            return objeto;
         }
         return null;
    })

    console.log(livro[0]);

    return(
        <Card livro={livro[0]} />
    )
}