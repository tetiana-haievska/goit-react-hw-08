import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectFilter } from '../../redux/filters/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.filter}>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} />
      </label>
    </div>
  );
};

export default Filter;
