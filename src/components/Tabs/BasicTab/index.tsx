import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Activated from '../../Conditions/Activated'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}))

const BasicTab: React.FC = (): React.ReactElement => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Activated/>
        </Paper>
    )
}

export default BasicTab
