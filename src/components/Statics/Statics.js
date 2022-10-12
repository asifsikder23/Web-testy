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

            <div className='flex justify-center my-16'>
                <BarChart width={400} height={500} data={cardData}>
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