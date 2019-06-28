import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import {ConditionInterface} from '../../App/interfaces'
import JSONPretty from 'react-json-pretty'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        padding: spacing(3, 2),
    },
}))

interface ActivatedProps {
    data: ConditionInterface[];
}

const AdvancedTab: React.FC<ActivatedProps> = (props: ActivatedProps): React.ReactElement => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <JSONPretty id="json-pretty" json={props.data}/>
        </Paper>
    )
}

export default AdvancedTab
