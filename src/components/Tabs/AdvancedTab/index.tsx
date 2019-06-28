import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import JSONPretty from 'react-json-pretty'
import PropTypes from 'prop-types'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        padding: spacing(3, 2),
    },
}))

interface AdvancedTabProps {
    data: object;
}

const AdvancedTab: React.FC<AdvancedTabProps> = (props: AdvancedTabProps): React.ReactElement => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <JSONPretty id="json-pretty" json={props.data}/>
        </Paper>
    )
}

AdvancedTab.propTypes = {
    data: PropTypes.any, // TODO fix it
}

AdvancedTab.defaultProps = {
    data: {},
}


export default AdvancedTab
