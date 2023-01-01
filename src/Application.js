import './bootstrap.css'
import './styles.css'
import { Col, Container, Nav, Row} from "react-bootstrap";
import React from "react"
import {Form1, Form2, Form3, Form4, Form5, Form6} from "./Form";
import {Accordions, Badges, BreadCrumbs, Buttons, ButtonsGroup, MyAlert} from "./Component1";
import {Cards, Carousels, CloseButtons, Dropdowns, Figures, Images} from "./Component2";
import {ListGroups, Modals, NavBars, Navs, Offcanvases} from "./Component3";
import {Overlays, Paginations, PlaceHolders, Popovers, Progresses} from "./Component4";
import {Spinners, Tables, Tabses, Toasts, Tooltips} from "./Component5";


let trainingSet = ["Form", "Component1", "Component2", "Component3", "Component4", "Component5"]



class Application extends React.Component {
    height;


    constructor(props) {
        super(props);
        this.state = {navHeight: "300px", active: 2}
        this.setNavHeight = this.setNavHeight.bind(this)

    }

    setNavHeight(h) {
        document.documentElement.style.setProperty('--calcNav'
            , 'calc( 100%  - ' + h + '  ) ');

        this.setState(s => s.navHeight = h)

    }

    setActive(act) {
        this.setState(s => s.active = act)
    }

    render() {

        return (
            <Container fluid={true} className="bg-dark position-fixed  vh-100 overflow-y-hidden d-flex flex-column">

                <Appbar active={this.active} setActive={h => this.setActive(h)} setNav={this.setNavHeight}></Appbar>
                <div className={"h-automatic"}>
                    <Row className="h-100 ">
                        <SideBar></SideBar>
                        <Col xs={12} lg={10} className="h-100  ">
                            <Row className="h-100 h-100 overflow-y-scroll ">
                                <Middle active={this.state.active}></Middle>

                                <Right></Right>

                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }

}


class Appbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navHeight: 0,
            show: false
        }
        window.addEventListener("resize", ev => {
            this.onResize(ev)
        })
        window.addEventListener('click', ev => {
            this.setState(s => ({show: false}))
        })
    }


    componentDidMount() {
        const height = this.divElement.clientHeight.toString().trim();
        this.setState({height});
        this.props.setNav(height + "px")
    }

    onResize(ev) {
        if (this.divElement) {
            const height = this.divElement.clientHeight;
            this.setState({height});
            this.props.setNav(height + "px")
        }
        if (window.innerWidth >= 992) {
            this.setState(s => ({show: false}))
        }
    }

    onShow(event) {
        event.stopPropagation()
        if (window.innerWidth <= 992) {
            this.setState(s => {
                console.log("showing :" + this.state.show);
                s.show = !s.show;
                return s;
            })

        }
    }

    render() {

        let links = []
        for (let i = 0; i < 6; i++) {
            links.push(
                <Nav.Item key={"keyBar" + i.toString()}>
                    <Nav.Link eventKey={i}>{trainingSet[i]}</Nav.Link>
                </Nav.Item>
            )
            // let a = (<Button key={"keyBar" + i.toString()} size={"sm"} variant={"primary"}
            //          onClick={event => this.props.setActive(i)}
            // >{trainingSet[i]}</Button>)
        }

        return (
            <Row ref={(divElement) => {
                this.divElement = divElement
            }}
                 className="h-auto   bg-primary text-light align-items-center  ">
                <Col xs="auto " className={"d-flex align-items-center"}>
                    <i className="bi bi-book-half fs-2  "></i>

                    {/*<button className="btn btn-primary">*/}
                    {/* <span className="material-symbols-outlined  fs-2 ">*/}
                    {/*            menu_book*/}
                    {/* </span>*/}
                    {/*</button>*/}
                    <span className="fs-4 fw-semibold mt-1 ms-3 mb-2  ">Mamoun</span>
                </Col>
                <Col xs lg={{order: "last", span: "auto"}} className="text-end d-block d-lg-none">
                    <button className="btn btn-primary" onClick={event => (this.onShow(event))}>
                    <span className="material-symbols-outlined fs-2 mt-1   ">
                        more_vert
                        </span>
                    </button>
                </Col>
                <Col xs="12" lg>
                    {this.state.show ?
                        <Nav variant={"pills"}
                            className={" justify-content-center  align-items-end flex-column "}
                             style={{height:"100px"}}
                            ActiveKey={this.props.active}
                            onSelect={event => this.props.setActive(event)}
                        >{links}
                        </Nav> :
                        <Nav variant={"pills"}
                            className={"nav-pills d-none d-lg-flex justify-content-center justify-content-lg-end align-items-center"}
                            defaultActiveKey={this.props.active}
                            onSelect={event => this.props.setActive(event)}
                        >{links}
                        </Nav>
                    }

                    {/*    <ul className="list-inline d-flex mb-0   justify-content-center*/}
                    {/*justify-content-lg-end   d-lg-flex align-items-center column-gap-1 ">*/}
                    {/*        {links}</ul>*/}


                    {/*    <ul className="list-inline  mb-0   justify-content-center*/}
                    {/*justify-content-lg-end  d-lg-flex align-items-center column-gap-1  d-none">*/}
                    {/*        {links}*/}
                    {/*    </ul>*/}
                </Col>
            </Row>

        )
    }

}

