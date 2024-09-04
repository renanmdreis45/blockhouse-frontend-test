import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getCandlestickData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/candlestick-data/`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching candlestick data:', error);
    throw error;
  }
};

export const getLineChartData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/line-chart-data/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching line chart data:', error);
    throw error;
  }
};

export const getBarChartData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/bar-chart-data/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    throw error;
  }
};

export const getPieChartData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/pie-chart-data/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    throw error;
  }
};
