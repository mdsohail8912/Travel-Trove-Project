import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Showinfo = () => {
    const [infos, setInfos] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5000/infos/${id}`)
        .then((response)=>{
            setInfos(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[id]);

    return(
        <div>
            <h1>back</h1>
            {
                loading?(
                    <h1>Loading</h1>
                ):(
                    <div>
                        <div>
                            <h2>Tittle</h2>
                           <h3>{infos.tittle}</h3> 
                        </div>
                        <div>
                        <h2>description</h2>
                           <h3>{infos.description}</h3> 
                        </div>
                        <div>
                            <h2>review</h2>
                           <h3>{infos.rating}</h3> 
                        </div>
                        <div>
                        <h2>Average cost</h2>
                           <h3>{infos.cost}</h3> 
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Showinfo;