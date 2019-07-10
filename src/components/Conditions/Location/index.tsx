import React, {ChangeEvent} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import {Input} from '@material-ui/core'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
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
    formControlWithoutMargin: {
        marginTop: spacing(1),
        minWidth: 120,
    },
}))

export interface LocationProps {
    setRadius(value: number): void;

    setLatLng(value: string): void;

    radius: number | null;
    latLng: string | null;
}

const Location: React.FC<LocationProps> = (props: LocationProps): React.ReactElement => {
    const classes = useStyles()
    const [latLngError, setLatLngError] = React.useState<boolean>(false)

    function handleRadiusChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLInputElement

        props.setRadius(Number(value))
    }

    function isValidatedLatLangFormat(value: string): boolean {
        return /^@([-+]?\d{1,2}[.]\d+),([-+]?\d{1,2}[.]\d+)$/.test(value)
    }

    function handleLatLangChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLInputElement
        const validated = isValidatedLatLangFormat(value)

        setLatLngError(!validated)

        props.setLatLng(value)
    }

    return (
        <>
            <Title text="Location"/>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth required className={classes.formControlWithoutMargin} component='div'>
                        <InputLabel htmlFor="location-radius">Radius</InputLabel>
                        <Input
                            id="location-radius"
                            placeholder={'0'}
                            type='number'
                            value={Number(props.radius) || ''}
                            onChange={handleRadiusChange}
                            endAdornment={<InputAdornment position="end">m</InputAdornment>}
                            inputProps={{min: 5, max: 10000, step: 1}}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth required className={classes.formControl} component='div'>
                        <InputLabel htmlFor="location-latlng" error={latLngError}>GPS</InputLabel>
                        <Input
                            id="location-gps"
                            value={props.latLng || ''}
                            placeholder={'@52.13,13.45'}
                            onChange={handleLatLangChange}
                            error={latLngError}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
}

Location.propTypes = {
    setRadius: PropTypes.func.isRequired,
    setLatLng: PropTypes.func.isRequired,

    radius: PropTypes.number,
    latLng: PropTypes.string,
}

Location.defaultProps = {
    radius: null,
    latLng: null,
}

export default Location
