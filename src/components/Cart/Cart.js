import React ,{Component,Fragment} from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import './Cart.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import localStorage from 'local-storage';
import {ToastContainer, ToastStore} from 'react-toasts';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Cart extends Component {
  state = {
   open: false,
   dense: false,
   products:[]
  };
  /**
 * Delete any product seleted in your cart
 * @param  {number}
 */
  deleteProduct(productId){
    let aux=this.state.products;
    for(let i=0;i<aux.length;i++){
      if(aux[i].id===productId){
        aux.splice(i,1);
        ToastStore.success('removed from the cart');
        break;
      }
    }
    this.setState({"products":aux});
    localStorage.set("selectedProducts",aux);
  }
  /**
 * Operation use to sum all sub total for any product
 * @param  {product}
 * @return  {number}
 */
  finalAmount=(products)=>{
    let total=0;
    products.forEach((product,index)=>{
      total += this.amountPerProduct(product);
    })
    return total;
  }
  /**
 * Calculates the amounts of all the products multiplied by their quantity
 * @param  {product}
 * @return  {number}
 */
  amountPerProduct=(product)=>{
    return product.price*product.quantity;
  }
  //open modal and  set open state
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  //close modal and  set close state
  handleClose = () => {
    this.setState({ open: false });
  };
  //this method rendered all products selected previus
  renderSelectedProducts() {
  this.state.products=localStorage.get("selectedProducts");
  return this.state.products.map((product,index) =>{
    return <ListItem key={`selected-product-list${index}`}>
      <ListItemAvatar>
      <Avatar>
      <img src={product.image} alt="Vr" className="productImage"/>
      </Avatar>
      </ListItemAvatar>
      <ListItemText
        secondary={
            <Fragment>
              <Typography component="span" className="inline" color="textPrimary">
              {`${product.name}`}
              </Typography>
                {this.amountPerProduct(product)}
                <Typography component="span" className="inline" color="textPrimary">
                {`No ${product.quantity}`}
                </Typography>
            </Fragment>}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={(e)=>this.deleteProduct(product.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>
  })
}
  render() {
    const { dense } = this.state;
    return (
      <div>
        <IconButton color="inherit" onClick={this.handleClickOpen}>
        <ShoppingCartIcon/>
        </IconButton>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className="appBar">
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className="flex">
              Cart
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="gridMargin">
          <Grid item xs={12} md={6} lg={12}>
            <Typography variant="h5" className="titleTextSize">
            </Typography>
            <div >
              <List dense={dense}>
              {this.renderSelectedProducts()}
              </List>
            </div>
          </Grid>
          <div className="total" >
          <Typography variant="h6" color="inherit" className="flex">
               {`Total:${this.finalAmount(this.state.products)}`}
         </Typography>
          </div>
          </div>
        </Dialog>
        <ToastContainer position={ToastContainer.POSITION.RIGHT} store={ToastStore}></ToastContainer>
      </div>
    );
  }
}
export default Cart;
