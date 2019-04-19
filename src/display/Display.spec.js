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

  it('Should display "Closed" if the closed prop is true', () => {
    const { getByText } = render(<Display closed={true}/>);

    getByText(/closed/i);
  });

  it('Should displays "Locked" if the locked prop is true ', () => {
    const { getByText } = render(<Display locked={true}/>);

    getByText(/locked/i);
  });
});
