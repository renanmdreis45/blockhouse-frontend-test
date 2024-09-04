import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, Line, Bar } from 'recharts';
import { getCandlestickData } from '../../api/services/services';

interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const CandlestickChart: React.FC = () => {
  const [data, setData] = useState<CandlestickData[]>([]);

  useEffect(() => {
    getCandlestickData()
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="close" fill="#8884d8" />
        <Line type="monotone" dataKey="high" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default CandlestickChart;
