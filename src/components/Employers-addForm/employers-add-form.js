import "./employers-add-form.css";



const EmployersAddForm = () =>{
return (

<div className="app-add-form">
<h3>neue Mitarbeiter hinzufügen</h3>
<form className="add-form d-flex">
<input type="text" className="form-control new-post-label" placeholder="Wie heißt Mitarbeiter?"/>
<input type="number" className="form-control new-post-label" placeholder="Lohn in €?"/>
<button type="submit" className="btn btn-outline-light">Hinzufügen</button>
</form>
</div>
)
}

export default EmployersAddForm;