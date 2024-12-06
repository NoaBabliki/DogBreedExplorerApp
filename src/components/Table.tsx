import React from "react";
import './Table.css';
import { Breed, Order } from "./Home";
import { useTheme } from "./ThemeProvider";

type Props = {
    breedList: Breed[];
    order: Order;
    setOrder: React.Dispatch<React.SetStateAction<Order>>;
    loading: boolean;
}

const Table: React.FC<Props> = ({breedList, order, setOrder, loading}) => {

    const {darkMode} = useTheme();

    const changeOrder = () => {
        order === Order.ASC ? setOrder(Order.DESC) : setOrder(Order.ASC);
    }

    return (
        <div>
            {loading? 
            <h2>loading...</h2> : 
            <table className={`styled-table ${darkMode ? 'dark-mode' : ''}`}>
                <thead>
                    <tr>
                        <th>
                            <button onClick={() => {changeOrder()}}>
                                {`Breed Name ${order}`}
                            </button>
                        </th>
                        <th>Breed Group</th>
                        <th>Image</th>
                        <th>Life span</th>
                    </tr>
                </thead>
                <tbody>
                    {breedList.map((breed) => {
                        return (
                            <tr key={breed.id}>
                            <td>{breed.name}</td>
                            <td>{breed.breed_group}</td>
                            <td>
                                {breed.image?.url ? 
                                <img className={'breed-img'} src={breed.image?.url}></img> : null}
                                </td>
                            <td>{breed.life_span}</td>
                        </tr>
                        ) 
                    })}  
                </tbody>
            </table>
            }
        </div>
    );
};

export default Table;