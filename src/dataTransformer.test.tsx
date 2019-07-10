import * as React from 'react'
import {ConditionInterface} from './components/App/interfaces'
import {transform} from './dataTransformer'

const createConditions = (logged, system, location, nuggets): ConditionInterface => {
    return {
        logged,
        system,
        location,
        nuggets
    }
}

describe('dataTransformer', () => {
    describe('empty conditions', () => {
        test('works ok', () => {
            expect(transform([createConditions(null, null, null, null)], false)).toMatchSnapshot()
        })
    })

    describe('with conditions', () => {
        test('works ok', () => {
            expect(transform([createConditions(true, 'ios', {
                radius: 12,
                latLng: 'position'
            }, [
                {
                    id: 12,
                    condition: 'read',
                    value: false
                }
            ])], false)).toMatchSnapshot()
        })
    })
})
