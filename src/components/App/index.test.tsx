import * as React from 'react'
import {ReactTestRenderer} from 'react-test-renderer'
import {createShallow} from '@material-ui/core/test-utils'

import App, {AppProps} from './index'

const component = (props: AppProps) => <App {...props}/>

describe('<App />', () => {
    let shallow

    beforeAll(() => {
        shallow = createShallow()
    })

    test('empty snapshot', () => {
        const wrapper: ReactTestRenderer = shallow(component({
            htmlNuggetIds: ['1'],
        }))

        expect(wrapper).toMatchSnapshot()
    })
})
