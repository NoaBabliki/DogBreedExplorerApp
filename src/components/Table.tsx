import React from "react";
import './Table.css';
import { Breed, Order } from "./Home";

type Props = {
    breedList: Breed[];
    order: Order;
    setOrder: React.Dispatch<React.SetStateAction<Order>>;
    loading: boolean;
}

const Table: React.FC<Props> = ({breedList, order, setOrder, loading}) => {

    const changeOrder = () => {
        order === Order.ASC ? setOrder(Order.DESC) : setOrder(Order.ASC);
    }

    return (
        <div className="table-container">
            <table className={`styled-table`}>
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
                            <tr key={breed.id} className={loading ? 'loading' : ''}>
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
        </div>
    );
};

export default Table;