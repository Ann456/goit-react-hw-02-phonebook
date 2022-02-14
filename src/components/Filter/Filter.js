import s from './Filter.module.css';

const Filter = ({filter, input}) => {
    return (
        <form className={s.form}>
            <label className={s.label}>Find contact by name:</label>
            <input
                className={s.input}
                type="text"
                value={filter.trim()}
                onChange={input}
            />
        </form>
    );  
};

export default Filter;