import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";
import style from "./RoutesList.module.css"

const RoutesList = ({ list })=> {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState('');
 
  
  

  const onClick = (event) => {
    if(id === ""){
      return setId(event.target.id)
    }
    else{
      console.log(id);
      return setId(''), setId(event.target.id);
    }
      setId(event.target.id)
      
    
    // console.log(id)
    setClicked(!clicked)

  };
  

  return (
    <ul>
      {list.map((item) => {
      return <li onClick={onClick} id={item.id}  key={item.id}>
          <h3 id={item.id}>{item.city}</h3>
          <p id={item.id}>{item.country}</p>
          <p id={item.id}>{item.euro_price} EUR</p>
          <button id={item.id} type="button">{/* onClick={onClick} */}
            <IconContext.Provider value={{ color: "orange" }}>
              <AiFillCaretDown />
            </IconContext.Provider>
          </button>
          { <p id={item.id} className={style.itemOfTheLittelTextOfCity}>{item.city}</p>}
        </li>
      })}
    </ul>
  );
};

export default RoutesList;