import {Button, Col, Dropdown, DropdownButton, FloatingLabel, Form, FormGroup, InputGroup, Row} from "react-bootstrap";
import {object, string, number,  mixed, bool} from 'yup';
import React, {useState} from "react";
import {Formik} from "formik";


function Form1() {
    return (
        <Col xs={"12"} md={"6"}>
            <Form>
                <fieldset>
                    <legend id={"second-top"}>the first Form</legend>
                    <FormGroup className={"mb-3"}>
                        <Form.Label className=" form-label"> Email address</Form.Label>
                        <Form.Control type={"email"} placeholder={"Enter Email"}></Form.Control>
                        <Form.Text> We'll never share your email with anyone else.</Form.Text>
                    </FormGroup>
                    <FormGroup className={"mb-3"}>
                        <Form.Label className=" form-label"> Email address</Form.Label>
                        <Form.Control disabled={true} placeholder={"Enter Email"}></Form.Control>
                    </FormGroup>
                    <FormGroup className={"mb-3"}>
                        <Form.Label>Text Area</Form.Label>
                        <Form.Control as={"textarea"}></Form.Control>
                    </FormGroup>
                    <FormGroup className={"mb-3"}>
                        <Form.Label className={"form-label"}>Select </Form.Label>
                        <Form.Select>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </Form.Select>
                    </FormGroup>
                    <FormGroup className={"mb-3"}>
                        <Form.Label className=" form-label"> Choose a File</Form.Label>
                        <Form.Control type={"file"} multiple={true}></Form.Control>
                    </FormGroup>
                    <FormGroup className={"mb-3"}>

                    </FormGroup>
                    <FormGroup className={"mb-3"}>
                        <Form.Check type={"checkbox"} label={"this is a checkbox"}></Form.Check>
                    </FormGroup>
                    <FormGroup className={"mb-3"}>
                        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                        <Form.Control type={"color"} title={"choose your color"}
                                      id="exampleColorInput"></Form.Control>
                    </FormGroup>
                    <FormGroup className={"mb-3"}>
                        <Button type="submit">Submit</Button>
                    </FormGroup>
                </fieldset>
            </Form>
        </Col>
    )
}

