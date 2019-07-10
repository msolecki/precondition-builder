import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createShallow} from '@material-ui/core/test-utils'

import Activated, {ActivatedProps} from './index'
import {Select} from '@material-ui/core'

const component = (props: ActivatedProps): Activated => <Activated {...props}/>
const onDataChangeFunc = jest.fn()

describe('<Activated />', () => {
    let shallow

    beforeAll(() => {
        shallow = createShallow()
    })

    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = shallow(
            component({
                activated: null,
                onDataChange: () => {
                }
            }))

        expect(wrapper).toMatchSnapshot()
    })

    test('default snapshot', () => {
        const wrapper = shallow(
            component({
                activated: true,
                onDataChange: onDataChangeFunc
            }))
        const event = {target: {name: 'name', value: 1}}

        wrapper.find(Select).simulate('change', event)

        expect(onDataChangeFunc).toHaveBeenCalledWith(true)
    })
})
