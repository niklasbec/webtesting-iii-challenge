import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';
import Controls from '../controls/Controls'

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

afterEach(rtl.cleanup);

let wrapper;

let Open = () =>{
    return wrapper.queryByText('Open');
};

let Closed = () =>{
    return wrapper.queryByText('Closed');
};

let Locked = () =>{
    return wrapper.queryByText('Locked');
};

let Unlocked = () =>{
    return wrapper.queryByText('Unlocked');
};

beforeEach(() => {
    wrapper = rtl.render(<Display />);
});

it("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
    expect(Open()).toBeVisible();
    wrapper = rtl.render(<Display closed={true}/>);
    expect(Closed()).toBeVisible();
});

it("displays 'Locked' if the locked prop is true", () => {
    wrapper = rtl.render(<Display locked={true}/>);
    expect(Locked()).toBeVisible();
});

it("displays 'Unlocked' if the locked prop is false", () => {
    wrapper = rtl.render(<Display locked={false}/>);
    expect(Unlocked()).toBeVisible();
});