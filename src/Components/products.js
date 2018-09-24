import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Product extends Component {
    render(){
        return(
                <div className = "products">
                    <Grid className="demo-grid-1">
                        <Cell col={4}>
                            <img className="product-img" src="https://fustany.com/images/en/content/header_image_fustany-lifestyle-the_kitchen-roasted_chicken_dressing_recipe-main_image.png"></img>
                        </Cell>
                        <Cell col={4}>
                            <img className="product-img" src="https://mealplannerpro.com/images/recipes/recipes/0/324/324068/713870.jpg"></img>
                        </Cell>
                        <Cell col={4}>
                            <img className="product-img" src="http://picturetherecipe.com/wp-content/uploads/2013/06/Grilled-Beer-Marinated-Chicken-Drumsticks-by-PictureTheRecipe.jpg"></img>
                        </Cell>
                    </Grid>

                    <Grid className="demo-grid-2">
                        <Cell col={4}>
                            <img className="product-img" src="https://grillgirl.com/wp-content/uploads/2011/05/DSC_0858-1280x640.jpg"></img>
                        </Cell>
                        <Cell col={4}>
                            <img className="product-img" src="https://www.tasteofhome.com/wp-content/uploads/2017/10/Grilled-Barbecued-Chicken_exps24848_UGG143377C01_23_3bC_RMS-696x696.jpg"></img>
                        </Cell>
                        <Cell col={4}>
                            <img className="product-img" src="http://2.bp.blogspot.com/_VKAtSAnv1yU/TBxdzksFP7I/AAAAAAAAC9I/G8YJ-xJNC28/s1600/blogger194.JPG"></img>
                        </Cell>
                    </Grid>
                </div>
            )
    }
        
}

export default Product;