import React,{Component} from 'react';
import classes from './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '../Cart/Cart';
import Badge from '@material-ui/core/Badge';

class Header extends Component{

render(){
	return(
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className="grow">
          ShoppiFast
          </Typography>
					<Badge badgeContent={1} color="secondary">
					<ShoppingCart/>
					 </Badge>
        </Toolbar>
      </AppBar>
    </div>
	)
}
}
export default Header;
