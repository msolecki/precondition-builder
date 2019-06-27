import React, {ChangeEvent} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import {LocationInterface} from '../../App'
import {Input} from '@material-ui/core'
import PropTypes from 'prop-types'
import Title from '../../Title'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: spacing(1),
        marginBottom: spacing(3),
        minWidth: 120,
    },
    formControlWithoutMargin: {
        margin: spacing(1),
        minWidth: 120,
    },
}))

interface LocationProps {
    onDataChange(value: LocationInterface): void;

    location: LocationInterface;
}

// TODO: add validation for gps points
const Location: React.FC<LocationProps> = (props: LocationProps): React.ReactElement => {
    const classes = useStyles()

    function handleRangeChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLInputElement

        props.onDataChange({
            ...props.location,
            range: Number(value),
        })
    }

    function handleGPSChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLInputElement

        props.onDataChange({
            ...props.location,
            gps: value
        })
    }

    return (
        <>
            <Title text="Location"/>
            <FormControl fullWidth required className={classes.formControlWithoutMargin} component='div'>
                <InputLabel htmlFor="location-range">Range</InputLabel>
                <Input
                    id="location-range"
                    value={(props.location.range || '')}
                    placeholder={'0'}
                    type='number'
                    onChange={handleRangeChange}
                    endAdornment={<InputAdornment position="end">m</InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth required className={classes.formControl} component='div'>
                <InputLabel htmlFor="location-gps">GPS</InputLabel>
                <Input
                    id="location-gps"
                    value={(props.location.gps)}
                    placeholder={'@52.13,13.45'}
                    onChange={handleGPSChange}
                />
            </FormControl>
        </>
    )
}

Location.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    location: PropTypes.shape({
        range: PropTypes.number.isRequired,
        gps: PropTypes.string.isRequired,
    }).isRequired
}

Location.defaultProps = {
    location: {
        gps: '',
        range: 0
    },
}

export default Location
