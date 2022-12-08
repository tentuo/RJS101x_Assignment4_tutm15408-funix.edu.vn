import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, Routes } from 'react-router-dom';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import About from './AboutComponent';
import StaffList from './StaffListComponent';
import DptList from './DptListComponent';
import BangLuong from './BangLuong';
import Nvchitiet from './Nvchitiet';
import Btnthem from './Btnthem';
import Header1 from './HeaderComponent1';
import Footer1 from './FooterComponent1';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

    return (
      <div>
        <Header/>
          <Switch>
                <Route exact path='/'>
                  <Header1 />
                  <StaffList st={STAFFS}/>
                  <Footer1 />
                </Route>
                <Route exact path='/nhanvien'>
                  <Header1 />
                  <StaffList staf={STAFFS}/>
                  <Footer1 />
                </Route>
                <Route exact path='/phongban'>
                  <Header1 />
                  <DptList />
                  <Footer1 />
                </Route>
                <Route exact path='/nhanvien/:nvId'>
                  <Header1 />
                  <Nvchitiet />
                  <Footer1 />
                </Route>
                <Route exact path='/bangluong'>
                  <Header1 />
                  <BangLuong dish={this.state.staff} onClick={(dishId) => this.onDishSelect(dishId)} />
                  <Footer1 />
                </Route>
          </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;
