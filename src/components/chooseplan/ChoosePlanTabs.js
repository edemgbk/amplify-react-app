import React, { useState } from "react";

// INTERNATIONAL TEL INPUT PLUGIN
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

// IMPORTING MATERIAL-UI COMPONENTS
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  Checkbox,
  Card,
  CardContent,
} from "@material-ui/core";

//IMPORTING ICONS
import BlockSharpIcon from "@material-ui/icons/BlockSharp";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import FacebookIcon from "@material-ui/icons/Facebook";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import BeenhereIcon from "@material-ui/icons/Beenhere";

// IMPORTING PATH OF SYTLED COMPONENTS
import { generateMedia } from "styled-media-query";
import styled from "styled-components";

// IMPORT PATH OF COMPONENTS
import useForm from "../login/useForm";
import AlertDialog from "./AlertDialog";
// import Planform from "./Planform";

// MATERIAL-UI ICONS
import { Beenhere, Cancel, SendSharp, Watch } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "6rem auto",
    background: "white",
    border: "1px solid #999",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "red",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "red",
    },
    "&.MuiStepper-root": {
      padding: "1.5rem 0",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    "&:hover": {
      background: "lightgray",
    },
  },

  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  mainContainer: {
    background: "#fff",
  },
}));

function getSteps() {
  return ["SIGN UP", "SELECT PLAN", "CHECKOUT"];
}

