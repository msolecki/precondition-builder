import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createShallow} from '@material-ui/core/test-utils'

import AdvancedTab, {AdvancedTabProps} from './index'

const component = (props: AdvancedTabProps): AdvancedTab => <AdvancedTab {...props}/>

describe('<Activated />', () => {
    let shallow

    beforeAll(() => {
        shallow = createShallow()
    })

    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = shallow(component({data: {}}))

        expect(wrapper).toMatchSnapshot()
    })
})
