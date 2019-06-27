import React from 'react'
import PropTypes from 'prop-types'
import {Typography} from '@material-ui/core'

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = (props: TitleProps): React.ReactElement => {
    return (
        <Typography variant="h5" component="h5">
            {props.text}
        </Typography>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
}

Title.defaultProps = {
    text: '',
}

export default Title
