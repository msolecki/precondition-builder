import {ConditionInterface, NuggetConditionInterface} from './components/App/interfaces'

export const transform = (conditions: ConditionInterface[], activated: boolean): object => {
    return {
        active: activated,
        conditions: conditions.map((condition: ConditionInterface): string[] => {
            const result: string[] = []

            if (condition.system) {
                result.push(`client.tracking.system.os == '${condition.system}'`)
            }

            if (condition.logged !== null) {
                result.push(`logged == '${condition.logged}'`)
            }

            if (condition.location && condition.location.radius) {
                result.push(`location_radius == '${condition.location.radius}'`)
            }

            if (condition.nuggets) {
                condition.nuggets.forEach((nugget: NuggetConditionInterface): void => {
                    result.push(`public.kesi.additionalData.${nugget.id}.${nugget.condition} == ${nugget.value}`)
                })
            }

            return result
        }).filter((item): boolean => item.length > 0)
    }
}
