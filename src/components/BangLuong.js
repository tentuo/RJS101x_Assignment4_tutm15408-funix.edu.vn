import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { STAFFS } from "../shared/staffs";

class BangLuong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            items: [],
        }
    }
    
    componentDidMount(){

    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
    RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={'/menu/${dish.id}'} >
                    <CardImg width="50%" src={dish.image} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    render() {
        fetch(
            'https://rjs-101x-asignment-04-backend.vercel.app/staffsSalary')
                        .then((res) => res.json())
                        .then(jso => {
                            this.setState({
                               items: jso,
                            });
                        })
        const bangluong = this.state.items.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <div>
                            <CardTitle><h4><b>{dish.name}</b></h4></CardTitle>
                            <CardTitle>Mã nhân viên: {dish.id} </CardTitle>
                            <CardTitle>Hệ số lương: {dish.salaryScale} </CardTitle>
                            <CardTitle>Số ngày làm thêm: {dish.annualLeave} </CardTitle>
                            <CardTitle>Lương: {dish.salary} </CardTitle>
                        </div>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhanvien">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                    </Breadcrumb>                
                </div>
                <div className="row">
                        {bangluong}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">

                  </div>
                </div>
            </div>
        );
    }

    
}
export default BangLuong;