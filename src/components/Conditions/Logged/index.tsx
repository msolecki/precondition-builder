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

interface LoggedProps {
    onDataChange(value: boolean): void;

    logged: boolean;
}

const Logged: React.FC<LoggedProps> = (props: LoggedProps): React.ReactElement => {
    const classes = useStyles()

    function handleChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLSelectElement

        props.onDataChange(Number(value) === 1)
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl} fullWidth required component='div'>
                <InputLabel htmlFor="activated" required disableAnimation>Logged in</InputLabel>
                <Select
                    value={Number(props.logged)}
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

Logged.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    logged: PropTypes.bool.isRequired,
}

Logged.defaultProps = {
    logged: false,
}

export default Logged
