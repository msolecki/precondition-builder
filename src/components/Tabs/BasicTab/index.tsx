import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Activated from '../../Conditions/Activated'
import Logged from '../../Conditions/Logged'
import Location from '../../Conditions/Location'
import {ConditionInterface, LocationInterface, NuggetConditionInterface} from '../../App/interfaces'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        padding: spacing(3, 2),
    },
    button: {
        margin: spacing(3, 2),
    },
}))

interface BasicTabProps {
    handleAddCondition(value: ConditionInterface): void;

    conditions: ConditionInterface[];
}

const BasicTab: React.FC<BasicTabProps> = (props: BasicTabProps): React.ReactElement => {
    const classes = useStyles()

    const [activated, setActivated] = React.useState<boolean | null>(null)
    const [logged, setLogged] = React.useState<boolean | null>(null)
    const [location, setLocation] = React.useState<LocationInterface | null>(null)
    const [nuggets, setNuggets] = React.useState<NuggetConditionInterface[] | null>(null)

    const clearState = (): void => {
        setActivated(null)
        setLogged(null)
        setLocation(null)
        setNuggets(null)
    }

    const addCondition = (): void => {
        props.handleAddCondition({
            activated,
            logged,
            location,
            nuggets,
        })
    }

    const onButtonClick = (): void => {
        addCondition()
        clearState()
    }

    return (
        <Paper className={classes.root}>
            <form autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Activated onDataChange={setActivated} activated={activated}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Logged onDataChange={setLogged} logged={logged}/>
                    </Grid>
                </Grid>
                <Location onDataChange={setLocation} location={location}/>
                <Grid container spacing={3}>
                    {/*<HtmlNugget onDataChange={() => {
                        }} ids={}/>*/}
                </Grid>
                <Grid container spacing={3}>
                    <Button variant="contained" color="secondary" onClick={onButtonClick} fullWidth className={classes.button}>
                        Add Condition
                    </Button>
                </Grid>
            </form>
        </Paper>
    )
}

export default BasicTab
