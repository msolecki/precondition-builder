import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createShallow} from '@material-ui/core/test-utils'

import Location, {LocationProps} from './index'

const component = (props: LocationProps): Location => <Location {...props}/>
const setRadiusFunc = jest.fn()
const setLatLngFunc = jest.fn()

describe('<Location />', () => {
    let shallow

    beforeAll(() => {
        shallow = createShallow()
    })

    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = shallow(
            component({
                setRadius: () => {
                },
                setLatLng: () => {
                },
                radius: null,
                latLng: null,
            }))

        expect(wrapper).toMatchSnapshot()
    })

    test('default snapshot', () => {
        const wrapper = shallow(
            component({
                setRadius: setRadiusFunc,
                setLatLng: setLatLngFunc,
                radius: 123,
                latLng: 'test',
            }))
        const eventRadius = {target: {name: 'name', value: 123}}
        const eventLatLng = {target: {name: 'name', value: 'test'}}

        wrapper.find('#location-radius').simulate('change', eventRadius)
        wrapper.find('#location-gps').simulate('change', eventLatLng)

        expect(setRadiusFunc).toHaveBeenCalledWith(123)
        expect(setLatLngFunc).toHaveBeenCalledWith('test')
    })
})
