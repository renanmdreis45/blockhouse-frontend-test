import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { getBarChartData } from '../../api/services/services';

interface BarChartData {
  labels: string[];
  data: number[];
}

const BarChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<BarChartData | null>(null);

  useEffect(() => {
    getBarChartData()
      .then(data => setChartData(data))
      .catch(error => console.error(error));
  }, []);

  const formattedData = chartData?.labels.map((label, index) => ({
    label,
    value: chartData.data[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={formattedData}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
