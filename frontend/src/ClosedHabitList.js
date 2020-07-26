import React, { Component } from 'react'
import { Box, Text } from "@chakra-ui/core";
import ClosedHabitCalendar from './ClosedHabitCalendar'
const axios = require('axios').default;


class ClosedHabitList extends Component {

    constructor(props) {
        super(props)


        this.state = {
            habits: []

        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/habits/closed')
            .then(response => {

                this.setState({ habits: response.data });


            })
            .catch((error) => {
                console.log(error);
            })

    }
    render() {
        return (



            <div>
                hola
                {this.state.habits.map((habits, i) =>
                    <Box key={habits._id}>

                        <Text fontSize='20px' textAlign='center'>{habits.title}</Text>
                        <Text fontSize='15px' textAlign='center'>{habits.description}</Text>
                        <ClosedHabitCalendar days={habits.numberOfDays} color={habits.color} />
                    </Box>)}

            </div>



        );
    }

}

export default ClosedHabitList;