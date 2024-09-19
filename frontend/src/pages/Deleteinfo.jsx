import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const  Deleteinfo = () => {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const DeleteInfo = () => {
        setLoading(true);
        axios.delete(`http://localhost:5000/infos/${id}`)
        .then(()=>{
            setLoading(false);
            navigate('/');
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error);
        });
    }

    return(
        <div>
            {loading ? <h1>loading</h1> : ' ' }
            <div>
                <h3>Are you sure you want to delete?</h3>
                <button onClick={DeleteInfo}>
                    delete
                </button>
            </div>
        </div>
    )
}

export default Deleteinfo;