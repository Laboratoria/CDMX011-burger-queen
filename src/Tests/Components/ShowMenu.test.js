/* eslint-disable no-console */
/* eslint-disable no-undef */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import ShowMenu from '../../Components/ShowMenu';

afterEach(cleanup);

test('Testeando Showmenu', () => {
  const mockAddClient = jest.fn();
  const component = render(<ShowMenu addOrder={mockAddClient} />);
  component.debug();
  // console.log(mockAddClient);
  // const contentBtnsMenus = screen.getByRole('input')

  // expect(contentBtnsMenus).toBeInTheDocument()
});
