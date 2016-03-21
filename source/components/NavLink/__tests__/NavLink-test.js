import React from 'react'
import { Route, RoutingContext, match } from 'react-router'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'mocha-jsdom'

import { mount } from 'enzyme'

import NavLink from '../'

chai.use(chaiEnzyme())

const setUp = (props = { to: '/', children: 'Home' }, callback) => {
  const Routes = (
    <Route path={props.to}
      component={() => (
        <NavLink { ...props } />
      )}
    />
  )
  match({ routes: Routes, location: props.to }, (err, _r, rprops) => {
    if (err) throw new Error(err)

    const component = <RoutingContext { ...rprops } />
    const wrapper = mount(component)
    callback({
      component,
      wrapper,
      anchor: wrapper.find('a')
    })
  })
}

describe('NavLink', () => {
  jsdom()

  it('prepends config.client.basePath to the href', (done) => {
    setUp({ to: '/hey' }, ({ anchor }) => {
      expect(anchor.node.href).to.eq('/hey')
      done()
    })
  })
})
