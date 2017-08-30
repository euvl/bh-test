import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Checkbox from './index'

describe('Checkbox component', () => {
  it('Should render', () => {
    let component = shallow(<Checkbox/>)
    expect(component.exists()).toBe(true)
  })

  it('Should have label', () => {
    let component = shallow(<Checkbox label={'foo'}/>)

    expect(component.contains(<div className="checkbox-label">foo</div>))
      .toBe(true)
  })

  it('Should have default "checked" state', () => {
    let component = shallow(<Checkbox/>)
    expect(component.state().checked).toBe(false)
  })

  it('Should be checkable', () => {
    let component = shallow(<Checkbox/>)

    expect(component.state().checked).toBe(false)
    expect(component.find('.checkbox-checked').length).toBe(0)

    component.find('.checkbox-core').simulate('click')

    expect(component.state().checked).toBe(true)
    expect(component.find('.checkbox-checked').length).toBe(1)
  })
})
