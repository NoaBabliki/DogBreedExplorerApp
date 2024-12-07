import React from "react";
import './Pagination.css';

type Props = {
    page: number;
    limit: string;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setLimit: React.Dispatch<React.SetStateAction<string>>;
}

const Pagination: React.FC<Props> = ({page, limit, setPage, setLimit}: Props) => {

    const FIRST_PAGE = 0;
    const LIMIT_OPTIONS = ['10', '50', '100'];
    const ITEMS_AMOUNT = 172;

    const onSelectLimit = (newLimit: string) => {
        setPage(FIRST_PAGE);
        setLimit(newLimit);
    }

    const desableNaxt = () => {
        return ((page+1) === Math.ceil(ITEMS_AMOUNT / parseInt(limit)))
    }

    return (
    <div className="pagination">
        <button className="pagination-button" disabled={page === FIRST_PAGE} onClick={() => {setPage(page - 1)}}>
            previus
        </button>
        <label>{page + 1}</label>
        <button className="pagination-button" disabled={desableNaxt()} onClick={() => {setPage(page + 1)}}>
            next
        </button>
        <select onChange={(e) => {onSelectLimit(e.target.value)}}>
            {limit}
            {LIMIT_OPTIONS.map(option => {
                return (
                    <option>{option}</option>
                )
            })}
        </select>
    </div>
    );
};

export default Pagination;