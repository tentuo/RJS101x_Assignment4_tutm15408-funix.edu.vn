import { render } from "@testing-library/react";
import React, { Component, useState, useEffect } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Btnthem from './Btnthem';
import SearchStaff from './SearchStaff';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Modal, ModalHeader, ModalBody} from 'reactstrap';
import DptList from "./DptListComponent";


function StaffList() {
    

    let initSTAFFS = STAFFS;
    let [ilist, setList] = React.useState(initSTAFFS);
    const addNvien = (nvien) => {setList([...ilist,nvien]); toggleModal();}

    const deleteNvien = nvien => {setList(ilist.filter(nvi => nvi.id !== nvien.id))}

    const [id,setid] = React.useState('');
    const [name, setname] = React.useState('');
    const [doB, setdoB] = React.useState('');
    const [salaryScale, setHsl] = React.useState('');
    const [startDate, setstartDate] = React.useState('');
    const [department, setdepartment] = React.useState('');
    const [annualLeave, setannualLeave] = React.useState('');
    const [overTime, setoverTime] = React.useState('');
    const [image, setimage] = React.useState('');


    const [search,setSearch] = useState('');
    const menu = ilist.filter((dih) => {
        return search == ''
        ? dih
        :dih.name.includes(search);
    }).map((dih) => {
        return (
            <Card key={dih.id}>
                <Link to={`/nhanvien/${dih.id}`}>
                <CardImg src={dih.image} height="160" width="10" />
                <CardText> {dih.name}</CardText>
                </Link>
            </Card>
        );
    });

      const [isModalOpen, setModal] = React.useState(false);
      function toggleModal() {
          if(isModalOpen) { setModal(false);}
          else setModal(true);

      }
    
      function changename(event){
        setname(event.target.value);
      }
      function changedoB(event){
        setdoB(event.target.value);
      }
      function changeHsl(event){
        setHsl(event.target.value);
      }
      function changestartDate(event){
        setstartDate(event.target.value);
      }
      function changedepartment(event){
        setdepartment(event.target.value);
      }
      function changeannualLeave(event){
        setannualLeave(event.target.value);
      }
      function changeoverTime(event){
        setoverTime(event.target.value);
      }

      function handleAdd(e) {
        toggleModal();
        e.preventDefault();
        alert("Username: " + this.username.value + " Password: " );
      }

        return (
            <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhanvien"><h4 style={{color: "black",}}> Nhân Viên </h4></Link></BreadcrumbItem>
                        <Button outline onClick={toggleModal} className="lop1" > + </Button>
                            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                            <ModalHeader ><b>Thêm Nhân Viên</b><Button onClick={toggleModal} className="lopcss12" > x </Button></ModalHeader>
                            <ModalBody>
                            <Form>
                              <Btnthem addNvienProp = {addNvien} deleteNvienProp = {deleteNvien} />
                            </Form>
                            </ModalBody>
                            </Modal>
                        <Input type="text" id="tim" className="lop2" onChange={(e) => setSearch(e.target.value)}></Input>
                        <Button className="lop3" >Tìm</Button>
                    </Breadcrumb>
                <div className="row">
                    {ilist.filter((dih) => {
                        return search == ''
                        ? dih
                        :dih.name.includes(search);
                        }).map((dih) => {
                            return(
                            <Card key={dih.id}>
                                <Link to={`/nhanvien/${dih.id}`}>
                                <CardImg src={dih.image} height="160" width="10" />
                                <CardText> {dih.name}</CardText>
                                </Link>
                            </Card>)
                    })}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                  
                  </div>
                </div>
            </div>
        );

};


export default StaffList;