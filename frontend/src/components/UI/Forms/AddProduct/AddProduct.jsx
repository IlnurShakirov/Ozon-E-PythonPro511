import { useState, useRef } from 'react'

import styles from './AddProduct.module.css'

const AddProduct = ({ onAdd}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isAvailable, setIsAvailable] = useState(false)

    // Создаем ref для формы
    const itemAddForm = useRef(null)

    return (
        <form className={styles.form} ref={itemAddForm}>
            <input
                type="text"                
                name="name"
                placeholder='Название'
            />
            <textarea
                name="description"
                placeholder='Описание'
            ></textarea>

            <div>
                <input
                    type='checkbox'
                    name="isAvailable"
                    id='isAvailable'
                />
                <label htmlFor='isAvailable'>В наличии?</label>
            </div>

            <button 
                type='button' 
                onClick={() => {
                    onAdd( Object.fromEntries(new FormData(itemAddForm.current)))

                    // Сбрасываем поля формы
                    itemAddForm.current.reset()
                }}
            >
                Добавить
            </button>
        </form>
    )
}

export default AddProduct