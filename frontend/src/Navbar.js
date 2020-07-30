import React, { Component } from 'react'
import { Box, Icon, Flex } from "@chakra-ui/core";
import { Link, NavLink } from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }

        this.changeBackground = this.changeBackground.bind(this)
        this.changeBackground2 = this.changeBackground2.bind(this)

    }

    changeBackground(e) {
        e.target.style.textDecoration = 'underline';
    }
    changeBackground2(e) {
        e.target.style.textDecoration = 'none';
    }

    render() {
        return (
            <Flex justify='flex-start' bg='white' >
                <Box margin='10px'><Icon color='#F6AD55' size='25px ' name='sun' /></Box>
                <Box margin='10px' ><Link to='/' onMouseEnter={this.changeBackground} onMouseLeave={this.changeBackground2}  >Current Goals</Link></Box>
                <Box margin='10px'><Link to='/createGoal' onMouseEnter={this.changeBackground} onMouseLeave={this.changeBackground2} >Create Goal</Link></Box>
                <Box margin='10px'><Link to='/closed' onsele onMouseEnter={this.changeBackground} onMouseLeave={this.changeBackground2} >Closed Goals</Link></Box>






            </Flex>
        )
    }
}

export default Navbar;