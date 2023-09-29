import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Table, Button} from 'semantic-ui-react';
import {link} from 'react-router-dom';

const read = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData')
        .then((response)=>{
            console.log(response.data);
            setAPIData(response.data);
        })
    });

    const setData = (data) =>{
        let {id,firstName,lastName,checkbox} = data;
        
    }

  return (
    <div>
      
    </div>
  )
}

export default read
