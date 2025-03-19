import { useEffect, useState, useCallback } from "react";
import styles from "./Peoples.module.css";
import PeopleCard from "../PeopleCard/PeopleCard";

const Peoples = () => {
    const [peoples, setPeoples] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPeoples, setFilteredPeoples] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setPeoples(data);
                setFilteredPeoples(data);
            });
    }, []);

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const filterPeoples = useCallback(
        debounce((term) => {
            const filtered = peoples.filter((person) =>
                person.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredPeoples(filtered);
        }, 300),
        [peoples]
    );

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterPeoples(term);
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.head}>Peoples</h1>
            <input type="text" placeholder="Search People..." value={searchTerm} onChange={handleSearch} className={styles.searchInput} />
            <div className={styles.pplContainer}>
                {
                    filteredPeoples.map((people) => <PeopleCard key={people.id} {...people} />)
                }
            </div>
        </div>
    );
};

export default Peoples;
