import React from 'react';
import {Link} from "react-router-dom";
import {check, login, registration} from "../https/userApi";

async function sendrequest() {
    // const response = await check();
    // console.log(response);
    const response = await registration('idtest@email.com', 'idtest');
    console.log(response);
    // const response = await login('test@gmail.com', '123456');
    // console.log(response)
}

const RecipePage: React.FC = () => {
    return (
        <div>
            <Link to='/'>recipe</Link>
            <button className='p-2 bg-black text-2xl font-bold rounded-2xl text-white' onClick={sendrequest}>SEND REQUEST</button>
        </div>
    );
};

export default RecipePage;