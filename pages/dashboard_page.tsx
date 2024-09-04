import React from 'react';
import CandlestickChart from '../components/CandleStickChart/CandlestickChart';
import LineChartComponent from '../components/LineChart/LineChart';
import BarChartComponent from '../components/BarChart/BarChart';
import PieChartComponent from '../components/PieChart/PieChart';
import './dashboard_page.css';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className='dashboard-title'>Dashboard</h1>
      <div className='chart-container'>
        <CandlestickChart />
      </div>
      <div className='chart-container'>
        <LineChartComponent />
      </div>
      <div className='chart-container'>
        <BarChartComponent />
      </div>
      <div className='chart-container'>
        <PieChartComponent />
      </div>
    </div>
  );
}

export default DashboardPage;
