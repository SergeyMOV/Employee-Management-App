import {Component} from "react";


import "./employers-add-form.css";



class EmployersAddForm extends Component {
constructor(props){
super(props);
this.state={
name: "",
salary:""
}
}

handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSalaryChange = (e) => {
    this.setState({ salary: e.target.value });
  };

onAdd=(e)=>{
    e.preventDefault();
    const { name, salary } = this.state;
    this.props.onAdd(name, salary);
    this.setState({ name: '', salary: '' });
}



render() {
return (
<div className="app-add-form">
<h3>neue Mitarbeiter hinzufügen</h3>
<form className="add-form d-flex">
<input value={this.state.name} onChange={this.handleNameChange} type="text" className="form-control new-post-label" placeholder="Wie heißt Mitarbeiter?"/>
<input value={this.state.salary} name="salary" onChange={this.handleSalaryChange} type="number" className="form-control new-post-label" placeholder="Lohn in €?"/>
<button onClick={this.onAdd} type="submit" className="btn btn-outline-light">Hinzufügen</button>
</form>
</div>
)
}
}

export default EmployersAddForm;