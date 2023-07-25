import EmployersListItem from "../Employers-List-Items/employers-list-item";
import "./employers-list.css";

const EmployersList=({data})=>{

const elements=data.map(items =>{
return(
<EmployersListItem {...items}/>
)
})


return(
   
<ul className="app-list list-group">
{elements}
</ul>
)
}

export default EmployersList;