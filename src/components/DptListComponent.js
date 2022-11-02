import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DptList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
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
        const menu = this.props.dish.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardText><h4><b> {dish.name} </b></h4></CardText>
                        <CardText>Số lượng nhân viên: {dish.numberOfStaff} </CardText>
                    </Card>
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
