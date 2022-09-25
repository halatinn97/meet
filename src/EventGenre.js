import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const COLORS = ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57'];

    useEffect(() => {
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
        setData(() => getData());
    }, [events]);

    return (
        <ResponsiveContainer height={200} padding={"15em"}>
            <PieChart width={400} height={400}>
                <Legend verticalAlign="bottom" height={10} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} />
                <Pie
                    data={data}
                    cx={'50%'}
                    cy={'50%'}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};
export default EventGenre;