import React from 'react'
import PropTypes from 'prop-types'

import Title from '../../Title'
import FormControl from '@material-ui/core/FormControl'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
    },
    divider: {
        height: spacing(2),
    },
    formControl: {
        marginTop: spacing(1),
        marginBottom: spacing(3),
        minWidth: 120,
    },
    formControlWithoutMargin: {
        marginTop: spacing(1),
        minWidth: 120,
    },
}))

interface HtmlNuggetProps {
    onDataChange(value: boolean): void;

    //ids: string[];
}

const HtmlNugget: React.FC<HtmlNuggetProps> = (props: HtmlNuggetProps): React.ReactElement => {
    const classes = useStyles()


    return (
        <>
            <Title text="Location"/>
            <FormControl fullWidth required className={classes.formControlWithoutMargin} component='div'>
                
            </FormControl>
        </>
    )
}

HtmlNugget.propTypes = {
    onDataChange: PropTypes.func.isRequired,
}

HtmlNugget.defaultProps = {}

export default HtmlNugget
