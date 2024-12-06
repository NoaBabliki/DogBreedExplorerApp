import React from "react";
import './Toolbar.css'

type Props = {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Toolbar: React.FC<Props> = ({filter, setFilter}: Props) => {

    return (
        <div className="toolbar">
            <label>Filter</label>
            <input className="toolbar-input" type='text' value={filter} onChange={(e) => {setFilter(e.target.value)}}></input>
        </div>
    )
}

export default Toolbar;