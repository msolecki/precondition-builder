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

interface LoggedProps {
    onDataChange(value: boolean): void;

    logged: boolean | null;
}

const Logged: React.FC<LoggedProps> = (props: LoggedProps): React.ReactElement => {
    const classes = useStyles()

    function handleChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLSelectElement

        props.onDataChange(Number(value) === 1)
    }

    return (
        <>
            <Title text="Logged in"/>
            <FormControl className={classes.formControl} fullWidth required component='div'>
                <Select
                    value={props.logged === null ? '' : Number(props.logged)}
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

Logged.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    logged: PropTypes.bool,
}

Logged.defaultProps = {
    logged: null,
}

export default Logged
