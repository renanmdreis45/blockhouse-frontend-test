import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BarChartComponent from './BarChart';
import '@testing-library/jest-dom'


const mock = new MockAdapter(axios);

describe('BarChartComponent', () => {
  it('fetches and displays chart data', async () => {
    
    const mockData = {
      labels: ['Product A', 'Product B', 'Product C'],
      data: [100, 150, 200],
    };

   
    mock.onGet('/api/bar-chart-data/').reply(200, mockData);

    
    render(<BarChartComponent />);

    
    await waitFor(() => {
      
      expect(screen.getByText('Product A')).toBeInTheDocument();
      expect(screen.getByText('Product B')).toBeInTheDocument();
      expect(screen.getByText('Product C')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    
    mock.onGet('/api/bar-chart-data/').reply(500);

    
    render(<BarChartComponent />);

    
    await waitFor(() => {
      
      expect(screen.queryByText('Error')).toBeInTheDocument();
    });
  });
});