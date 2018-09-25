import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Whole from './whole';
import Leg from './leg';
import Drum from './drumstick';
import Thigh from './thigh';
import Breast from './breast';
import Wings from './wings';


class Product extends Component {
        
    render(){
        return(
            
                <div className = "products-grid">
                    <h1>Our Products</h1>
                    <Grid className="demo-grid-1">
                        <Cell col={4}>
                        <div className="product-card">
                            <h4>Whole</h4>
                            <img className="product-img" src="https://fustany.com/images/en/content/header_image_fustany-lifestyle-the_kitchen-roasted_chicken_dressing_recipe-main_image.png"></img>
                            <Whole />
                        </div>
                        </Cell>
                        <Cell col={4}>
                        <div className="product-card">
                            <h4>Leg Quarters</h4>
                            <img className="product-img" src="https://mealplannerpro.com/images/recipes/recipes/0/324/324068/713870.jpg"></img>
                            <Leg />
                        </div>
                        </Cell>
                        <Cell col={4}>
                        <div className="product-card">
                            <h4>Drumstick</h4>
                            <img className="product-img" src="http://picturetherecipe.com/wp-content/uploads/2013/06/Grilled-Beer-Marinated-Chicken-Drumsticks-by-PictureTheRecipe.jpg"></img>
                            <Drum />
                        </div>
                        </Cell>
                    </Grid>

                    <Grid className="demo-grid-2">
                    <Cell col={4}>
                    <div className="product-card">
                            <h4>Thigh</h4>
                            <img className="product-img" src="https://grillgirl.com/wp-content/uploads/2011/05/DSC_0858-1280x640.jpg"></img>
                            <Thigh />
                    </div>
                    </Cell>
                        <Cell col={4}>
                        <div className="product-card">
                            <h4>Boneless Breast</h4>
                            <img className="product-img" src="https://www.tasteofhome.com/wp-content/uploads/2017/10/Grilled-Barbecued-Chicken_exps24848_UGG143377C01_23_3bC_RMS-696x696.jpg"></img>
                            <Breast />
                        </div>
                        </Cell>
                        <Cell col={4}>
                        <div className="product-card">
                            <h4>Whole Wing</h4>
                            <img className="product-img" src="http://2.bp.blogspot.com/_VKAtSAnv1yU/TBxdzksFP7I/AAAAAAAAC9I/G8YJ-xJNC28/s1600/blogger194.JPG"></img>
                            <Wings />
                        </div>
                        </Cell>
                    </Grid>
                </div>
            )
    }
    
}

export default Product;