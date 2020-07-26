import React, { Component } from 'react'
import { Box, Text } from "@chakra-ui/core";
import HabitCalendar from './HabitCalendar'
const axios = require('axios').default;


class HabitList extends Component {

    constructor(props) {
        super(props)


        this.state = {
            habits: []

        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/habits/active')
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

                {this.state.habits.map((habits, i) =>
                    <Box key={habits._id}>
                        <Text fontSize='20px' textAlign='center'>{habits.title}</Text>
                        <Text fontSize='15px' textAlign='center'>{habits.description}</Text>
                        <HabitCalendar id={habits._id} />
                    </Box>)}

            </div>



        );
    }

}

export default HabitList;