export default function ChoosePlanTabs() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(true);

  const [state, setState] = useState({
    selectedOption: "Premium $16.99",
  });

  console.log(state);
  const handleOptionChange = (e) => {
    setState({
      selectedOption: e.target.value,
    });
    localStorage.setItem("myValueInLocalStorage", e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // console.log("You have submitted:", state);
    console.log(
      localStorage.getItem("myValueInLocalStorage", state.selectedOption)
    );
  };

  // Define your state schema
  const stateSchema = {
    firstname: { value: "", error: "" },
    lastname: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  };

  const stateValidatorSchema = {
    firstname: {
      required: true,
      validator: {
        func: (value) =>
          /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value),
        error: "Please enter a valid First Name",
      },
    },
    lastname: {
      required: true,
      validator: {
        func: (value) =>
          /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value),
        error: "Please enter a valid Last Name",
      },
    },
    email: {
      required: true,
      validator: {
        func: (value) =>
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            value
          ),
        error: "Invalid email format.",
      },
    },
    password: {
      required: true,
      validator: {
        func: (value) => /^[a-zA-Z]+$/.test(value),
        error: "Password field can't be empty",
      },
    },
  };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const { values, errors, dirty, handleOnChange, handleOnSubmit } = useForm(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );
  const { firstname, lastname, email, password } = values;

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <FormContainer>
            {!firstname ||
            firstname.length < 3 ||
            !lastname ||
            lastname.length < 3 ||
            !email ||
            errors.email ||
            !password ||
            password.length < 4 ? (
              <Typography
                variant="h5"
                style={{ color: "#999", textAlign: "center" }}
              >
                Sign up with your email address.
              </Typography>
            ) : (
              <Typography
                variant="h5"
                style={{
                  color: "var(--main-red)",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Sign up with your email address.
              </Typography>
            )}

            <div className="form-container">
              <form onSubmit={handleOnSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={handleOnChange}
                  />
                  <label>First Name</label>
                  {errors.firstname && dirty.firstname && (
                    <p style={{ color: "red" }}>{errors.firstname}</p>
                  )}
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleOnChange}
                  />
                  <label>Last Name</label>
                  {errors.lastname && dirty.lastname && (
                    <p style={{ color: "red" }}>{errors.lastname}</p>
                  )}
                </div>
                <div className="input-container">
                  {/* INTERNATIONAL TEL INPUT STARTS HERE */}
                  <IntlTelInput preferredCountries={["ru"]} />
                </div>
                {/* INTERNATIONAL TEL INPUT ENDS HERE */}
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                  />
                  <label>Email</label>
                  {errors.email && dirty.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                  />
                  <label>Password</label>
                  {errors.password && dirty.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </div>

                <div className="input-container">
                  <div>
                    {!firstname ||
                    firstname.length < 3 ||
                    !lastname ||
                    lastname.length < 3 ||
                    !email ||
                    errors.email ||
                    !password ||
                    password.length < 4 ? (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled
                          endIcon={<BlockSharpIcon />}
                          style={{
                            background: "rgba(0, 0, 0, 0.38)",
                            width: "100%",
                            height: "3rem",
                          }}
                        >
                          {activeStep === steps.length - 1
                            ? "Finish"
                            : "SIGN UP"}
                        </Button>

                        <Grid container style={{ paddingTop: "2rem" }}>
                          <Grid md={2}>
                            <Checkbox
                              defaultChecked
                              style={{ color: "grey" }}
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                          </Grid>
                          <Grid md={10}>
                            <p style={{ color: "grey" }}>
                              Sign up for updates from COMPANY on new releases
                              and promotions. Unsubscribe at any time.
                            </p>
                          </Grid>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          style={{
                            width: "100%",
                            height: "3rem",
                            background: "var(--main-red)",
                            color: "white",
                          }}
                          endIcon={<SendSharpIcon />}
                          onClick={handleNext}
                          type="submit"
                          name="submit"
                        >
                          {activeStep === steps.length - 1
                            ? "Finish"
                            : "SIGN UP"}
                        </Button>
                        <Grid container style={{ paddingTop: "2rem" }}>
                          <Grid md={2}>
                            <Checkbox
                              defaultChecked
                              style={{ color: "var(--main-red)" }}
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                          </Grid>
                          <Grid md={10}>
                            <Typography
                              variant="subtitle2"
                              style={{ color: "grey" }}
                            >
                              Sign up for updates from COMPANY on new releases
                              and promotions. Unsubscribe at any time.
                            </Typography>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </div>
                  <>
                    <Grid
                      container
                      alignItems="center"
                      style={{ paddingTop: "2rem" }}
                    >
                      <Grid item xs>
                        <Divider variant="middle" />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" style={{ color: "lightgrey" }}>
                          OR
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Divider variant="middle" />
                      </Grid>
                    </Grid>
                    <Button
                      variant="contained"
                      style={{
                        background: "#46a",
                        width: "100%",
                        height: "3rem",
                        marginTop: "2rem",
                        color: "white",
                      }}
                      startIcon={<FacebookIcon />}
                      onClick={handleNext}
                      type="submit"
                      name="submit"
                    >
                      {activeStep === steps.length - 1
                        ? "Finish"
                        : "SIGN UP WITH FACEBOOK"}
                    </Button>
                  </>
                </div>
              </form>
            </div>
          </FormContainer>
        );
      // STEP TWO THE PAYMENT
      case 1:
        return (
          <Box component="div">
            <Typography
              variant="h6"
              color="secondary"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              SIGN UP COMPLETE! <br /> Select a plan that’s right for you.
            </Typography>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                {/* CHOOSE MONTHLY PLAN COMPONENT*/}

                <MainContainer>
                  {/* Tab Bottom Content */}
                  <div className="tab-bottom-content container">
                    <form onSubmit={handleFormSubmit}>
                      <ul className="select-plan">
                        <li>
                          <input
                            type="radio"
                            id="p1"
                            value="Basic $9.99"
                            checked={state.selectedOption === "Basic $9.99"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="p1">Basic</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="p2"
                            value="Standard $13.99"
                            checked={state.selectedOption === "Standard $13.99"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="p2">Standard</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="p3"
                            value="Premium $16.99"
                            checked={state.selectedOption === "Premium $16.99"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="p3">Premium</label>
                        </li>
                      </ul>
                    </form>
                    <table id="table">
                      <tbody>
                        <tr id="first-tr">
                          <td style={{ fontWeight: "900" }}>Monthly price</td>
                          <td
                            className={
                              state.selectedOption === "Basic $9.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            $9.99
                          </td>
                          <td
                            className={
                              state.selectedOption === "Standard $13.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            $13.99
                          </td>
                          <td
                            className={
                              state.selectedOption === "Premium $16.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            $16.99
                          </td>
                        </tr>
                        <tr>
                          <td>HD available</td>
                          <td
                            className={
                              state.selectedOption === "Basic $9.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Standard $13.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Premium $16.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                        </tr>
                        <tr>
                          <td>Ultra HD available</td>
                          <td
                            className={
                              state.selectedOption === "Basic $9.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Cancel />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Standard $13.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Cancel />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Premium $16.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Cancel />
                          </td>
                        </tr>
                        <tr>
                          <td>Screens you can watch on at the same time</td>
                          <td
                            className={
                              state.selectedOption === "Basic $9.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            1
                          </td>
                          <td
                            className={
                              state.selectedOption === "Standard $13.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            2
                          </td>
                          <td
                            className={
                              state.selectedOption === "Premium $16.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            4
                          </td>
                        </tr>
                        <tr>
                          <td>Watch on your laptop, TV, phone and tablet </td>
                          <td
                            className={
                              state.selectedOption === "Basic $9.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Standard $13.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Premium $16.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                        </tr>
                        <tr>
                          <td>Unlimited movies and TV shows</td>
                          <td
                            className={
                              state.selectedOption === "Basic $9.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Standard $13.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Premium $16.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                        </tr>
                        <tr>
                          <td>Cancel anytime</td>
                          <td
                            className={
                              state.selectedOption === "Basic $9.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Standard $13.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                          <td
                            className={
                              state.selectedOption === "Premium $16.99"
                                ? "selected-plan"
                                : null
                            }
                          >
                            <Beenhere />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      height: "3rem",
                      background: "var(--main-red)",
                      color: "white",
                    }}
                    endIcon={<SendSharp />}
                    onClick={handleNext}
                    type="submit"
                    name="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "SIGN UP"}
                  </Button>
                </MainContainer>

                {/*END CHOOSE MONTHLY PLAN COMPONENT*/}
                {/* <Planform /> */}
              </Grid>
            </Grid>
          </Box>
        );
      // STEP THREE CHECKOUT
      case 2:
        return (
          <Box component="div">
            <Typography
              variant="h6"
              align="center"
              style={{ color: "var(--main-red)" }}
            >
              Almost done! Review your plan <br /> and checkout to start
              watching.
            </Typography>
            <Card style={{ width: "80%", margin: "1rem auto" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ padding: "1.4rem 0" }}
              >
                YOUR PLAN
              </Typography>
              <CardContent>
                <Grid container>
                  <Grid item xs={2}>
                    <CreditCardIcon />
                  </Grid>
                  <Grid item xs={4} style={{ textAlign: "left" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      12 Month
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "right" }}>
                    <Grid container justify="center" alignContent="end">
                      <Grid item>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "900",
                            color: "var(--main-red)",
                          }}
                        >
                          {localStorage.getItem(
                            "myValueInLocalStorage",
                            state.selectedOption
                          )}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
                {/* BULLETS CONTAINER*/}
                <Box component="div" style={{ marginTop: "2rem" }}>
                  <Grid container>
                    <Grid item md={2}>
                      <BeenhereIcon style={{ color: "orange" }} />
                    </Grid>
                    <Grid item md={10}>
                      <Typography variant="subtitle1" style={{ color: "gray" }}>
                        {" "}
                        Thousands Movies and TV Series.
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* 2nd bullet */}
                  <Grid container>
                    <Grid item md={2}>
                      <BeenhereIcon style={{ color: "orange" }} />
                    </Grid>
                    <Grid item md={10}>
                      <Typography variant="subtitle1" style={{ color: "gray" }}>
                        {" "}
                        Watch on all your devices.
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* 3thd bullet */}
                  <Grid container>
                    <Grid item md={2}>
                      <BeenhereIcon style={{ color: "orange" }} />
                    </Grid>
                    <Grid item md={10}>
                      <Typography variant="subtitle1" style={{ color: "gray" }}>
                        {" "}
                        Cancel anytime.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
            {/* PAYMENT DETAILS */}
            <Card style={{ color: "#999", width: "80%", margin: "1rem auto" }}>
              <Typography variant="h6" align="center" style={{ color: "#333" }}>
                PAYMENT DETAILS
              </Typography>
              <CardContent>
                <Typography variant="subtitle1">
                  Company will automatically renew your plan and charge your
                  payment method $29.99 every 365 days until you cancel.
                  <br />
                  Cancel anytime. There are no refunds or credits for partial
                  months.
                </Typography>
              </CardContent>
            </Card>

            <AlertDialog />
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
          </Box>
        );
      default:
        return "Unknown stepIndex";
    }
  }
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Media
const customMedia = generateMedia({
  tablet: "640px",
});

//Form Container
const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;
  ${customMedia.lessThan("tablet")`
    border-bottom: 0.9px solid #999;
`}

  .form-container {
    background: #fff;
    position: relative;
    width: 28.125rem;
    height: auto;
    padding: 2rem;
    ${customMedia.lessThan("tablet")`
      padding: 0.6rem;
      height:35rem;
    `}
  }

  h1 {
    color: #fff;
    margin: 0 0.8rem;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1rem;
  }

  input {
    color: #999;
    background: #fff;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0.9rem 1.25rem 0;
    border: 1px solid #999;
  }

  input:focus {
    outline: none;
  }

  input:focus ~ label {
    top: 0.4375rem;
    font-size: 0.7rem;
  }

  form div {
    position: relative;
  }

  form div label {
    position: absolute;
    top: 0.625rem;
    left: 1.25rem;
    pointer-events: none;
    color: #8a8a8a;
    font-size: 1rem;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
  }

  // INTERNATIONAL TEL INPUT
  .country-name {
    color: #999;
  }
  .selected-flag {
    background: lightgray;
  }
  .intl-tel-input input {
    padding-top: 0;
    width: 100%;
  }
  .intl-tel-input.allow-dropdown {
    // bottom: 0rem;
  }
`;

// Button
// const Button = styled.button`
//   color: #fff;
//   background: ${(props) => (props.activated ? "red" : null)}
//   width: 100%;
//   border: none;
//   outline: none;
//   padding: 0.8rem 1.3rem;
//   border-radius: 0.125rem;
//   font-size: 1rem;
//   text-align: center;
//   box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
//   transition: opacity 0.2s ease-in;
//   cursor: pointer;
//   text-decoration: none;
//   margin: 1rem 0;
//   &:hover {
//     opacity: 0.9;
//   }
// `;
////////////////////////////////////////////////////////////////////////////////////

// Media
// const customMedia = generateMedia({
//   lgDesktop: "1350px",
//   mdDesktop: "1000px",
//   mdDesktop: "950px",
// });

// Main container
const MainContainer = styled.div`
  background: #fff;
  color: #000;

  .selected-plan {
    color: var(--main-red);
    font-weight: bold;
  }

  // header top
  .header-top {
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #e6e6e6;
  }

  //////////////////////////////

  .plangrid-header {
    margin-bottom: 13rem;
  }

  .select-plan {
    list-style-type: none;
    padding: 0;
    color: #fff;
    position: relative;
    // float: left;
    // left: 60%;
    display: flex;
    float: right;
  }
      @media(max-width: 550px){
        ul.select-plan {
        width: 100%;
        }
      }

  .select-plan li {
    margin-right:  1.3rem ;
    padding: 1rem;
    width: 70px;
    height: 50px;
    border-radius: 3px;
    position: relative;
    background: var(--main-red-not-selected);
  }

  .select-plan label,
  .select-plan input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 3px;
  }

  .select-plan label {
    padding: auto !important;
    font-size: 0.7rem;
    text-align: center;
  }

  input[type="radio"]:checked + label::after {
    content: "";
    display: block;
    border: 7px solid #e50914;
    border-top-color: #e50914;
    position: absolute;
    top: 83%;
    left: 40%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translatex(-50%);
    transform: rotate(45deg);
  }

  .select-plan input[type="radio"] {
    opacity: 0.01;
    z-index: 1;
  }

  .select-plan input[type="radio"]:checked + label,
  .Checked + label {
    background: var(--main-red);
  }

  .select-plan label {
    padding: 5px;
    cursor: pointer;
    z-index: 90;
  }

  .select-plan label:hover {
    background: var(--main-red);
  }
  //////////////////////

  /*************************************************
 * table start
 * **********************************************/
  .tab-content {
    margin: 0 10%;
    padding-bottom: 1%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 1rem 0 0;
    ${customMedia.lessThan("lgDesktop")`
  grid-template-columns: 1fr;
  row-gap: 1.5rem;
  text-align: center;
  `}
  }

  tr{transition: all ease-in-out .25s}

  // Tab Bottom Content
  .tab-bottom-content {
    margin: 2rem auto;
    padding: 2.5rem;
  }

  // Table
  table {
    width: 100%;

    border-collapse: collapse;
  }

  // table thead th {
  //   text-transform: uppercase;
  //   padding: 0.8rem;
  // }

  table tbody {

    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.3rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    border-bottom: 1px solid #999;
  }

  /*************************************************
 * table end
 * **********************************************/

  // header content
  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-derection: column;
    z-index: 2;
  }

  .header-content img {
    margin: 6.25rem auto 1.875rem;
  }

  // // the signin btn
  .signIn-btn {
    margin: 1.5625rem 3% 0;
    padding: 0.4375rem 1.0625rem
    font-weight: 700;
    line-height: normal;
    color: var(--main-dark);
    font-size: 1.25rem;
    right: 0;
    position: absolute;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }

  // }
`;
