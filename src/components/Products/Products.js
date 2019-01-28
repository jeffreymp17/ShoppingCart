import React,{Component} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Grid from '@material-ui/core/Grid';
import {Data as products} from  '../../Utils/Data'
class Product extends Component{
  render(){
    return(
      <Grid container spacing={8}> {
        products.map((item,index)=>{
          return <ProductCard product={item} key={`product-list-key${index}`}/>})}
      </Grid>
    )
  }
}
export default Product;
