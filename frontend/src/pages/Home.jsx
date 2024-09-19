import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const  Home = () => {
    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5000/infos')
        .then((response)=>{
            setInfos(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[]);

    return(
        <div>
            <div>
                <h1>List</h1>
                <Link to='/infos/create'>
                Create
                </Link>
                <div>
                    {
                        loading?(
                            <h3>loading</h3>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Type</th>
                                        <th>description</th>
                                        <th>review</th>
                                        <th>Average cost</th>
                                        <th>operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {infos.map((info, index)=>(
                                        <tr key={info._id} >
                                            <td>
                                               {index + 1} 
                                            </td>
                                            <td>
                                                {info.tittle}
                                            </td>
                                            <td>
                                                {info.description}
                                            </td>
                                            <td>
                                                {info.rating}
                                            </td>
                                            <td>
                                                {info.cost}
                                            </td>
                                            <td>
                                               
                                                <Link to={`/infos/delete/${info._id}`}>
                                                  Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;