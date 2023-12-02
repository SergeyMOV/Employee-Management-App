import EmployersListItem from "../Employers-List-Items/employers-list-item";
import "./employers-list.css";

const EmployersList=({data, onDelete})=>{

const elements=data.map((items) =>{
const {id,...Rest} = items;
return(
<EmployersListItem key={id} {...Rest} onDelete ={()=>onDelete(id)}/>
)
})


return(
   
<ul className="app-list list-group">
{elements}
</ul>
)
}

export default EmployersList;