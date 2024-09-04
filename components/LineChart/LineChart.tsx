import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { getLineChartData } from '../../api/services/services';

interface LineChartData {
  labels: string[];
  data: number[];
}

const LineChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<LineChartData | null>(null);

  useEffect(() => {
    getLineChartData()
      .then(data => setChartData(data))
      .catch(error => console.error(error));
  }, []);

  const formattedData = chartData?.labels.map((label, index) => ({
    label,
    value: chartData.data[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formattedData}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;
