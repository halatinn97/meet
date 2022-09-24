import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);
    const COLORS = ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57'];

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
            return {
                name: genre,
                value: value,
            };
        });
        return data;
    };
    useEffect(() => {
        setData(() => getData());
    }, [events]);

    return (
        <ResponsiveContainer height={200}>
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    cx={'50%'}
                    cy={'50%'}
                    labelLine={false}
                    outerRadius={'60%'}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};
export default EventGenre;