function Form2() {
    return (
        <Col xs={"12"} md={"6"}>
            <Form>
                <fieldset>
                    <legend id={"second-top"}>the second Form</legend>
                    <Row className={"align-items-center mb-3"} align={"center"}>
                        <Col xs={"4"} md={"12"} className={""}>
                            <Form.Label className={"mb-0 mb-md-2 d-flex justify-content-start"}>Email
                                Address</Form.Label>
                        </Col>
                        <Col xs={"8"} md={"12"}>
                            <Form.Control type={"email"} placeholder={"Enter Email"}></Form.Control>
                        </Col>
                    </Row>

                    <Row className={"align-items-center mb-3"} align={"center"}>
                        <Col xs={"4"} md={"12"} className={""}>
                            <Form.Label className={"mb-0 mb-md-2 d-flex justify-content-start"}>Password</Form.Label>
                        </Col>
                        <Col xs={"8"} md={"12"}>
                            <Form.Control type={"email"} placeholder={"Enter your password"}></Form.Control>
                        </Col>
                    </Row>

                    {['radio', 'switch', 'checkbox'].map(value =>
                        (
                            <FormGroup className={"mb-3"}>
                                <Form.Check type={value} name={"user"} id={value + 1}
                                            label={'dafault-' + value}>

                                </Form.Check>
                                {value === 'radio' ?
                                    <Form.Check type={value} name={"user"} id={value + 2}
                                                label={'dafault-' + value}>

                                    </Form.Check> : <div></div>}

                                <Form.Check type={value} disabled
                                            label={'dafault-' + value}>

                                </Form.Check>
                            </FormGroup>

                        )
                    )}


                    {['radio'].map((type) => (
                        <div key={type} className="mb-3">
                            <Form.Check type={type} id={`check-api-${type}`}>
                                <Form.Check.Input type={type} isValid/>
                                <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                                <Form.Control.Feedback type="valid">
                                    You did it!
                                </Form.Control.Feedback>
                            </Form.Check>
                        </div>
                    ))}

                    {['checkbox', 'radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="1"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="2"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                disabled
                                label="3 (disabled)"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </fieldset>
            </Form>

        </Col>
    )
}


function Form3() {
    const [value, setValue] = useState('abc');

    const onValueChange = e => {
        console.log(e.target.value)
        setValue(e.target.value);
    }

    const handelSelect = (e) => {
        console.log(e);
        setValue(e)

    }

    return (
        <Col md={"6"}>
            <Form>
                <fieldset>
                    <legend id={"second-top"}>the third Form</legend>
                    <FormGroup className={"mb-3"}>
                        <Form.Label>Range</Form.Label>
                        <Form.Range/>
                    </FormGroup>
                    <InputGroup className={"mb-3"}>
                        <InputGroup.Text> First Name</InputGroup.Text>
                        <Form.Control type={"email"} placeholder={"User Name"}></Form.Control>
                    </InputGroup>
                    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            https://example.com/users/
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3"/>
                    </InputGroup>
                    <InputGroup className={"mb-3"}>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea"/>
                    </InputGroup>
                    <InputGroup className={"mb-3"}>
                        <Button variant={"outline-secondary"}>
                            <span className={"material-symbols-outlined mt-1"}>add</span>
                        </Button>
                        <Form.Control placeholder={"add more feature"}/>
                    </InputGroup>
                    <InputGroup className={"mb-3"}>
                        <DropdownButton onSelect={handelSelect} variant={"outline-secondary"} title={"Dropdown"}>
                            <Dropdown.Item eventKey={"Option1"}>Action 1</Dropdown.Item>
                            <Dropdown.Item eventKey={"Option2"}>Action 1</Dropdown.Item>
                            <Dropdown.Item eventKey={"Option3"}>Action 1</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey={"Option4"}>Action 3</Dropdown.Item>

                        </DropdownButton>
                        <Form.Control onChange={onValueChange} value={value}/>
                    </InputGroup>

                </fieldset>

            </Form>

        </Col>
    )


}

function Form4() {
    return (
        <Col xs={"6"}>
            <Form>
                <fieldset>
                    <legend id={"second-top"}>the first Form</legend>
                    <FloatingLabel className={"mb-3"} label={"Email Address"}>
                        <Form.Control type={"email"} placeholder={"ignored"}/>
                    </FloatingLabel>
                    <FloatingLabel className={"mb-3"} controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password"/>
                    </FloatingLabel>

                    <FloatingLabel className={"mb-3"} controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{height: '100px'}}
                        />
                    </FloatingLabel>

                    <FloatingLabel className={"mb-3"} controlId="floatingSelect" label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </fieldset>
            </Form>

        </Col>
    )
}


function Form5() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log(form)
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Col xs={"12"}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <fieldset>
                    <legend id={"second-top"} className={"text-center"}>the fifths Form</legend>
                    <Row className={"mb-3"}>
                        <FormGroup as={Col} md={4}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type={"text"} defaultValue={"Mark"}></Form.Control>
                        </FormGroup>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                you have to enter your first name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Well done.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button className={"mb-3"} type={"submit"}>Submit Form</Button>

                </fieldset>
            </Form>
        </Col>

    )
}

// Formik yup
//


function Form6() {


    const schema = object().shape({
        firstName: string().email(),
        lastName: string().required(),
        username: string().required(),
        city: string().required(),
        state: string().required(),
        zip: number().required().positive(),
        file: mixed().required(),
        terms: bool().required().oneOf([true], 'terms must be accepted'),
    });


    return (
        <Col xs={"12"}>
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    firstName: 'Mark',
                    lastName: 'Otto',
                    username: '',
                    city: '',
                    state: '',
                    zip: '',
                    file: null,
                    terms: false,
                }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <legend>the sixth Form</legend>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik101"
                                className="position-relative"
                            >
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter first name"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>{errors.firstName}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik102"
                                className="position-relative"
                            >
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    isValid={touched.lastName && !errors.lastName}
                                />

                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid" tooltip>
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationFormik103"
                                className="position-relative"
                            >
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isInvalid={!!errors.city}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.city}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="3"
                                controlId="validationFormik104"
                                className="position-relative"
                            >
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    isInvalid={!!errors.state}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.state}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="3"
                                controlId="validationFormik105"
                                className="position-relative"
                            >
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zip"
                                    name="zip"
                                    value={values.zip}
                                    onChange={handleChange}
                                    isInvalid={!!errors.zip}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.zip}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>File</Form.Label>
                            <Form.Control
                                type="file"
                                required
                                name="file"
                                onChange={handleChange}
                                isInvalid={!!errors.file}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {errors.file}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                                id="validationFormik106"
                                feedbackTooltip
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                )}
            </Formik>
        </Col>
    );
}


export
{
    Form1, Form2, Form3, Form4, Form5, Form6
}