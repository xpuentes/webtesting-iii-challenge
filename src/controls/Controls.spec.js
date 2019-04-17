// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
  it('Should render', () => {
    const { getByText } = render(<Controls />);
  });

  it('Should have a "Close Gate" & "Lock Gate" button by default', () => {
    const { getByText } = render(<Controls />);

    getByText(/close gate/i);
    getByText(/lock gate/i);
  });
});
