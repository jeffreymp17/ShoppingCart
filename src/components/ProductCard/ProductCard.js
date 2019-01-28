import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import classes from './ProductCard.css';
import localStorage from 'local-storage';
var products=[];
class ProductCard extends Component{
constructor(){
  super()
  this.state={
    count:0,
    selectedProduct:{}
  }
}
  selectQuantity(buttonType){
        this.setState(prevState => {
        return {count: buttonType == 'add' ? prevState.count + 1: prevState.count - 1}
    })
  }
  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity
        }
      },
      function () {
        products.push(this.state.selectedProduct);
        localStorage.set("selectedProducts",products);
        console.log(localStorage.get("selectedProducts"));

      }
    );

  }
  render(){
    console.log(this.props);
    const {product}=this.props
    return(
      <Grid item xs={12} sm={4} lg={4} xl={3} className="marginCard" >
      <Card >
      <CardActionArea>
      <CardMedia

      title={product.name}
      />
      <img src={product.image} width={250} height={230}/>
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2" className="ProductName">
      {product.name}
      </Typography>
      <Typography gutterBottom variant="h6" component="h2">
      {product.description}
      </Typography>
      <Typography component="p">
      {`$${product.price}`}
      </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions >
      <Fab disabled={this.state.count==0}className="QuantityChangeContainer"  color="primary" aria-label="Add" onClick={this.addToCart.bind(this,product.image,product.name,product.price,product.id,product.quantity+this.state.count)}>
      <ShoppingCartIcon />
      </Fab>
      <Fab  size="small" color="secondary" aria-label="Add"  onClick={this.selectQuantity.bind(this,"add")}>
         <AddIcon />
       </Fab>
       <label className="quantityText" spacing={8}>{this.state.count}</label>
       <Fab disabled={this.state.count==0} size="small" color="secondary" aria-label="Add"  onClick={this.selectQuantity.bind(this,"des")}>
         <RemoveIcon />
       </Fab>
      </CardActions>
      </Card>
      </Grid>
    )
  }
}
export default ProductCard;
