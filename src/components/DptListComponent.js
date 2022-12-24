import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import Nvdptchitiet from './Nvdptchitiet';
import { Link } from 'react-router-dom';

class DptList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            items: [],
        }
    }
    
    componentDidMount(){
        console.log('menu component constructor isvold');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDpt(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardBody>
                      <CardText><b> {dish.name} </b></CardText>
                      <CardText>Số lượng nhân viên: {dish.numberOfStaff} </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
    render() {
        fetch(
            'https://rjs-101x-asignment-04-backend.vercel.app/departments')
                        .then((res) => res.json())
                        .then(jso => {
                            this.setState({
                               items: jso,
                            });
                        })

        const menu = this.state.items.map((dih) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <div key={dih.id} >
                        <Link to={`/phongban/${dih.id}`} style={{color: "black",}}>
                        <p ><h4 ><b> {dih.name} </b></h4></p>
                        <p >Số lượng nhân viên: {dih.numberOfStaff} </p>
                        </Link>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    
                  </div>
                </div>
            </div>
        );
    }

};

export default DptList;
