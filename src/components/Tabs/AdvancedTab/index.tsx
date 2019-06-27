import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}))

const AdvancedTab: React.FC = (): React.ReactElement => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            Generated JSON content
        </Paper>
    )
}

export default AdvancedTab
