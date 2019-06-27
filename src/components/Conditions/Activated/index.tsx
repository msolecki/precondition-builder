import React, {ChangeEvent} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import PropTypes from 'prop-types'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: spacing(1),
        minWidth: 120,
    },
}))

interface ActivatedProps {
    onDataChange(value: boolean): void;

    activated: boolean;
}

const Activated: React.FC<ActivatedProps> = (props: ActivatedProps): React.ReactElement => {
    const classes = useStyles()

    function handleChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLSelectElement

        props.onDataChange(Number(value) === 1)
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl} fullWidth required component='div'>
                <InputLabel htmlFor="activated" required disableAnimation>Activated</InputLabel>
                <Select
                    value={Number(props.activated)}
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
        </form>
    )
}

Activated.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    activated: PropTypes.bool.isRequired,
}

Activated.defaultProps = {
    activated: false,
}

export default Activated
