// src/components/PieChartComponent.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#9F238B', '#C69E58']; // Colors for the chart

const PieChartComponent = ({ principal, interest }) => {
  const data = [
    { name: 'Principal Loan Amount', value: principal },
    { name: 'Total Interest', value: interest },
  ];

  return (
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        className='manrope'
        fill="#8884d8"
        dataKey="value"
        label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
