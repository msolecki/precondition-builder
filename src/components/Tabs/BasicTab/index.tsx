import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Activated from '../../Conditions/Activated'
import Logged from '../../Conditions/Logged'
import {FormDataInterface} from '../../App'
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

    return (
        <Paper className={classes.root}>
            <Activated onDataChange={activatedChange} activated={props.data.activated}/>
            <Logged onDataChange={loggedChange} logged={props.data.logged}/>
        </Paper>
    )
}

BasicTab.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    data: PropTypes.shape({
        activated: PropTypes.bool.isRequired,
        logged: PropTypes.bool.isRequired,
    }).isRequired
}

BasicTab.defaultProps = {
    data: {
        activated: false,
        logged: false,
    },
}

export default BasicTab
