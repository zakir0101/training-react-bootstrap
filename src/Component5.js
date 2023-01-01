import {Button, Col, Overlay, Row, Spinner, Tab, Table, Tabs, Toast, Tooltip} from "react-bootstrap";
import React, {useRef, useState} from "react";

function Spinners(props) {

    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Spinner Component</h2>
            <div className="mb-3">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
            </div>
        </Col>
    )
}
function Tables(props) {

    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Table Component</h2>
            <div className="mb-3">
                <Table striped variant={"light"} hover size={"sm"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </div>


        </Col>

    )
}
function Tabses(props) {

    const [key, setKey] = useState('home');

    let Sonnet = (props) => {
        return ( <p>
            Those lips that Love's own hand did make, Breathed forth the sound that said 'I hate', To me that languish'd for her sake: But when she saw my woeful state, Straight in her heart did mercy come, Chiding that tongue that ever sweet Was us'd in giving gentle doom; And taught it thus anew to greet; 'I hate' she alter'd with an end, That followed it as gentle day,
        </p>)
    }
    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Tab Component</h2>
            <div className="mb-3">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        <Sonnet />
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Sonnet />
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        <Sonnet />
                    </Tab>
                </Tabs>

                <div className="mb-3">
                    <Tabs fill
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Home">
                            <Sonnet />
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <Sonnet />
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            <Sonnet />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Col>
    )
}

function Tooltips(props) {
    const [show, setShow] = useState(false);
    const target = useRef(null);


    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Tooltip Component</h2>
            <div className="mb-3">
                <>
                    <Button ref={target} onClick={() => setShow(!show)}>
                        Click me!
                    </Button>
                    <Overlay target={target.current} show={show} placement="right">
                        {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                                My Tooltip
                            </Tooltip>
                        )}
                    </Overlay>
                </>
            </div>
        </Col>
    )
}
function Toasts(props) {
    const [show,setShow] = useState(true)
    const [showA, setShowA] = useState(true);


    const toggleShowA = () => setShowA(!showA);



    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Toast Component</h2>
            <Toast className={"mb-3"} show={show} onClose={() => setShow(false)}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>

            <div className="mb-3">
                <Button onClick={toggleShowA} className="mb-2">
                    Toggle Toast <strong>with</strong> Animation
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <i className="bi bi-book-half fs-2 rounded me-2 " alt={"kjl"}></i>

                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </div>

            <Row className={"mb-3"}>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                </Col>
            </Row>

        </Col>

    )
}

export {Spinners,Tabses,Tables,Tooltips,Toasts}