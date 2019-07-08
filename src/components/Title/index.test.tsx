import * as React from 'react'
import {create, ReactTestRenderer} from 'react-test-renderer'

import Title from './index'


let snapshot: ReactTestRenderer

beforeEach(() => {
    const title = <Title text='test title'/>


    snapshot = create(title)
})

describe('<Title />', () => {
    test('it matches the snapshot', () => {
        expect(snapshot.toJSON()).toMatchSnapshot()
    })
})
