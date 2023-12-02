import "./employers-list-item.css";
import {Component} from "react";


class  EmployersListItem extends Component{
constructor(props){
super(props);
this.state={increase:false}
}
onIncrease=()=>{
this.setState(({increase})=>({
increase : !increase
}))    
}
render() {
    const {name, salary} = this.props;
    const {increase} = this.state;
    let classList = "list-group-item d-flex justify-content-between";

    return (
        <li className={increase ? classList+=' increase' : classList}>
        <span className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                onClick={this.onIncrease}>
                <i className="fas fa-cookie"></i>
            </button>
            <button type="button"
                    className="btn-trash btn-sm "
                   >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    </li>
    
    )
}      
}

export default EmployersListItem;