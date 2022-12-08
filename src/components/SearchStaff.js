import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Btnthem from './Btnthem';


function SearchStaff() {

    const [search,setSearch] = useState('');

    const menu = STAFFS.filter((dih) => {
        return this.props.menusearch == ''
        ? dih
        :dih.name.includes(this.props.menusearch);
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

    const hienthitim = () => {

        <SearchStaff menusearch={search} />
        }

        return (
            <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhanvien"><h4 style={{color: "black",}}> Nhân Viên </h4></Link></BreadcrumbItem>
                        <Btnthem />
                        <Input type="text" id="tim" className="lop2" onChange={(e) => setSearch(e.target.value)}></Input>
                        <Button className="lop3" onClick={hienthitim}>Tìm</Button>
                    </Breadcrumb>
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                  
                  </div>
                </div>
            </div>
        );

};

export default SearchStaff;
