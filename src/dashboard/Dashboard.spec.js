// Test away
//1 Bring all DEPS
import React from 'react'
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dash from './Dashboard'

//2 Set up cleanup
afterEach(rtl.cleanup)

//3 set up boring operations in before each (wrapper)
let wrapper


let Unlocked = () =>{
    return wrapper.queryByText('Unlocked');
}
let Open = () =>{
    return wrapper.queryByText('Open');
}
let LockGate = () =>{
    return wrapper.queryByText('Lock Gate');
}
let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}
let Closed = () =>{
    return wrapper.queryByText('Closed');
}
let Locked = () =>{
    return wrapper.queryByText('Locked');
}
let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}
let UnlockGate = () =>{
    return wrapper.queryByText('Unlock Gate');
}


beforeEach(() => {
    wrapper = rtl.render(<Dash />)
})

//Make a trivial test

it('renders without crashing', () => {
    expect(wrapper.container).toMatchSnapshot()
})

it('renders a "Unlocked" text node', () => {
    expect(Unlocked()).toBeInTheDocument()
    expect(Unlocked()).toBeVisible()
})

it('renders a "Open" text node', () => {
    expect(Open()).toBeInTheDocument()
    expect(Open()).toBeVisible()
})

it('renders a "LockGate" text node', () => {
    expect(LockGate()).toBeInTheDocument()
    expect(LockGate()).toBeVisible()
    expect(LockGate()).toBeDisabled()
})

it('renders a "CloseGate" text node', () => {
    expect(CloseGate()).toBeInTheDocument()
    expect(CloseGate()).toBeVisible()
})

it('renders a "OpenGate" text node', () => {
    expect(OpenGate()).toBeInTheDocument()
    expect(OpenGate()).toBeVisible()
})


it('renders a "UnlockGate" text node', () => {
    expect(UnlockGate()).toBeInTheDocument()
    expect(UnlockGate()).toBeVisible()
})

it('renders a "Closed" text node', () => {
    expect(Closed()).toBeInTheDocument()
    expect(Closed()).toBeVisible()
})

it('renders a "Locked" text node', () => {
    expect(Locked()).toBeInTheDocument()
    expect(Locked()).toBeVisible()
})

describe('Dashboard component, when we CLOSE the gate', () => {
    it('clicking close makes close button disappear', () => {
        expect(CloseGate()).not.toBeVisible()
        rtl.fireEvent.click(CloseGate())
        expect(CloseGate()).toBe(null)
    })
})

it('clicking close makes the OPEN CHANGE to CLOSED', () => {
    expect(CloseGate()).toBeVisible()
    rtl.fireEvent.click(CloseGate())
    expect(CloseGate()).not.toBe(null)
})