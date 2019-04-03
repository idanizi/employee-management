import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';

it('should load', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main status={'WORKING'} username={'test-username'}/>, div);
    ReactDOM.unmountComponentAtNode(div);
})