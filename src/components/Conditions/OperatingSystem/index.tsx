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

export interface OperatingSystemProps {
    onDataChange(value: string | null): void;

    system: string | null;
}

const OperatingSystem: React.FC<OperatingSystemProps> = (props: OperatingSystemProps): React.ReactElement => {
    const classes = useStyles()

    function handleChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLSelectElement

        props.onDataChange(value)
    }

    return (
        <>
            <Title text="Operating system"/>
            <FormControl className={classes.formControl} fullWidth required component='div'>
                <Select
                    value={props.system === null ? '' : props.system}
                    displayEmpty
                    onChange={handleChange}
                    inputProps={{
                        name: 'system',
                        id: 'system',
                    }}
                >
                    <MenuItem component='li' button={true} value={'iOS'}>iOS</MenuItem>
                    <MenuItem component='li' button={true} value={'Android'}>Android</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

OperatingSystem.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    system: PropTypes.string,
}

OperatingSystem.defaultProps = {
    system: null,
}

export default OperatingSystem
