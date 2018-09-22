import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <Grid className="demo-grid-2">
                <Cell col={6}>6</Cell>
                <Cell col={4}>4</Cell>
                <Cell col={2}>2</Cell>
            </Grid>
            )
    }
        
}

export default Landing;