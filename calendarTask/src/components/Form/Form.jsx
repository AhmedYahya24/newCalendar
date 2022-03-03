import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../utils/Readux/calendarSlice.js' 
import './Form.css';

const Form = () => {
    const [title, setTitle] = useState('');
    const [describtion, setDescribtion] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        dispatch(addNote({title, describtion}))
    }, [title, describtion])

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                <input onChange={(e) => setDescribtion(e.target.value)} placeholder="Enter Describtion" />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default React.memo(Form);