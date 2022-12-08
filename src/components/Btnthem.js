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
import FormThem from './FormThem';


function Btnthem({addNvienProp ,deleteNvienProp}) {
    const initSTAFFS = STAFFS;

    let [ilist, setList] = React.useState(initSTAFFS);
    const [id,setid] = React.useState('');
    const [name, setname] = React.useState('');
    const [doB, setdoB] = React.useState('');
    const [salaryScale, setHsl] = React.useState('');
    const [startDate, setstartDate] = React.useState('');
    const [department, setdepartment] = React.useState('');
    const [annualLeave, setannualLeave] = React.useState('');
    const [overTime, setoverTime] = React.useState('');
    const [image, setimage] = React.useState('');

    const addNvien = (e) => {addNvienProp({
            id: ilist.length,
            name,
            doB,
            salaryScale,
            startDate,
            department,
            annualLeave,
            overTime,
            image: '/assets/images/alberto.png',
    }); e.preventDefault(); setList(ilist);}

    const deleteNvien = (e) => {deleteNvienProp(); e.preventDefault(); setList(ilist);}
      return(
            <div>
		                    <FormGroup>
                                    Tên <input type="text" id="username" name="username" className="lop5" value={name} onChange={(e) => setname(e.target.value)}/><br/><br/>
                                    Ngày sinh <input type="date" className="lop6" id="nsdate" value={doB} onChange={(e) => setdoB(e.target.value)}/><br/><br/>
                                    Ngày vào công ty <input type="date" className="lop7" id="nvdate" value={startDate} onChange={(e) => setstartDate(e.target.value)}/><br/><br/>
                                    Phòng ban <select className="lop8" value={department} onChange={(e) => setdepartment(e.target.value)}>
                                        <option value="DEPARTMENTS[0]">Sale</option>
                                        <option value="DEPARTMENTS[1]">HR</option>
                                        <option value="DEPARTMENTS[2]">Marketing</option>
                                        <option value="DEPARTMENTS[3]">IT</option>
                                        <option value="DEPARTMENTS[4]">Finance</option>
                                    </select><br/><br/>
                                    Hệ số lương <input type="text" className="lop9" id="hsluong" value={salaryScale} onChange={(e) => setHsl(e.target.value)}/><br/><br/>
                                    Số ngày nghỉ còn lại <input type="text" className="lop10" id="snnghi" value={annualLeave} onChange={(e) => setannualLeave(e.target.value)}/><br/><br/>
                                    Số ngày đã làm thêm <input type="text" className="lop11" id="snlthem" value={overTime} onChange={(e) => setoverTime(e.target.value)}/><br/><br/>
                                <Button type="submit" value="submit" color="primary" onClick={addNvien}> Thêm </Button>
                            </FormGroup>
            </div>
        );
}

export default Btnthem;

