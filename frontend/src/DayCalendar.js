import React, { Component } from 'react'
import { Box } from "@chakra-ui/core";

class Rect extends Component {







    render() {
        return (
            <Box bg={this.props.color} border='1px' onClick={this.props.fun} maxW='50px' height='50px'>
                {this.props.text}
            </Box>
        );
    }


}

export default Rect;