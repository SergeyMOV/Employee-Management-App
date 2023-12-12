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

]
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

render(){
  return (
    <div className="App">
    <Appinfo/>
    <div className="search-panel">
    <SearchPanel/>
    <AppFilter/>
    </div>
    <EmployersList data={this.state.data} onDelete={this.deleteItem}/>
    <EmployersAddForm onAdd ={this.addItem}/>
    </div>
  );
}
}
export default App;
