import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
    <div>
      <Navbar dark expand="md">
          <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavbarBrand className="nav-link" href="/"><img src='assets/images/logo.png' height="30" width="40" /></NavbarBrand>
                            <NavItem>
                                <NavLink className="nav-link"  to='/nhanvien'><img src='assets/images/nhanvien.png' height="30" width="40" /> Nhân Viên </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/phongban'><img src='assets/images/phongban.png' height="30" width="40" /> Phòng Ban </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/bangluong'><img src='assets/images/bangluong.png' height="30" width="40" /> Bảng Lương </NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
          </div>
      </Navbar>
    </div>
    );
  }
}
export default Header;
