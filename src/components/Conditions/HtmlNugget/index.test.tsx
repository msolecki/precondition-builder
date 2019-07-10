import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createMount} from '@material-ui/core/test-utils'

import HtmlNugget, {HtmlNuggetProps} from './index'
import toJson from 'enzyme-to-json'
import Autocomplete from '../../Autocomplete'
import {Select} from '@material-ui/core'

const component = (props: HtmlNuggetProps): HtmlNugget => <HtmlNugget {...props}/>
const addNuggetFunc = jest.fn()

describe('<HtmlNugget />', () => {
    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = createMount()(
            component({
                addNugget: () => {
                },
                ids: [],
            }))

        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('default snapshot', () => {
        const wrapper = createMount()(
            component({
                addNugget: addNuggetFunc,
                ids: ['1'],
            }))

        const eventIds = {target: {name: 'name', value: '1'}}
        const eventCondition = {target: {name: 'name', value: 'read'}}
        const eventValue = {target: {name: 'name', value: 1}}

        wrapper.find(Autocomplete).find('input').simulate('change', eventIds)
        wrapper.find(Select).at(0).simulate('change', eventCondition)
        wrapper.find(Select).at(1).simulate('change', eventValue)

        expect(addNuggetFunc).toHaveBeenCalledWith(123)
    })
})
