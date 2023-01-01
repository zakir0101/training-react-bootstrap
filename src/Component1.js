import {
    Accordion,
    Alert, Badge, Breadcrumb,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Col, Dropdown,
    DropdownButton,
    ToggleButton,
    ToggleButtonGroup
} from "react-bootstrap";
import {useEffect, useState} from "react";


function MyAlert(props) {
    const [show, setShow] = useState(true);
    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Alerts Component</h2>
            <div className={"mb-3"}>
                {['primary',
                    'secondary',
                    'success',


                ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))}
            </div>

            <div className="mb-3">
                {[

                    'info',
                    'light',
                    'dark',
                ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                        This is a {variant} alert with{' '}
                        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                        you like.
                    </Alert>
                ))}

            </div>

            <div className="mb-3">
                <Alert variant="primary">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This
                        example text is going to run a bit longer so that you can see how
                        spacing within an alert works with this kind of content.
                    </p>
                    <hr/>
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things
                        nice and tidy.
                    </p>


                </Alert>
            </div>

            <div className="pb-3">
                {show ?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            Change this and that and try again. Duis mollis, est non commodo
                            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Cras mattis consectetur purus sit amet fermentum.
                        </p>
                    </Alert> :
                    <Button onClick={() => setShow(true)}>Show Alert</Button>
                }
            </div>
            <div className="pb-3">
                <Alert show={show} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                        fermentum.
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Close me y'all!
                        </Button>
                    </div>
                </Alert>

                {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
            </div>

        </Col>
    )

}

function Accordions(props) {

    return (
        <Col xs={12} md={6}>
            <h2 className="mb-3"> Accordion</h2>
            <Accordion className={"mb-3"} defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion className={"mb-3"} defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    )
}

function Badges(props) {

    return (
        <Col xs={12} md={6}>
            <h2 className="mb-3">Badges</h2>
            <div className="mb-3">
                <h4>
                    Example heading <Badge bg="secondary">New</Badge>
                </h4>
                <h5>
                    Example heading <Badge bg="secondary">New</Badge>
                </h5>
                <h6>
                    Example heading <Badge bg="secondary">New</Badge>
                </h6>
            </div>
            <Button className={"bt-3"} variant="primary">
                Profile <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
        </Col>
    )
}

function BreadCrumbs(props) {

    return (
        <Col xs={12} md={6}>
            <h2 className="mb-3">BreadCrumb</h2>

            <Breadcrumb className={"mb-3"}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </Col>
    )
}

function Buttons(props) {
    let simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);
    const handleClick = () => setLoading(true);

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        {name: 'Active', value: '1'},
        {name: 'Radio', value: '2'},
        {name: 'Radio', value: '3'},
    ];


    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-3"}>Buttons</h2>
            <div className="mb-3 d-flex gap-1 flex-wrap">
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button>{' '}
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>

            </div>

            <div className="mb-3 d-flex gap-1 flex-wrap">
                <Button variant="outline-primary">Primary</Button>{' '}
                <Button variant="outline-secondary">Secondary</Button>{' '}
                <Button variant="outline-success">Success</Button>{' '}
                <Button variant="outline-warning">Warning</Button>{' '}
                <Button variant="outline-danger">Danger</Button>{' '}
                <Button variant="outline-info">Info</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-dark">Dark</Button>
            </div>

            <div className=" mb-3 d-grid gap-2">
                <Button variant="primary" size="lg">
                    Block level button
                </Button>
                <Button variant="secondary" size="lg">
                    Block level button
                </Button>
            </div>
            <div className="mb-3">
                <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                >
                    {isLoading ? 'Loading…' : 'Click to load'}
                </Button>

            </div>

            <div className="mb-3">
                <ButtonGroup className="mb-2">
                    <ToggleButton
                        id="toggle-check"
                        type="checkbox"
                        variant="secondary"
                        checked={checked}
                        value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        Checked
                    </ToggleButton>
                </ButtonGroup>
                <br/>
                <ButtonGroup className="mb-2">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
            <div className="mb-3">
                <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                    <ToggleButton id="tbg-check-1" value={1}>
                        Checkbox 1 (pre-checked)
                    </ToggleButton>
                    <ToggleButton id="tbg-check-2" value={2}>
                        Checkbox 2
                    </ToggleButton>
                    <ToggleButton id="tbg-check-3" value={3}>
                        Checkbox 3 (pre-checked)
                    </ToggleButton>
                </ToggleButtonGroup>
                <br/>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton id="tbg-radio-1" value={1}>
                        Radio 1 (pre-checked)
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2}>
                        Radio 2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3}>
                        Radio 3
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </Col>

    )
}


function ButtonsGroup(props) {

    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-3"}>Button Group</h2>
            <ButtonGroup className={"mb-3"} aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>

            </ButtonGroup>
            <ButtonToolbar className={"mb-3"} aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                    <Button><i className="bi bi-credit-card"></i></Button>
                    <Button>2</Button> <Button>3</Button>{' '}
                    <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                </ButtonGroup>
            </ButtonToolbar>
            <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>

                <DropdownButton
                    as={ButtonGroup}
                    title="Dropdown"
                    id="bg-vertical-dropdown-1"
                >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>

                <Button>Button</Button>
                <Button>Button</Button>

                <DropdownButton
                    as={ButtonGroup}
                    title="Dropdown"
                    id="bg-vertical-dropdown-2"
                >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </Col>
    )
}


export {MyAlert, Accordions, Buttons, ButtonsGroup, Badges, BreadCrumbs}