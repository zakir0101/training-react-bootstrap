import {
    Button,
    Card,
    Col,
    Image,
    OverlayTrigger,
    Pagination,
    Placeholder,
    Popover,
    ProgressBar,
    Tooltip
} from "react-bootstrap";
import email from './email.svg'


function Overlays(props) {
    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Overlay Component</h2>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
            >
                {({ref, ...triggerHandler}) => (
                    <Button

                        variant="primary"
                        {...triggerHandler}
                        className="d-inline-flex align-items-center mb-3"
                    >
                        <Image
                            ref={ref}
                            roundedCircle
                            src="google-icon.webp"

                        />
                        <span className="ms-1">Hover to see</span>
                    </Button>
                )}
            </OverlayTrigger>
            <div className={"mb-3"}>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                            </Tooltip>
                        }
                    >
                        <Button variant="primary" className={"me-2 mb-2"}>Tooltip on {placement}</Button>
                    </OverlayTrigger>
                ))}
            </div>

        </Col>
    )
}


function Paginations(props) {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Paginations Component</h2>
            <div className={"mb-3"}>
                <Pagination>{items}</Pagination>
                <br />

                <Pagination size="lg">{items}</Pagination>
                <br />

                <Pagination size="sm">{items}</Pagination>
            </div>
            <div className="mb-3">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>

            </div>
        </Col>
    )
}

function PlaceHolders(props) {
    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>PlaceHolder Component</h2>
            <div className="mb-3">
                <Card bg={"dark"} style={{width: '18rem'}}>
                    <Card.Img className={"bg-light-subtle"} variant="top"  src={email} />
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6}/>
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>{' '}
                            <Placeholder xs={6}/> <Placeholder xs={8}/>
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={6}/>
                    </Card.Body>
                </Card>
            </div>
            <div className={"mb-3"}>
                <Placeholder xs={6} />
                <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
            </div>
        </Col>
    )
}

function Popovers(props) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </Popover.Body>
        </Popover>
    );


    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Popover Component</h2>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button className={"mb-3"} variant="success">Click me to see</Button>
            </OverlayTrigger>

            <div className={"mb-3"}>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                <Popover.Body>
                                    <strong>Holy guacamole!</strong> Check this info.
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <Button variant="primary" className={"me-2 mb-2"}>Popover on {placement}</Button>
                    </OverlayTrigger>
                ))}
            </div>

        </Col>
    )
}


function Progresses(props) {
    return (
        <Col xs={12} md={6}>
            <h2 className={"mb-5"}>Progress Component</h2>
            <div className="mb-3">
                <ProgressBar now={60} />
            </div>
            <div className={"mb-3"}>
                <ProgressBar variant="success" now={40} />
                <ProgressBar variant="info" now={20} />
                <ProgressBar variant="warning" now={60} />
                <ProgressBar variant="danger" now={80} />
            </div>
            <div className={"mb-3"}>
                <ProgressBar striped variant="success" now={40} />
                <ProgressBar striped variant="info" now={20} />
                <ProgressBar striped variant="warning" now={60} />
                <ProgressBar striped variant="danger" now={80} />
            </div>
            <div className="mb-3">
                <ProgressBar animated now={45} />
            </div>

            <div className="mb-3">
                <ProgressBar>
                    <ProgressBar striped variant="success" now={35} key={1} />
                    <ProgressBar variant="warning" now={20} key={2} />
                    <ProgressBar striped variant="danger" now={10} key={3} />
                </ProgressBar>
            </div>
        </Col>
    )
}


export {Overlays, Paginations, PlaceHolders, Popovers, Progresses}