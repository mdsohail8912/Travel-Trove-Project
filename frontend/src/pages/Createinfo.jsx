import React, {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const  Createinfo = () => {
    const[tittle,setTittle] = useState('');
    const[description,setDescription] = useState('');
    const[rating,setRating] = useState('');
    const[cost,setCost] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const saveInfo = () => {
        const info = {
            tittle,
            description,
            rating,
            cost
        }
        setLoading(true);
        axios.post('http://localhost:5000/infos',info)
        .then(()=>{
            setLoading(false);
            navigate('/');
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error);
        })
    }

    return(
        <div>
            <h1>Create Info</h1>
            {
                loading? <h1>loading</h1> : ' '
            }
            <div>
                <label>Tittle</label>
                <input type='text'
                value={tittle}
                onChange={(e)=>setTittle(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input type='text'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>reveiw</label>
                <input type='text'
                value={rating}
                onChange={(e)=>setRating(e.target.value)}
                />
            </div>
            <div>
                <label>Cost</label>
                <input type='text'
                value={cost}
                onChange={(e)=>setCost(e.target.value)}
                />
            </div>
            <button onClick={saveInfo}>
            save    
            </button> 
        </div>
    )
}

export default Createinfo;