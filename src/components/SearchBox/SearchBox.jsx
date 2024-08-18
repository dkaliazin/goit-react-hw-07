import css from "./SearchBox.module.css";
import { setSearch } from '../../redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';
const SearchBox = () => {
    const dispatch = useDispatch();

    const searchValue = useSelector(state => state.search.name);

    const onSearch = value => {
        dispatch(setSearch(value));
    };
    return(
        <div className={css.container}>
            <p>Search contacts by name</p>
            <input type="text" value={searchValue}
                onChange={evt => onSearch(evt.target.value)} />
        </div>   
    )
}
export default SearchBox;