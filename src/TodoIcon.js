import {ReactComponent as CheckSVG} from '../src/images/check.svg';
import {ReactComponent as DeleteSVG} from '../src/images/delete.svg';


const iconTypes={
    "check":(color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete":(color)=> <DeleteSVG className="Icon-svg" fill={color}/>,
};

function TodoIcon({type, color, onClick}){
    return(
        <span
        className={`Icon Icon-svg Icon-${type}`}
        onClick={onClick}
        >
        {iconTypes[type](color)}
        </span>   
)
}

export {TodoIcon};