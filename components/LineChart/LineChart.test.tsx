// src/app/components/LineChartComponent.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import LineChartComponent from './LineChart';

const mock = new MockAdapter(axios);

describe('LineChartComponent', () => {
  it('fetches and displays line chart data', async () => {
    const mockData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      data: [10, 20, 30, 40],
    };

    mock.onGet('/api/line-chart-data/').reply(200, mockData);

    render(<LineChartComponent />);

    await waitFor(() => {
      
      expect(screen.getByText('Jan')).toBeInTheDocument();
      expect(screen.getByText('Feb')).toBeInTheDocument();
      expect(screen.getByText('Mar')).toBeInTheDocument();
      expect(screen.getByText('Apr')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    mock.onGet('/api/line-chart-data/').reply(500);

    render(<LineChartComponent />);

    await waitFor(() => {
      
      expect(screen.queryByText('Error')).toBeInTheDocument();
    });
  });
});
