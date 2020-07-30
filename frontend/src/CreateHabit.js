import React, { Component } from 'react'
import { Box, FormControl, FormLabel, Input, Button, Flex, Text } from "@chakra-ui/core";


const axios = require('axios').default;
class CreateHabit extends Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.selectColor = this.selectColor.bind(this)

        this.state = {
            title: '',
            description: '',
            startingDay: 0,
            numberOfDays: 0,
            color: '#B794F4',
            state: 'active',

        }

    }
    onChange(e, val) {
        this.setState({
            [val]: e.target.value
        });


    }

    selectColor(e, val) {
        this.setState({
            color: val,

        })



        console.log(val)
    }

    onSubmit(e) {

        e.preventDefault();
        // const today = new Date()
        // const day = today.getDate()
        // const month = today.getMonth()
        //const year = today.getFullYear()
        //const daysInMonth = new Date(year, month + 1, 0).getDate()


        const habit = {
            title: this.state.title,
            description: this.state.description,
            numberOfDays: new Array(parseInt(this.state.numberOfDays)).fill(false),
            color: this.state.color,
            state: this.state.state,
        }


        axios.post('http://localhost:5000/habits/add', habit)
            .then(res => console.log(res.data));
    }





    render() {
        return (
            <Box p='10px'>
                <FormControl >
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input id="title" value={this.state.title} onChange={(e) => this.onChange(e, "title")} />

                </FormControl>

                <FormControl>
                    <FormLabel htmlFor='description'>Description</FormLabel>
                    <Input id="description" value={this.state.description} onChange={(e) => this.onChange(e, "description")} />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor='numberOfDays'>Days</FormLabel>
                    <Input type='number' id="numberOfDays" onChange={(e) => this.onChange(e, "numberOfDays")} />
                </FormControl>

                <Flex marginTop='15px' marginBottom='15px' flexDirection='row' justify='space-around'>
                    <Box width='20px' height='20px' rounded='50%' bg='#63B3ED' value='#63B3ED' onClick={(e) => this.selectColor(e, '#63B3ED')}></Box>
                    <Box width='20px' height='20px' rounded='50%' bg='#4FD1C5' value='#4FD1C5' onClick={(e) => this.selectColor(e, '#4FD1C5')}></Box>
                    <Box width='20px' height='20px' rounded='50%' bg='#F687B3' value='#F687B3' onClick={(e) => this.selectColor(e, '#F687B3')}></Box>
                    <Box width='20px' height='20px' rounded='50%' bg='#F6AD55' value='#F6AD55' onClick={(e) => this.selectColor(e, '#F6AD55')}></Box>
                    <Box width='20px' height='20px' rounded='50%' bg='#B794F4' value='#B794F4' onClick={(e) => this.selectColor(e, '#B794F4')}></Box>

                </Flex>
                <Text textAlign='center'>Example</Text>
                <Box bg={this.state.color} border='1px' w='50px' h='50px' margin='auto' ><Text >1</Text></Box>
                <Button marginTop='10px' type='submit' onClick={this.onSubmit}>Submit</Button>




            </Box>
        );
    }


}

export default CreateHabit;