import React, {Component} from 'react';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent} from 'react-mdl';

class Thigh extends Component {
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
          <Button onClick={this.handleOpenDialog} style={{backgroundColor: "white", borderRadius: "20px", marginLeft: "25%", marginTop: "5%"}}raised ripple>Pricing</Button>
          <Dialog open={this.state.openDialog}>
            <DialogTitle>Allow data collection?</DialogTitle>
            <DialogContent>
              <p>Allowing us to collect data will let us get you the information you want faster.</p>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  export default Thigh;