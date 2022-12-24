import React, { Component } from 'react';
import { Link, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { DISHES } from "../shared/dishes"
import { STAFFS } from '../shared/staffs';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function Nvdptchitiet() {
    const {nvdptId} = useParams();

    let initSTAFFS = STAFFS;
    let [ilist, setList] = React.useState([]);
    fetch('https://rjs-101x-asignment-04-backend.vercel.app/staffs')
                    .then(resp => resp.json())
                    .then(jso => {
                        setList(jso);
                    });

    let a = nvdptId;
    let thistsa = ilist.find(nhanvie => nhanvie.departmentId == nvdptId);
    let thists = ilist.filter((nhanvie) => {
        return nhanvie.departmentId.includes(nvdptId);
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

    return(
        <div className='container'>
            <div className="row">
                {thists}
            </div>
        </div>
    );
}

export default Nvdptchitiet;