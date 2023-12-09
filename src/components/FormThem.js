import React, { Component, useState, setState } from 'react';
import { Link, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { DISHES } from "../shared/dishes"
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {STAFFS , DEPARTMENTS} from '../shared/staffs';
import StaffList from './StaffListComponent';
import DptList from './DptListComponent';

class FormThem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }


    render (){
        if(this.props.show == false) return null;
        return(
            <Modal isOpen={true}  >
            <ModalHeader ><b>Thêm Nhân Viên</b></ModalHeader>
            <ModalBody>
                <Form >
		<FormGroup>
                        Tên <input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} className="lop5"/><br/><br/>
                        Ngày sinh <input type="date" className="lop6" id="nsdate" innerRef={(input) => this.nsdate = input}/><br/><br/>
                        Ngày vào công ty <input type="date" className="lop7" id="nvdate" innerRef={(input) => this.nvdate = input}/><br/><br/>
                        Phòng ban <select className="lop8">
                            <option value="DEPARTMENTS[0]">Sale</option>
                            <option value="DEPARTMENTS[1]">HR</option>
                            <option value="DEPARTMENTS[2]">Marketing</option>
                            <option value="DEPARTMENTS[3]">IT</option>
                            <option value="DEPARTMENTS[4]">Finance</option>
                        </select><br/><br/>
                        Hệ số lương <input type="text" className="lop9" id="hsluong"/><br/><br/>
                        Số ngày nghỉ còn lại <input type="text" className="lop10" id="snnghi"/><br/><br/>
                        Số ngày đã làm thêm <input type="text" className="lop11" id="snlthem"/><br/><br/>
                    <Button type="submit" value="submit" color="primary" > Thêm </Button>
		</FormGroup>
                </Form>
                </ModalBody>
            </Modal>

        );
    };
}

export default FormThem;
