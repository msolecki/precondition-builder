import React, {ChangeEvent, ReactElement} from 'react'
import {Container} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import AdvancedTab from '../Tabs/AdvancedTab'
import BasicTab from '../Tabs/BasicTab'
import {ConditionInterface} from './interfaces'
import {transform} from '../../dataTransformer'

export interface StateInterface {
    conditions: ConditionInterface[];
    tabNumber: number;
    activated: boolean;
}

class App extends React.Component<{}, StateInterface> {
    public constructor(props: {}) {
        super(props)

        this.state = {
            conditions: [],
            activated: false,
            tabNumber: 0
        }
    }

    private changeTab = (event: ChangeEvent<{}>, newNumber: number): void => {
        this.setState({tabNumber: newNumber})
    }

    private setActivated = (activated: boolean): void => {
        this.setState({activated})
    }

    public handleAddCondition = (newCondition: ConditionInterface): void => {
        const conditions = this.state.conditions
        conditions.push(newCondition)

        this.setState({conditions})
    }

    public render(): ReactElement {
        const {tabNumber, conditions, activated} = this.state

        return (
            <Container style={{width: '50%'}}>
                <AppBar position="static">
                    <Tabs value={tabNumber} onChange={this.changeTab} variant="fullWidth">
                        <Tab label="Basic"/>
                        <Tab label="Advanced"/>
                    </Tabs>
                </AppBar>
                <Typography component="div" style={{paddingTop: 25}}>
                    {tabNumber === 0 && <BasicTab
                        handleAddCondition={this.handleAddCondition}
                        conditions={conditions}
                        activated={activated}
                        handleActivated={this.setActivated}
                    />}
                    {tabNumber === 1 && <AdvancedTab data={transform(conditions, activated)}/>}
                </Typography>
            </Container>
        )
    }
}

export default App
