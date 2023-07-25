import Appinfo from "./app-header/app-info";
import SearchPanel from "./searchpanel/app-searchpanel"
import '../components/App.css';
import AppFilter from "./searchpanel/app-filter/app-filter.js";
import EmployersList from "./Employers-List/employers-list";
import EmployersAddForm from "./Employers-addForm/employers-add-form";




function App() {

  const data = [
    {name:"John.C", salary:"3000€", increase: false},
    {name:"Edward.S", salary:"1500€", increase: true},
    {name:"Max.C", salary:"800€", increase: false}

];
  return (
    <div className="App">
    <Appinfo/>
    <div className="search-panel">
    <SearchPanel/>
    <AppFilter/>
    </div>
    <EmployersList data={data}/>
    <EmployersAddForm/>
    </div>
  );
}

export default App;
