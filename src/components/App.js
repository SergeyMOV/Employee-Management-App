import Appinfo from "./app-header/app-info";
import SearchPanel from "./searchpanel/app-searchpanel"
import '../components/App.css';
import AppFilter from "./searchpanel/app-filter/app-filter.js";
import EmployersList from "./Employers-List/employers-list";
import EmployersAddForm from "./Employers-addForm/employers-add-form";




function App() {
  return (
    <div className="App">
    <Appinfo/>
    <div className="search-panel">
    <SearchPanel/>
    <AppFilter/>
    </div>
    <EmployersList/>
    <EmployersAddForm/>
    </div>
  );
}

export default App;
