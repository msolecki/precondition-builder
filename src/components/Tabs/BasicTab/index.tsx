import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Activated from '../../Conditions/Activated'
import Logged from '../../Conditions/Logged'
import Location from '../../Conditions/Location'
import {FormDataInterface, LocationInterface} from '../../App'
import PropTypes from 'prop-types'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        padding: spacing(3, 2),
    },
}))

interface BasicTabProps {
    onDataChange(value: FormDataInterface): void;

    data: FormDataInterface;
}

const BasicTab: React.FC<BasicTabProps> = (props: BasicTabProps): React.ReactElement => {
    const classes = useStyles()

    function activatedChange(activated: boolean): void {
        props.onDataChange({
            ...props.data,
            activated
        })
    }

    function loggedChange(logged: boolean): void {
        props.onDataChange({
            ...props.data,
            logged
        })
    }

    function locationChange(location: LocationInterface): void {
        props.onDataChange({
            ...props.data,
            location
        })
    }

    return (
        <Paper className={classes.root}>
            <form autoComplete="off">
                <Activated onDataChange={activatedChange} activated={props.data.activated}/>
                <Logged onDataChange={loggedChange} logged={props.data.logged}/>
                <Location onDataChange={locationChange} location={props.data.location}/>
            </form>
        </Paper>
    )
}

BasicTab.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    data: PropTypes.shape({
        activated: PropTypes.bool.isRequired,
        logged: PropTypes.bool.isRequired,
        location: PropTypes.shape({
            radius: PropTypes.number.isRequired,
            latlng: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired
}

BasicTab.defaultProps = {
    data: {
        activated: false,
        logged: false,
        location: {
            latlng: '',
            radius: 0
        },
    },
}

export default BasicTab
