import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statics = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(data => setCardData(data.data))
            .catch(err => console.error(err))
    }, [])
    // console.log(cardData);
    return (
        <>

            <div className='d-none d-md-flex justify-content-center mt-2 mt-md-5 mx-auto'>
                <BarChart width={400} height={500} data={cardData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
            <div className='d-block d-md-none justify-content-center mt-5 mx-auto'>
                <BarChart width={350} height={400} data={cardData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </>
    );
};

export default Statics;