import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import styles from './pagination.module.css'

type PaginationProps = {
    flag: boolean
}
const PaginationComponent: FC<PaginationProps> = ({flag}) => {
    const [query, setQuery] = useSearchParams({page: '1'})


    const onclickPrevHandler = () => {
        const page = query.get('page')
        if (page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }
    }

    const onclickNextHandler = () => {
        const page = query.get('page')
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    }

    return (
        <div className={styles.pagination}>
            <button className={styles.paginationButton} onClick={onclickPrevHandler}>PREV</button>
            <button className={styles.paginationButton} onClick={onclickNextHandler} disabled={flag}>NEXT</button>
        </div>
    );
};

export default PaginationComponent;