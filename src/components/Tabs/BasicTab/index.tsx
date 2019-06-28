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
import OperatingSystem from '../../Conditions/OperationSystem'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        padding: spacing(3, 2),
    },
}))

interface BasicTabProps {
    handleAddCondition(value: ConditionInterface): void;

    handleActivated(value: boolean): void;

    activated: boolean;
    conditions: ConditionInterface[];
}

const BasicTab: React.FC<BasicTabProps> = (props: BasicTabProps): React.ReactElement => {
    const classes = useStyles()

    const [logged, setLogged] = React.useState<boolean | null>(null)
    const [system, setSystem] = React.useState<string | null>(null)
    const [radius, setRadius] = React.useState<number | null>(null)
    const [latLng, setLatLng] = React.useState<string | null>(null)
    const [nuggets, setNuggets] = React.useState<NuggetConditionInterface[] | null>(null)

    const clearState = (): void => {
        props.handleActivated(false)
        setLogged(null)
        setRadius(null)
        setLatLng(null)
        setNuggets(null)
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
                <Grid container spacing={3}>
                    {/*<HtmlNugget onDataChange={() => {
                        }} ids={}/>*/}
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary" fullWidth>
                            Add Condition
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color="default" onClick={clearState} fullWidth>
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color="secondary" onClick={onSave} fullWidth>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

BasicTab.propTypes = {
    handleAddCondition: PropTypes.func.isRequired,
    handleActivated: PropTypes.func.isRequired,
    conditions: PropTypes.any, // TODO it should be fixed
    activated: PropTypes.bool.isRequired,
}

BasicTab.defaultProps = {
    activated: false,
    conditions: [],
}

export default BasicTab
