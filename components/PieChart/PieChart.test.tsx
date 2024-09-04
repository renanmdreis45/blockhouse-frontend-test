// src/app/components/PieChartComponent.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import PieChartComponent from './PieChart';

const mock = new MockAdapter(axios);

describe('PieChartComponent', () => {
  it('fetches and displays pie chart data', async () => {
    const mockData = {
      labels: ['Red', 'Blue', 'Yellow'],
      data: [300, 50, 100],
    };

    mock.onGet('/api/pie-chart-data/').reply(200, mockData);

    render(<PieChartComponent />);

    await waitFor(() => {
      expect(screen.getByText('Red')).toBeInTheDocument();
      expect(screen.getByText('Blue')).toBeInTheDocument();
      expect(screen.getByText('Yellow')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    mock.onGet('/api/pie-chart-data/').reply(500);

    render(<PieChartComponent />);

    await waitFor(() => {
      expect(screen.queryByText('Error')).toBeInTheDocument();
    });
  });
});
