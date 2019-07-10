import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createMount} from '@material-ui/core/test-utils'

import Autocomplete, {AutocompleteProps} from './index'

const component = (props: AutocompleteProps): Autocomplete => <Autocomplete {...props}/>
const handleChangeFunc = jest.fn()

describe('<Autocomplete />', () => {
    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = createMount()(component({
            handleChange: () => {
            },
            data: [],
            selectedData: null
        }))
        expect(wrapper).toMatchSnapshot()
    })

    test('default data', () => {
        const wrapper = createMount()(
            component({
                handleChange: handleChangeFunc,
                data: ['1'],
                selectedData: null
            }))
        const event = {target: {name: 'name', value: ''}}

        wrapper.find('input').simulate('change', event)

        expect(handleChangeFunc).not.toHaveBeenCalled()
    })

    test('with selected data', () => {
        const wrapper = createMount()(
            component({
                handleChange: handleChangeFunc,
                data: ['1'],
                selectedData: '1'
            }))
        const event = {target: {name: 'name', value: 1}}

        wrapper.find('input').simulate('change', event)

        expect(handleChangeFunc).toHaveBeenCalledWith('1')
    })

    test('with selected data', () => {
        const wrapper = createMount()(
            component({
                handleChange: handleChangeFunc,
                data: [],
                selectedData: null
            }))
        const event = {target: {name: 'name', value: ''}}

        wrapper.find('input').simulate('change', event)

        expect(handleChangeFunc).toHaveBeenCalledWith('1')
    })
})
