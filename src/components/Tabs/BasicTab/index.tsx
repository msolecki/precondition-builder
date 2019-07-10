import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Activated from '../../Conditions/Activated'
import Logged from '../../Conditions/Logged'
import Location from '../../Conditions/Location'
import {ConditionInterface, NuggetConditionInterface} from '../../App/interfaces'
import PropTypes from 'prop-types'
import OperatingSystem from '../../Conditions/OperatingSystem'
import HtmlNugget from '../../Conditions/HtmlNugget'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        padding: spacing(3, 2),
    },
}))

export interface BasicTabProps {
    handleAddCondition(value: ConditionInterface): void;

    handleActivated(value: boolean): void;

    htmlNuggetIds: string[];
    activated: boolean;
    conditions: ConditionInterface[];
}

const BasicTab: React.FC<BasicTabProps> = (props: BasicTabProps): React.ReactElement => {
    const classes = useStyles()

    const [logged, setLogged] = React.useState<boolean | null>(null)
    const [system, setSystem] = React.useState<string | null>(null)
    const [radius, setRadius] = React.useState<number | null>(null)
    const [latLng, setLatLng] = React.useState<string | null>(null)
    const [nuggets, setNuggets] = React.useState<NuggetConditionInterface[]>([])

    const clearState = (): void => {
        setLogged(null)
        setRadius(null)
        setLatLng(null)
        setSystem(null)
        setNuggets([])
    }

    const addCondition = (): void => {
        props.handleAddCondition({
            logged,
            system,
            location: {
                radius, latLng
            },
            nuggets,
        })
    }

    const onSave = (): void => {
        addCondition()
        clearState()
    }

    const addNugget = (nugget: NuggetConditionInterface): void => {
        const newNuggets = nuggets || []
        newNuggets.push(nugget)

        setNuggets(newNuggets)
    }

    return (
        <Paper className={classes.root}>
            <form autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Activated onDataChange={props.handleActivated} activated={props.activated}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <OperatingSystem onDataChange={setSystem} system={system}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Logged onDataChange={setLogged} logged={logged}/>
                    </Grid>
                </Grid>
                <Location setRadius={setRadius} setLatLng={setLatLng} radius={radius} latLng={latLng}/>
                <HtmlNugget ids={props.htmlNuggetIds} addNugget={addNugget}/>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Button variant="contained" color="secondary" onClick={onSave} fullWidth>
                            Add condition
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="default" onClick={clearState} fullWidth>
                            Clear
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

BasicTab.propTypes = {
    handleAddCondition: PropTypes.func.isRequired,
    htmlNuggetIds: PropTypes.array.isRequired,
    handleActivated: PropTypes.func.isRequired,
    conditions: PropTypes.any, // TODO it should be fixed
    activated: PropTypes.bool.isRequired,
}

BasicTab.defaultProps = {
    activated: false,
    conditions: [],
    htmlNuggetIds: [],
}

export default BasicTab
