import EmployersListItem from "../Employers-List-Items/employers-list-item";
import "./employers-list.css";

const EmployersList=({data})=>{

const elements=data.map((items) =>{
const {id,...Rest} = items;
return(
<EmployersListItem key={id} {...Rest} ondelete ={()=>console.log("Deleted")}/>
)
})


return(
   
<ul className="app-list list-group">
{elements}
</ul>
)
}

export default EmployersList;