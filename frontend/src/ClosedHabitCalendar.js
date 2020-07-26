import React, { Component } from 'react'
import { Button, SimpleGrid, Box, FormControl, Input, FormLabel } from "@chakra-ui/core";
import Rect from './DayCalendar'
const axios = require('axios').default;

class ClosedHabitCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {

            //days: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],




        }

        this.nothing = this.nothing.bind(this)

    }







    nothing() {
        return 0
    }


    render() {
        return (
            <div >


                <SimpleGrid columns='7' maxWidth='350px' margin='auto'>
                    {this.props.days.map((day, index) =>
                        day === false ? <Rect key={index} color='white' fun={this.nothing} text={index + 1} /> : <Rect key={index} color={this.props.color} fun={this.nothing} text={index + 1} />


                    )}

                </SimpleGrid>

            </div >
        );

    }
}

export default ClosedHabitCalendar;