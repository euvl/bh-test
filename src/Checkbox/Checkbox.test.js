import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Checkbox from './index'

describe('Checkbox component', () => {
  it('Should render', () => {
    let component = shallow(<Checkbox/>)
    expect(component.exists()).toBe(true)
  })
})
