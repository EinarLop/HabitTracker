import React, { Component } from 'react'
import { Box, Icon } from "@chakra-ui/core";
import { Link } from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }

    }

    render() {
        return (
            <Box bg='tomato'>
                <Icon name='sun' />
                <Link to='/'>Current Goals</Link>
                <Link to='/createGoal'>Create Goal</Link>

                <Link to='/closed'>Closed Goals</Link>
            </Box>
        )
    }
}

export default Navbar;