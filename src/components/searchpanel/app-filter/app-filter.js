import "./app-filter.css";



const AppFilter=()=>{

return(
<div className="btn-group">
<button class="btn btn-light" type="button">
Alle Mitarbeiter   
</button>
<button class="btn btn-outline-light" type="button">
aufsteigende Mitarbeiter
</button>
<button class="btn btn-outline-light" type="button">
Mit mehr als 1000€ Gehalt
</button>
</div>
)
}

export default AppFilter;