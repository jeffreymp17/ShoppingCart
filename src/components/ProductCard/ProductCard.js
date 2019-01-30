  import React,{Component} from 'react';
  import Card from '@material-ui/core/Card';
  import CardActionArea from '@material-ui/core/CardActionArea';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
  import Typography from '@material-ui/core/Typography';
  import Grid from '@material-ui/core/Grid';
  import Fab from '@material-ui/core/Fab';
  import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
  import AddIcon from '@material-ui/icons/Add';
  import RemoveIcon from '@material-ui/icons/Remove';
  import   './ProductCard.css';
  import localStorage from 'local-storage';
  import {ToastContainer, ToastStore} from 'react-toasts';
  var products=[];
  class ProductCard extends Component{
  constructor(){
    super()
    this.state={
      count:0,
      selectedProduct:{},
      products:[]
    }
  }
  /**
 * increment or decrement product quantity
 * @param  {string}
 * @return  {number}
 */
    selectQuantity(buttonType){
          this.setState(prevState => {
          return {count: buttonType === 'add' ? prevState.count + 1: prevState.count - 1}
      })
    }
    /**
   * Get parameters from product and add selected product to current state
   * @param  {product}
   */
    addToCart(image, name, price, id, quantity) {
        this.setState(
          {
            selectedProduct: {
              image,
              name,
              price,
              id,
              quantity
            }
          },
          function () {
            if(localStorage.get("selectedProducts")){
              const local = localStorage.get("selectedProducts")
              local.push(this.state.selectedProduct)
              localStorage.set("selectedProducts",local);
              return
            }
            products.push(this.state.selectedProduct);
            localStorage.set("selectedProducts",products);
            products = [];

          }
        );
        ToastStore.success('added to the cart');
        this.setState({count:0});
      }
    render(){
      const {product}=this.props
      return(
        <Grid item xs={12} sm={4} lg={4} xl={3} className="marginCard" >
         <Card>
           <CardActionArea>
             <CardMedia
             image=""
           title={product.name}>
          <img src={product.image}  alt="cv" width={250} height={230} />
        </CardMedia>
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
        <Fab disabled={this.state.count===0}className="QuantityChangeContainer"  color="primary" aria-label="Add" onClick={this.addToCart.bind(this,product.image,product.name,product.price,product.id,product.quantity+this.state.count)}>
        <ShoppingCartIcon />
        </Fab>
        <Fab   size="small" color="secondary" aria-label="Add"  onClick={this.selectQuantity.bind(this,"add")}>
           <AddIcon />
         </Fab>
         <label  className="quantityText" spacing={8}>{this.state.count}</label>
         <Fab disabled={this.state.count===0} size="small" color="secondary" aria-label="Add"  onClick={this.selectQuantity.bind(this,"des")}>
           <RemoveIcon />
         </Fab>
        <ToastContainer position={ToastContainer.POSITION.RIGHT} store={ToastStore} className="toast-font-color"></ToastContainer>
        </CardActions>
        </Card>
        </Grid>
      )
    }
  }
  export default ProductCard;
