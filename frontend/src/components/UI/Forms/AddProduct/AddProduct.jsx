import { useState } from 'react'

import styles from './AddProduct.module.css'

const AddProduct = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isAvailable, setIsAvailable] = useState(false)

    return (
        <form className={styles.form}>
            <input
                type="text"
                placeholder='Название'
                onChange={e => setName(e.target.value)}
            />
            <textarea
                placeholder='Описание'
                onChange={e => setDescription(e.target.value)}
            ></textarea>

            <div>
                <input
                    type='checkbox'
                    id='isAvailable'
                    onChange={e => setIsAvailable(e.target.checked)}
                />
                <label htmlFor='isAvailable'>В наличии?</label>
            </div>

            <button type='button' onClick={()=> {
                console.log("name -", name)
                console.log("description -", description)
                console.log("isAvailable -", isAvailable)
            }}>Добавить</button>
        </form>
    )
}

export default AddProduct