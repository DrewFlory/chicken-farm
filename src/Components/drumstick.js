import React, {Component} from 'react';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent} from 'react-mdl';

class Drum extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
  
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
  
    render() {
      return (
        <div>
          <Button onClick={this.handleOpenDialog} style={{backgroundColor: "white", borderRadius: "20px", marginTop: "5%", border: "1px solid black", boxShadow: "2px 2px 2px black"}}raised ripple>Pricing</Button>
          <Dialog open={this.state.openDialog}>
            <DialogTitle style={{color: 'black'}}>Drumstick</DialogTitle>
            <DialogContent>
              <p>Drumstick!</p>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  export default Drum;