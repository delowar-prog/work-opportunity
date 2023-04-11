import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import { totalObtainMarks } from '../../utilities/calculation';

const Statistics = () => {
    const data = [
        { id:1, name: 'Assing.1', obtaind_mark: 60, },
        { id:2, name: 'Assing.2', obtaind_mark: 60, },
        { id:3, name: 'Assing.3', obtaind_mark: 60, },
        { id:4, name: 'Assing.4', obtaind_mark: 57, },
        { id:5, name: 'Assing.5', obtaind_mark: 60, },
        { id:6, name: 'Assing.6', obtaind_mark: 60, },
        { id:7, name: 'Assing.7', obtaind_mark: 60, },
        { id:8, name: 'Assing.8', obtaind_mark: 58, },
    ];
    return (
        <div className='p-20 bg-slate-100 '>
            <div className='border-2 border-violet-900 p-14 rounded-3xl flex'>
                <AreaChart width={800} height={300} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="id" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="obtaind_mark" stroke="#8884d8" fill="#04A29F" fillOpacity={0.2} />
                </AreaChart>
                <div className='border-s-2 ml-5 pl-5 text-violet-900'>
                    <h1 className='text-xl font-bold my-5'>Assignment Marks Statistics</h1>
                    <p>Total Marks : 480</p>
                    <p>Obtain Marks : 475</p>
                </div>
            </div>

        </div>
    )
}

export default Statistics