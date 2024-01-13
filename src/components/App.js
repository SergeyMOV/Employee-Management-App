import Appinfo from "./app-header/app-info";
import SearchPanel from "./searchpanel/app-searchpanel"
import '../components/App.css';
import AppFilter from "./searchpanel/app-filter/app-filter.js";
import EmployersList from "./Employers-List/employers-list";
import {Component} from "react";
import EmployersAddForm from "./Employers-addForm/employers-add-form";




class App extends Component{
constructor(props){
super(props);
this.state = {
  data: [
    {name:"John.C", salary:"800€", increase: false, id:1},
    {name:"Edward.S", salary:"1500€", increase: true, id:2},
    {name:"Max.C", salary:"3000€", increase: false, id:3}

],
term: "J"
}
this.maxId=4;
}

deleteItem = (id) => {
this.setState(({data})=>{
return{
data: data.filter(item => item.id !== id)
}

})
}
addItem = (name, salary) => {
  const newItem = {
    name,
    salary,
    increase: false,
    id: this.maxId++,
  };

  this.setState(({ data }) => {
    const newArr = [...data, newItem];
    return {
      data: newArr,
    };
  });
};

searchEmp = (items,term) => {
if(term.length === 0){
return items;
}
return items.filter(item =>{
return item.name.indexOf(term)> -1; 
})
}

onUpdateSearch = (term) => {
 this.setState({term: term}); 
}

render(){
  const {data, term} = this.state;
  const employees = this.state.data.length;
  const increased = this.state.data.filter(item => item.increase).length;
  const visibleData = this.searchEmp(data, term);
  return (
    <div className="App">
    <Appinfo employees={employees} increased={increased}/>
    <div className="search-panel">
    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
    <AppFilter/>
    </div>
    <EmployersList data={visibleData} onDelete={this.deleteItem}/>
    <EmployersAddForm onAdd ={this.addItem}/>
    </div>
  );

}
}
export default App;
