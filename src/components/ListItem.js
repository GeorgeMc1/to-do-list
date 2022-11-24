import {useState} from "react";
import {useDrag} from "react-dnd";
import { ItemTypes } from "../ItemTypes";

const ListItem = (props) => {
    const [status, setStatus] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.ITEM,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })
    )
    return(
        <div ref={drag} style={{opacity: isDragging ? 0.5 : 1}} className={status ? "green item" : "item"} onMouseOver={() => setShowButtons(true)} onMouseOut={() => setShowButtons(false)}>
            <label>{props.label}</label>
            {showButtons &&(
                <div className="itemButtons">
                    <button onClick={() => setStatus(!status)}>!</button>
                    <button onClick={props.click}>X</button>
                </div>
            )}
        </div>
    )
}
export default ListItem;