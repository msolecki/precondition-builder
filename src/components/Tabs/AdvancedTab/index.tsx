import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import {FormDataInterface} from '../../App'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        padding: spacing(3, 2),
    },
}))

interface ActivatedProps {
    data: FormDataInterface;
}

const AdvancedTab: React.FC<ActivatedProps> = (props: ActivatedProps): React.ReactElement => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            {JSON.stringify(props.data)}
        </Paper>
    )
}

export default AdvancedTab
