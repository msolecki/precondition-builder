import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createShallow} from '@material-ui/core/test-utils'

import OperatingSystem, {OperatingSystemProps} from './index'
import {Select} from '@material-ui/core'

const component = (props: OperatingSystemProps): OperatingSystem => <OperatingSystem {...props}/>
const onDataChangeFunc = jest.fn()

describe('<OperatingSystem />', () => {
    let shallow

    beforeAll(() => {
        shallow = createShallow()
    })

    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = shallow(
            component({
                system: null,
                onDataChange: () => {
                }
            }))

        expect(wrapper).toMatchSnapshot()
    })

    test('default snapshot', () => {
        const wrapper = shallow(
            component({
                system: 'ios',
                onDataChange: onDataChangeFunc
            }))
        const event = {target: {name: 'name', value: 'value'}}

        wrapper.find(Select).simulate('change', event)

        expect(onDataChangeFunc).toHaveBeenCalledWith('value')
    })
})
