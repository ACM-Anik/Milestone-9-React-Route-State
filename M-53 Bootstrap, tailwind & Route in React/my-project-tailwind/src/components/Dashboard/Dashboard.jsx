import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const studentsMarks = [
        {
            id: 1,
            name: 'John Doe',
            Math: 85,
            Science: 92,
            Accounting: 78,
            ICT: 88
        },
        {
            id: 2,
            name: 'Jane Smith',
            Math: 90,
            Science: 85,
            Accounting: 92,
            ICT: 90
        },
        {
            id: 3,
            name: 'David Lee',
            Math: 80,
            Science: 88,
            Accounting: 95,
            ICT: 82
        },
        {
            id: 4,
            name: 'Sarah Kim',
            Math: 75,
            Science: 83,
            Accounting: 91,
            ICT: 86
        },
        {
            id: 5,
            name: 'Tom Johnson',
            Math: 88,
            Science: 90,
            Accounting: 87,
            ICT: 91
        },
        {
            id: 6,
            name: 'Emma Chen',
            Math: 92,
            Science: 96,
            Accounting: 89,
            ICT: 95
        },
        {
            id: 7,
            name: 'Alex Wong',
            Math: 95,
            Science: 75,
            Accounting: 92,
            ICT: 68
        },
        {
            id: 8,
            name: 'Maggie Ng',
            Math: 98,
            Science: 80,
            Accounting: 66,
            ICT: 72
        },
        {
            id: 9,
            name: 'Sam Lee',
            Math: 83,
            Science: 91,
            Accounting: 78,
            ICT: 66
        },
        {
            id: 10,
            name: 'Lily Chen',
            Math: 96,
            Science: 83,
            Accounting: 70,
            ICT: 92
        },
        {
            id: 11,
            name: 'Max Liu',
            Math: 87,
            Science: 72,
            Accounting: 90,
            ICT: 89
        },
        {
            id: 12,
            name: 'Emily Wang',
            Math: 95,
            Science: 88,
            Accounting: 91,
            ICT: 84
        }
    ];

    return (
        <div className=' my-5'>
            <div>
                <h4 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold  rounded py-4 md:w-[660px] mx-auto mt-8 mb-5'>Gym Members Analysis</h4>
            </div>
            <div className='bg-purple-200 p-6  rounded'>
                <LineChart
                    width={500}
                    height={300}
                    data={studentsMarks}
                >
                    <Line dataKey="Accounting"></Line>
                    <Line dataKey="Math" stroke="#8884d8"></Line>
                    <Line dataKey="Science" stroke="#f814bf"></Line>
                    <Line dataKey="ICT" stroke="#c8c024"></Line>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;