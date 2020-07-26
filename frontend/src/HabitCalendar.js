import React, { Component } from 'react'
import { Button, SimpleGrid, Box, FormControl, Input, FormLabel } from "@chakra-ui/core";
import Rect from './DayCalendar'
const axios = require('axios').default;

class HabitCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //days: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

            id: props.id,
            title: '',
            description: '',
            numberOfDays: [],
            color: '',
            state: '',
            addedDays: 0,

        }
        this.handleClick = this.handleClick.bind(this)
        this.debug = this.debug.bind(this)
        this.onChange = this.onChange.bind(this)
        this.addDays = this.addDays.bind(this)
        this.closeGoal = this.closeGoal.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/habits/' + this.props.id)
            .then(response => {

                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    numberOfDays: response.data.numberOfDays,
                    color: response.data.color,
                    state: response.data.state
                })


            })
            .catch(function (error) {
                console.log(error);
            })
    }

    addDays() {
        let addedDays = new Array(parseInt(this.state.addedDays)).fill(false)
        let oldDays = this.state.numberOfDays
        let newDays = oldDays.concat(addedDays)
        this.setState({
            numberOfDays: newDays
        })
        console.log(newDays)
        setTimeout(this.debug, 200)

    }
    debug() {

        const habit = {
            title: this.state.title,
            description: this.state.description,
            numberOfDays: this.state.numberOfDays,
            color: this.state.color,
            state: this.state.state

        };

        console.log('habit' + this.state.numberOfDays)
        console.log(habit)

        axios.post('http://localhost:5000/habits/update/' + this.state.id, habit)
            .then(res => console.log(res.data));
    }

    handleClick(e, props) {

        //console.log(this.props.val) accede a props de constructor
        let items = [...this.state.numberOfDays];

        let item = items[props.val];
        console.log(item)
        // 3. Replace the property you're intested in
        item = !item;
        console.log(item)
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        items[props.val] = item;
        // 5. Set the state to our new copy


        this.setState({
            numberOfDays: items

        })



        setTimeout(this.debug, 200)


    }


    onChange(e) {
        this.setState({
            addedDays: e.target.value
        });
        console.log(this.state.addedDays)
    }


    closeGoal(e) {
        this.setState({
            state: 'closed'
        });
        setTimeout(this.debug, 200)
    }
    render() {
        return (
            <Box >
                <SimpleGrid columns='7' maxWidth='350px' margin='auto'>
                    {this.state.numberOfDays.map((day, index) =>
                        day === false ? <Rect key={index} color='white' fun={(e) => this.handleClick(e, { val: index })} text={index + 1} /> : <Rect key={index} color={this.state.color} fun={(e) => this.handleClick(e, { val: index })} text={index + 1} />


                    )}

                </SimpleGrid>
                <Box >
                    <FormControl >
                        <FormLabel htmlFor={this.state.id}>You can add more days to continue the streak</FormLabel>
                        <Input type="text" onChange={this.onChange} id={this.state.id} placeholder='How many days do you want to add?' />
                    </FormControl>
                    <Box marginTop='20px' marginBottom='20px' ><Button onClick={this.addDays} > Add more days </Button></Box>
                    <Button onClick={this.closeGoal}>Close Goal</Button>
                </Box>
            </Box >
        );

    }
}

export default HabitCalendar;