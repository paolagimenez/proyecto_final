import Card from "../Card/Card";
import './SectionCards.css'

export default function SectionCards({datos}) {

   
    return(
        <section className="section-cards row d-flex">

            {datos.map((dato)=>{ return <Card key={dato.id} info={dato}/>})} 
         
        </section>
    )
}
/* fetch()  */