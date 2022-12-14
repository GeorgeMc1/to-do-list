import {useState} from "react";

const ListItem = (props) => {
    const [status, setStatus] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    return(
        <div className={status ? "green item" : "item"} onMouseOver={() => setShowButtons(true)} onMouseOut={() => setShowButtons(false)}>
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