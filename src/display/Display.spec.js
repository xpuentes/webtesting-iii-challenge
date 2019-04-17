// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Display from './Display';

describe('<Display />', () => {
  it('Should render', () => {
    const { getByText } = render(<Display />);
  });

  it('Should display "Unlocked" & "Open" by default', () => {
    const { getByText } = render(<Display />);

    getByText(/unlocked/i);
    getByText(/open/i);
  });
});
