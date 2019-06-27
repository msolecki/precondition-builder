import React, {ChangeEvent} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

interface ActivatedInterface {
    value: number;
}

const Activated: React.FC = (): React.ReactElement => {
    const classes = useStyles()
    const [values, setValues] = React.useState<ActivatedInterface>({
        value: 0,
    })

    function handleChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLSelectElement

        setValues((oldValues): ActivatedInterface => ({
            ...oldValues,
            'value': parseInt(value),
        }))
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl} fullWidth required component='div'>
                <InputLabel htmlFor="activated" required>Activated</InputLabel>
                <Select
                    required
                    value={values.value}
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

export default Activated
