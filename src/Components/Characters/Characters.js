import Navegacion from "../Navigation/Navigation";
import Filters from "../Filters/Filters"
import SectionCards from "../SectionCards/SectionCards";
export default function Characters(){
return(
<div>

<Navegacion/>
<Filters/>
<SectionCards datos="Dato"/>

<h2>Seccion de las tarjetas</h2>
    </div>
)

}