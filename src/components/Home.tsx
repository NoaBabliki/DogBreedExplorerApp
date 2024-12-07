import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import Table from "./Table";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";
import './Home.css';
import { useTheme } from "./ThemeProvider";


type BreedImage = {
    height: number,
    id: string,
    url: string,
    width: number
}

export type Breed = {
    id: number;
    name: string;
    breed_group?: string;
    image?: BreedImage;
    life_span?: string;
}

export enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}


const Home: React.FC = () => {

    const DEFALT_PAGE = 0;
    const DEFALT_LIMIT = '10';

    const [filter, setFilter] = useState<string>("");
    const [breedList, setBreedList] = useState<Breed[]>([]);
    const [order, setOrder] = useState<Order>(Order.ASC);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(DEFALT_PAGE);
    const [limit, setLimit] = useState<string>(DEFALT_LIMIT);

    const {darkMode, setDarkMode} = useTheme();

    async function fetchBreedList(filter: string, order: Order, limit: string, page: number) {
        // query parameters "order" and "filter" are made up, because they don't exists on the api
        // so the data doesn't change...
        try {
            setLoading(true);
            const apiKey =  import.meta.env.VITE_SECRET_KEY
            const response = await fetch(`https://api.thedogapi.com/v1/breeds?page=${page.toString()}&limit=${limit}&order?=${order}&filter=${filter}`,
            {
                headers: {
                'x-api-key': apiKey
                },
            }
        );
        if (!response.ok) {
            throw console.error(response.statusText);
        }
        const jsonRes = await response.json();
        setLoading(false);
        return jsonRes;
    
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode])

    useEffect(() => {
       fetchBreedList(filter, order, limit, page).then(jsonRes => {
            console.log('json res',jsonRes)
            const newBreedList: Breed[] = jsonRes;
            if (jsonRes) {
                setBreedList(newBreedList);
            }
       }).catch((e) => console.error(e));
    },[filter, order, limit, page])

    return (
        <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={`title ${darkMode ? 'dark-mode' : ''}`}>Dog Breed Explorer App</h1>
        <button onClick={() => {setDarkMode(!darkMode)}}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        <Toolbar filter={filter} setFilter={setFilter}/>
        <Table breedList={breedList} order={order} setOrder={setOrder} loading={loading}/>
        <Pagination page={page} limit={limit} setPage={setPage} setLimit={setLimit}/>
        </div>
    )

}

export default Home;