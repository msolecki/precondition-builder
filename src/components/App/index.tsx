import React, {ChangeEvent, ReactElement} from 'react'
import {Container} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import AdvancedTab from '../Tabs/AdvancedTab'
import BasicTab from '../Tabs/BasicTab'

export interface LocationInterface {
    range: number;
    gps: string;
}

export interface FormDataInterface {
    activated: boolean;
    logged: boolean;
    location: LocationInterface
}

interface StateInterface {
    formData: FormDataInterface;
    tabNumber: number;
}

class App extends React.Component<{}, StateInterface> {
    public constructor(props: {}) {
        super(props)

        this.state = {
            formData: {
                activated: false,
                logged: false,
                location: {
                    range: 0,
                    gps: ''
                },
            },
            tabNumber: 0
        }
    }

    public changeTab = (event: ChangeEvent<{}>, newNumber: number): void => {
        this.setState({tabNumber: newNumber})
    }

    public changeFormData = (newFormData: FormDataInterface): void => {
        this.setState({formData: newFormData})
    }

    public render(): ReactElement {
        const {tabNumber, formData} = this.state

        return (
            <Container style={{width: '50%'}}>
                <AppBar position="static">
                    <Tabs value={tabNumber} onChange={this.changeTab} variant="fullWidth">
                        <Tab label="Basic"/>
                        <Tab label="Advanced"/>
                    </Tabs>
                </AppBar>
                <Typography component="div" style={{paddingTop: 25}}>
                    {tabNumber === 0 && <BasicTab onDataChange={this.changeFormData} data={formData}/>}
                    {tabNumber === 1 && <AdvancedTab data={formData}/>}
                </Typography>
            </Container>
        )
    }
}

export default App
