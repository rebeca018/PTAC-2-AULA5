import { useParams } from "react-router-dom"

export default function Detalhe(){
   const { id } = useParams();
   
    return(
        <div>
            <h1>Deu certo {id} </h1>
        </div>
    )
}