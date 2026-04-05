import { useState, useRef } from 'react'

import styles from './AddProduct.module.css'

const AddProduct = ({ onAdd}) => {
    

    // Создаем ref для формы
    const itemAddForm = useRef(null)

   const handleSubmit = () => {
        const form = itemAddForm.current

        const newItem = Object.fromEntries(new FormData(form))
        newItem.isAvailable = newItem.isAvailable === "on" // Можно так: newItem.isAvailable ? true : false
        onAdd(newItem)

        // Сбрасываем поля формы
        form.reset()
    }

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
                onClick={handleSubmit}
            >
                Добавить
            </button>
        </form>
    )
}

export default AddProduct