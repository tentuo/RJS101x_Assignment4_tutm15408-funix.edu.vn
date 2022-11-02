import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import About from './AboutComponent';
import StaffList from './StaffListComponent';
import DptList from './DptListComponent';
import BangLuong from './BangLuong';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        staff: STAFFS,
        dpt: DEPARTMENTS,
        selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes}
              promotion={this.state.promotions}
              leader={this.state.leaders}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const StaffWithId = ({match}) => {
      return( 
          <StaffList dish={this.state.staff((dish) => dish.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/nhanvien' component={() => <StaffList dish={this.state.staff}/>} />
              <Route path='/nhanvien/:dishId' component={StaffWithId} />
              <Route exact path='/phongban' component={() => <DptList dish={this.state.dpt}/>} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/bangluong' component={() => <BangLuong dish={this.state.staff} onClick={(dishId) => this.onDishSelect(dishId)} />} />
              <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;

