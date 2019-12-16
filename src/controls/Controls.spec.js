import React from 'react'
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'


// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

afterEach(rtl.cleanup)

let wrapper

let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}

let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}

let LockGate = () => {
    return wrapper.queryByText('Lock Gate')
}

beforeEach(() => {
    wrapper = rtl.render(<Controls />)
})

it('renders without crashing', () => {
    expect(wrapper.container).toMatchSnapshot()
})

it('renders close gate on default', () => {
    expect(CloseGate()).toBeVisible()
})

it('renders open gate after click', () => {
    rtl.fireEvent.click(CloseGate())
    expect(OpenGate()).toBeVisible()
})

it('makes Lock Gate unclickable on render', () => {
    rtl.fireEvent.click(LockGate())
    expect(LockGate()).toBeVisible
})

it('makes Lock Gate clickable after clicking Close Gate and make Open Gate unclickable', () => {
    rtl.fireEvent.click(CloseGate())
    rtl.fireEvent.click(LockGate())
    rtl.fireEvent.click(OpenGate())
    expect(OpenGate()).toBeVisible
})