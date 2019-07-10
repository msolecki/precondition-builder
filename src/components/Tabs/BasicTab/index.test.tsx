import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createShallow} from '@material-ui/core/test-utils'

import BasicTab, {BasicTabProps} from './index'

const component = (props: BasicTabProps): BasicTab => <BasicTab {...props}/>
const mockedFunction = jest.fn()

describe('<Activated />', () => {
    let shallow

    beforeAll(() => {
        shallow = createShallow()
    })

    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = shallow(component({
            handleAddCondition: mockedFunction,
            handleActivated: mockedFunction,
            htmlNuggetIds: ['1'],
            activated: true,
            conditions: [{logged: null, system: null, location: null, nuggets: null}]
        }))

        expect(wrapper).toMatchSnapshot()
    })
})
