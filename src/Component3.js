import arrow from './arrow.svg'
import email from './email.svg'


import {
    Badge,
    Form,
    Button,
    Col,
    ListGroup,
    Modal,
    Offcanvas,
    Alert,
    Nav,
    Navbar,
    NavDropdown,
    Container, Image
}
from "react-bootstrap";
import {useState} from "react";
import "./arrow.svg"
import "./google-icon.png"

function ListGroups(props) {

    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>ListGroup Component</h2>
            <div className="mb-3">
                <ListGroup>
                    <ListGroup.Item active>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="mb-3">
                <ListGroup variant={"primary"} defaultActiveKey="#link1">
                    <ListGroup.Item variant={"primary"} action>
                        Link 1
                    </ListGroup.Item>
                    <ListGroup.Item variant={"primary"} action>
                        Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action variant={"primary"}>
                        This one is a button
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div className="mb-3">
                <ListGroup variant="flush" numbered>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>

            <ListGroup className={"mb-3"} numbered>
                <ListGroup.Item
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto ">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                        14
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
            <div>
                {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
                    <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                        <ListGroup.Item>This ListGroup</ListGroup.Item>
                        <ListGroup.Item>renders horizontally</ListGroup.Item>
                        <ListGroup.Item>on {breakpoint}</ListGroup.Item>
                        <ListGroup.Item>and above!</ListGroup.Item>
                    </ListGroup>
                ))}
            </div>
        </Col>
    )
}

function Modals(props) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);


    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Modal Component</h2>
            <div
                className="modal show mb-3"
                style={{display: 'block', position: 'initial'}}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

            <div className="mb-3 d-flex justify-content-center">
                <Button variant="primary" onClick={handleShow1}>
                    Launch demo modal
                </Button>

                <Modal size={"lg"} show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose1}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>
                <Modal
                    show={modalShow}
                    backdrop={"static"}
                    size="lg"
                    onHide={() => setModalShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="mb-3 d-flex justify-content-center">

                <Button variant="primary" onClick={handleShow2}>
                    Launch demo modal
                </Button>

                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose2}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <Button onClick={() => handleShow3()}>
                    Full screen below md
                </Button>

                <Modal size={"lg"} show={show3} fullscreen={"md-down"} onHide={() => setShow3(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal body content</Modal.Body>
                </Modal>
            </div>
        </Col>
    )
}

function Navs(props) {
    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Nav Component</h2>
            <Nav
                className={"mb-3"}
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Nav justify className={"mb-3"} variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active active active active active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Nav fill variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active active active active active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
    )
}


function NavBars(props) {
    return (
        <Col xs={12}>
            <h2 className={"mb-5"}>NavBar Component</h2>

            <div className={"mb-3"}>
                <Navbar bg={"primary"} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className={"mb-3"}>
                <Navbar bg={"primary"}>
                    <Container>
                        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    </Container>
                </Navbar>
                <br/>
                <Navbar bg={"primary"}>
                    <Container>
                        <Navbar.Brand>Brand text</Navbar.Brand>
                    </Container>
                </Navbar>
                <br/>
                <Navbar bg={"primary"}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="arrow.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <br/>
                <img
                    alt=""
                    src={arrow}
                    width="48"
                    height="48"
                    className="d-inline-block align-top"
                />
                <Navbar className={"mb-3"} bg={"primary"}>
                    <Container className={"py-2"}>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={arrow}
                                width="30"
                                height="30"
                                className="d-inline-block align-top "
                            />{'  '}
                            React Bootstrap

                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Navbar className={"mb-3 align-items-center"} bg={"primary"}>
                    <Container className={"py-2"}>
                        <Navbar.Brand href="#home">
                            <span className={"material-symbols-outlined  me-2 "}>email</span>

                            React Bootstrap

                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className="mb-3">


                <Navbar collapseOnSelect
                        bg={"primary"}
                        expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="dark">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className={"mb-3"}>
                <Navbar bg="primary" expand={"lg"}>
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`}/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${"md"}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${"md"}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </Col>
    )
}


function Offcanvases(props) {
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow2 = () => setShow1(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);


    const options = [
        {
            name: 'Enable backdrop (default)',
            scroll: false,
            backdrop: true,
        },
        {
            name: 'Disable backdrop',
            scroll: false,
            backdrop: false,
        },
        {
            name: 'Enable body scrolling',
            scroll: true,
            backdrop: false,
        },
        {
            name: 'Enable both scrolling & backdrop',
            scroll: true,
            backdrop: true,
        },
    ];


    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Offcanvas Component</h2>
            <div className="mb-3 grid">

                <Button variant="primary" className="d-lg-none" onClick={handleShow2}>
                    Launch
                </Button>

                <Alert variant="info" className="d-none d-lg-block">
                    Resize your browser to show the responsive offcanvas toggle.
                </Alert>

                <Offcanvas show={show1} onHide={handleClose1} responsive="lg">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <p className="mb-0">
                            This is content within an <code>.offcanvas-lg</code>.
                        </p>
                    </Offcanvas.Body>
                </Offcanvas>

            </div>

            {options.map((props, idx) => (

                <div key={idx}>
                    <Button variant="primary" onClick={toggleShow} className="me-2 mb-3">
                        {props.name}
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} scroll={props.scroll}
                               backdrop={props.backdrop}>
                        <Offcanvas.Header>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>

                </div>
            ))}


        </Col>
    )
}


export {ListGroups, Modals, Navs, NavBars, Offcanvases,}