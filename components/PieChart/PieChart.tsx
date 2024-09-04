import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getPieChartData } from '../../api/services/services';

interface PieChartData {
  labels: string[];
  data: number[];
}

const PieChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<PieChartData | null>(null);

  useEffect(() => {
    getPieChartData()
      .then(data => setChartData(data))
      .catch(error => console.error(error));
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const formattedData = chartData?.labels.map((label, index) => ({
    name: label,
    value: chartData.data[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
        >
          {formattedData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;
