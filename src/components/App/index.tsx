import React, {ChangeEvent} from 'react'
import {Container} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import AdvancedTab from '../Tabs/AdvancedTab'
import BasicTab from '../Tabs/BasicTab'

const App: React.FC = (): React.ReactElement => {
    const [tabNumber, setTabNumber] = React.useState(0)

    function handleChange(event: ChangeEvent<{}>, newNumber: number): void {
        setTabNumber(newNumber)
    }

    return (
        <Container style={{width: '50%'}}>
            <AppBar position="static">
                <Tabs value={tabNumber} onChange={handleChange} variant="fullWidth">
                    <Tab label="Basic"/>
                    <Tab label="Advanced"/>
                </Tabs>
            </AppBar>
            <Typography component="div" style={{paddingTop: 25}}>
                {tabNumber === 0 && <BasicTab/>}
                {tabNumber === 1 && <AdvancedTab/>}
            </Typography>
        </Container>
    )
}

export default App
