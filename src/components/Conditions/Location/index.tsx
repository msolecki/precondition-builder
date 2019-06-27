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

const Location: React.FC<LocationProps> = (props: LocationProps): React.ReactElement => {
    const classes = useStyles()

    const [latLngError, setLatLngError] = React.useState<boolean>(false)

    function handleRadiusChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLInputElement

        props.onDataChange({
            ...props.location,
            radius: Number(value),
        })
    }

    function isValidatedLatLangFormat(value: string): boolean {
        return /^@([-+]?\d{1,2}[.]\d+),([-+]?\d{1,2}[.]\d+)$/.test(value)
    }

    function handleLatLangChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLInputElement
        const validated = isValidatedLatLangFormat(value)

        setLatLngError(!validated)

        props.onDataChange({
            ...props.location,
            latlng: value
        })
    }

    return (
        <>
            <Title text="Location"/>
            <FormControl fullWidth required className={classes.formControlWithoutMargin} component='div'>
                <InputLabel htmlFor="location-radius">Radius</InputLabel>
                <Input
                    id="location-radius"
                    value={(props.location.radius || '')}
                    placeholder={'0'}
                    type='number'
                    onChange={handleRadiusChange}
                    endAdornment={<InputAdornment position="end">m</InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth required className={classes.formControl} component='div'>
                <InputLabel htmlFor="location-latlng" error={latLngError}>GPS</InputLabel>
                <Input
                    id="location-gps"
                    value={(props.location.latlng)}
                    placeholder={'@52.13,13.45'}
                    onChange={handleLatLangChange}
                    error={latLngError}
                />
            </FormControl>
        </>
    )
}

Location.propTypes = {
    onDataChange: PropTypes.func.isRequired,
    location: PropTypes.shape({
        radius: PropTypes.number.isRequired,
        latlng: PropTypes.string.isRequired,
    }).isRequired
}

Location.defaultProps = {
    location: {
        latlng: '',
        radius: 0
    },
}

export default Location