function SideBar() {
    let list = []
    for (let h = 0; h < 5; h++) {
        if (h !== 0)
            list.push(<RowHeader key={"keyRH" + h.toString()} className="mt-5"></RowHeader>)
        else
            list.push(<RowHeader key={"keyRH" + h.toString()}></RowHeader>)

        for (let l = 0; l < 7; l++) {
            list.push(<RowItem key={"keyRH" + h.toString() + l.toString()} name={'Topic ' + l}></RowItem>)
        }
    }
    return (
        <Col xs={2} className="d-none d-lg-block h-100  overflow-y-scroll      pt-3 bg-dark">
            {list}
        </Col>
    )
}



function Middle(props) {
    let trainingUnit;
    switch (trainingSet[props.active]) {
        case "Form" :
            trainingUnit = <Row className={"gy-5  align-items-start"}>
                <Form1></Form1>
                <Form2></Form2>
                <Form3></Form3>
                <Form4></Form4>
                <Form5></Form5>
                <Form6></Form6>
            </Row>

            break;
        case "Component1":
            trainingUnit = <Row className={"gy-5  align-items-start"}>
                <MyAlert></MyAlert>
                <Accordions></Accordions>
                <Badges></Badges>
                <BreadCrumbs></BreadCrumbs>
                <Buttons></Buttons>
                <ButtonsGroup></ButtonsGroup>
            </Row>
            break;
        case "Component2":
            trainingUnit = <Row className={"gy-5  align-items-start"}>
                <Cards></Cards>
                <CloseButtons></CloseButtons>
                <Carousels></Carousels>
                <Dropdowns></Dropdowns>
                <Figures></Figures>
                <Images></Images>
            </Row>
            break;

        case "Component3":
            trainingUnit = <Row className={"gy-5  align-items-start"}>
                <NavBars></NavBars>

                <ListGroups></ListGroups>
                <Modals></Modals>
                <Navs></Navs>
                <Offcanvases></Offcanvases>

            </Row>
            break;
        case "Component4":
            trainingUnit = <Row className={"gy-5  align-items-start"}>
                <Overlays></Overlays>
                <Paginations></Paginations>
                <PlaceHolders></PlaceHolders>
                <Popovers></Popovers>
                <Progresses></Progresses>
            </Row>
            break;
        case "Component5":
            trainingUnit = <Row className={"gy-5  align-items-start"}>
                <Spinners></Spinners>
                <Tables></Tables>
                <Tabses></Tabses>
                <Tooltips></Tooltips>
                <Toasts></Toasts>
            </Row>
            break;
        default:
            trainingUnit = <Row className={"gy-5  align-items-start"}>
            </Row>
            break;

    }

    return (
        <Col className=" bg-dark  h-100 px-3 px-md-5 py-3">
            {trainingUnit}
        </Col>
    )
}

function Right() {
    let list = []
    list.push(<RowHeader key={"keyLH"}></RowHeader>)
    for (let i = 0; i < 7; i++) {
        list.push(<RowItem key={"keyL" + i.toString()} name={"Topic " + i}> </RowItem>)
    }
    return (
        <Col xs="2" className="d-none d-lg-block h-auto    overflow-auto bg-dark  pt-3 ">
            {list}
        </Col>
    )
}

function RowHeader(props) {
    return (
        <Row className={"align-items-center mt-3 gx-0 fs-6 fw-bold text-light " + props.className}>
            <Col xs="auto" className="offset-1">
                <span className="material-symbols-outlined  "> edit</span>
            </Col>
            <Col xs>Content</Col>
        </Row>
    )
}

function RowItem(props) {
    return (
        <Row className="align-items-center mb-1 fst-normal   ">
            <Col xs="auto" className="bd-links-link rounded offset-2 px-3 "> {props.name} </Col>
        </Row>
    )
}

export default Application
