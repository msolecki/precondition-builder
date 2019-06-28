import React, {ChangeEvent} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import PropTypes from 'prop-types'
import Title from '../../Title'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        marginTop: spacing(1),
        marginBottom: spacing(3),
        minWidth: 120,
    },
}))

interface ActivatedProps {
    onDataChange(value: boolean): void;

    activated: boolean | null;
}

const Activated: React.FC<ActivatedProps> = (props: ActivatedProps): React.ReactElement => {
    const classes = useStyles()

    function handleChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLSelectElement

        props.onDataChange(Number(value) === 1)
    }

    return (
        <>
            <Title text="Activated"/>
            <FormControl className={classes.formControl} fullWidth required component='div'>
                <Select
                    value={props.activated === null ? '' : Number(props.activated)}
                    displayEmpty
                    onChange={handleChange}
                    inputProps={{
                        name: 'activated',
                        id: 'activated',
                    }}
                >
                    <MenuItem component='li' button={true} value={1}>True</MenuItem>
                    <MenuItem component='li' button={true} value={0}>False</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

Activated.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    activated: PropTypes.bool,
}

Activated.defaultProps = {
    activated: null,
}

export default Activated
