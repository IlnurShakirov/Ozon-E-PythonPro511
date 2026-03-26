import styles from './AddProduct.module.css'


const AddProduct = () => (
    <form className={styles.form}>
        <input type="text" placeholder='Название' />
        <textarea placeholder='Описание'></textarea>

        <div>
            <input type='checkbox' id='isAvailable' />
            <label htmlFor='isAvailable'>В наличии?</label>
        </div>

        <button type='button'>Добавить</button>
    </form>
)

export default AddProduct