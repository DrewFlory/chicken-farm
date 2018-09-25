import React, {Component} from 'react';

class Mission extends Component {
    render(){
        return(
                <div className = "mission-grid">

                    <div className = "mission-body">
                        <h1>About Us</h1>
                            <div className = "mission-statement">
                                <p>
                                    Providing a fresh and healthy food source to local customers right here in Haiti. Our chicken are of the
                                    highest quality, flavorful, and 100% fresh (NO FREEZING). We hand process our fresh chicken one at a time
                                    with attention to detail. Our chicken is as good at is gets! We are dedicated to providing quality poultry 
                                    and exceptional service to all of our customers.
                                </p>
                                <hr></hr>
                                <p>
                                    Here at Rose's Chicken Farm Inc. we adopted a series of undertakings which are shown in our day to day operations,
                                    and are defined through the following aspects:
                                    <ul style={{listStyleType: "none", fontSize: '16px'}}>
                                        <li>Food Safety</li>
                                        <li>Customer Service</li>
                                        <li>Teamwork</li>
                                        <li>Commitment</li>
                                        <li>Respect</li>
                                    </ul>   
                                </p>
                            </div>
                    </div>
                </div>
            )
    }
        
}

export default Mission;