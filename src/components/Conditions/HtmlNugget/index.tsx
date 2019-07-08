import React, {ChangeEvent} from 'react'
import PropTypes from 'prop-types'
import Title from '../../Title'
import FormControl from '@material-ui/core/FormControl'
import {makeStyles} from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Autocomplete from '../../Autocomplete'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import {NuggetConditionInterface} from '../../App/interfaces'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(({spacing}) => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    formControl: {
        marginTop: spacing(1),
        marginBottom: spacing(3),
        minWidth: 120,
    },
    formControlWithoutMargin: {
        minWidth: 120,
    },
}))

interface HtmlNuggetProps {
    addNugget(value: NuggetConditionInterface): void;

    ids: string[];
}

const HtmlNugget: React.FC<HtmlNuggetProps> = (props: HtmlNuggetProps): React.ReactElement => {
    const classes = useStyles()

    const [id, setId] = React.useState<string | null>(null)
    const [conditionValue, setConditionValue] = React.useState<number | null>(null)

    function addNuggetHandle(id, condition, value): void {
        if (id && value !== null) {
            props.addNugget({
                id: id.toString(),
                condition: condition,
                value: Boolean(value)
            })
        }
    }

    function handleValueChange(event: ChangeEvent<{}>): void {
        const {value} = event.target as HTMLInputElement

        setConditionValue(Number(value))

        addNuggetHandle(id, 'read', value)
    }

    function handleIdChange(id: string): void {
        setId(id)

        addNuggetHandle(id, 'read', conditionValue)
    }

    return (
        <>
            <Title text="HTMLNugget"/>
            <FormControl fullWidth required className={classes.formControl} component='div'>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Autocomplete data={props.ids} selectedData={id} handleChange={handleIdChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth required className={classes.formControlWithoutMargin} component='div'>
                            <InputLabel htmlFor="nuggetCondition">Condition</InputLabel>
                            <Select
                                value={'read'}
                                displayEmpty
                                fullWidth
                                inputProps={{
                                    name: 'nuggetCondition',
                                    id: 'nuggetCondition',
                                }}
                            >
                                <MenuItem component='li' button={true} value={'read'}>Read</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth required className={classes.formControlWithoutMargin} component='div'>
                            <InputLabel htmlFor="nuggetAccessValue">Value</InputLabel>
                            <Select
                                value={conditionValue === null ? '' : Number(conditionValue)}
                                displayEmpty
                                fullWidth
                                onChange={handleValueChange}
                                inputProps={{
                                    name: 'nuggetAccessValue',
                                    id: 'nuggetAccessValue',
                                }}
                            >
                                <MenuItem component='li' button={true} value={1}>True</MenuItem>
                                <MenuItem component='li' button={true} value={0}>False</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </FormControl>
        </>
    )
}

HtmlNugget.propTypes = {
    addNugget: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
}

HtmlNugget.defaultProps = {
    ids: []
}

export default HtmlNugget
