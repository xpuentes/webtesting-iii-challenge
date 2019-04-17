// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot(); 
  });

  it('Should render', () => {
    const { getByText } = render(<Dashboard />);
  });
});
