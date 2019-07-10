import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createMount} from '@material-ui/core/test-utils'

import HtmlNugget, {HtmlNuggetProps} from './index'
import toJson from 'enzyme-to-json'

const component = (props: HtmlNuggetProps): HtmlNugget => <HtmlNugget {...props}/>

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
})
