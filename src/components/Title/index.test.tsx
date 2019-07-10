import * as React from 'react'
import {create, ReactTestRenderer} from 'react-test-renderer'

import Title from './index'

describe('<Title />', () => {
    const title = <Title text='test title'/>

    test('it matches the snapshot', () => {
        const snapshot: ReactTestRenderer = create(title)

        expect(snapshot.toJSON()).toMatchSnapshot()
    })
})
