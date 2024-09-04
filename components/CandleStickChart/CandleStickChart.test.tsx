// src/app/components/CandlestickChart.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import CandlestickChart from './CandlestickChart';

const mock = new MockAdapter(axios);

describe('CandlestickChart', () => {
  it('fetches and displays candlestick chart data', async () => {
    const mockData = {
      data: [
        { x: '2023-01-01', open: 30, high: 40, low: 25, close: 35 },
        { x: '2023-01-02', open: 35, high: 45, low: 30, close: 40 },
      ],
    };

    mock.onGet('/api/candlestick-data/').reply(200, mockData);

    render(<CandlestickChart />);

    await waitFor(() => {
      
      expect(screen.getByText('2023-01-01')).toBeInTheDocument();
      expect(screen.getByText('35')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    mock.onGet('/api/candlestick-data/').reply(500);

    render(<CandlestickChart />);

    await waitFor(() => {
      
      expect(screen.queryByText('Error')).toBeInTheDocument();
    });
  });
});
