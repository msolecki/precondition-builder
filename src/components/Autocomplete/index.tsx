import React, {ChangeEvent} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Downshift from 'downshift'
import deburr from 'lodash.deburr'
import {makeStyles} from '@material-ui/core'

export interface AutocompleteProps {
    handleChange(value: string): void;

    data: string[];
    selectedData: string | null;
}

const useStyles = makeStyles(({spacing}) => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: spacing(1),
        left: 0,
        right: 0,
    },
    chip: {
        margin: spacing(0.5, 0.25),
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
    inputInput: {
        width: 'auto',
        flexGrow: 1,
    },
    formControlWithoutMargin: {
        marginTop: spacing(1),
        marginBottom: spacing(3),
        minWidth: 120,
    },
}))

const Autocomplete: React.FC<AutocompleteProps> = (props: AutocompleteProps): React.ReactElement => {
    const classes = useStyles()

    function renderInput(inputProps): React.ReactElement {
        const {InputProps, classes, ref, ...other} = inputProps

        return (
            <TextField
                InputProps={{
                    inputRef: ref,
                    classes: {
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    },
                    ...InputProps,
                }}
                {...other}
            />
        )
    }

    function getSuggestions(value): string[] {
        const inputValue = deburr(value).toLowerCase()
        const inputLength = inputValue.length

        return props.data.filter((id): boolean => id.slice(0, inputLength).toLowerCase() === inputValue).slice(0, 5)
    }

    function renderSuggestion(suggestionProps): React.ReactElement {
        const {nuggetId, index, itemProps, highlightedIndex, selectedItem} = suggestionProps
        const isHighlighted = highlightedIndex === index
        const isSelected = (selectedItem || '').indexOf(nuggetId) > -1

        return (
            <MenuItem
                {...itemProps}
                key={nuggetId}
                selected={isHighlighted}
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}
            >
                {nuggetId}
            </MenuItem>
        )
    }

    function handleChange(changes): void {
        if (changes.hasOwnProperty('inputValue')) {
            props.handleChange(changes.inputValue.toString())
        }
    }

    return (
        <Downshift initialSelectedItem={props.selectedData} onStateChange={handleChange}>
            {({clearSelection, getInputProps, getItemProps, getLabelProps, getMenuProps, highlightedIndex, inputValue, isOpen, openMenu, selectedItem}): React.ReactElement => {
                const onChangeData = (event: ChangeEvent<HTMLInputElement>): void => {
                    if (event.target.value === '') {
                        clearSelection()
                    }
                }

                const {onBlur, onChange, onFocus, ...inputProps} = getInputProps({
                    onChange: onChangeData,
                    onFocus: openMenu,
                    placeholder: 'Start typing',
                })


                const suggestions = getSuggestions(inputValue)

                return (
                    <div className={classes.container}>
                        {renderInput({
                            fullWidth: true,
                            classes,
                            label: 'HTML Nugget ID',
                            InputLabelProps: getLabelProps(),
                            InputProps: {onBlur, onChange, onFocus},
                            inputProps,
                        })}

                        <div {...getMenuProps()}>
                            {isOpen &&
                            <Paper className={classes.paper} square>
                                {suggestions.map((nuggetId, index): React.ReactElement =>
                                    renderSuggestion({
                                        nuggetId,
                                        index,
                                        itemProps: getItemProps({item: nuggetId}),
                                        highlightedIndex,
                                        selectedItem,
                                    }),
                                )}
                            </Paper>
                            }
                        </div>
                    </div>
                )
            }}
        </Downshift>
    )
}

Autocomplete.propTypes = {
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    selectedData: PropTypes.string,
}

Autocomplete.defaultProps = {
    data: [],
    selectedData: null
}

export default Autocomplete
