import React,{Component} from 'react';
import  './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Cart from '../Cart/Cart';
import Badge from '@material-ui/core/Badge';

class Header extends Component{

render(){
	return(
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className="grow">
          Shoppig Cart
          </Typography>
					<Cart/>		
        </Toolbar>
      </AppBar>
    </div>
	)
}
}
export default Header;
