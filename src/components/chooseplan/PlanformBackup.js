import React, { useState } from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

// MATERIAL-UI ICONS
import BeenhereIcon from "@material-ui/icons/Beenhere";
import CancelIcon from "@material-ui/icons/Cancel";

const ChoosePlan = (props) => {
  const [state, setState] = useState({
    selectedOption: "Premium $16.99",
  });

  const handleOptionChange = (e) => {
    setState({
      selectedOption: e.target.value,
    });
    localStorage.setItem("myValueInLocalStorage", e.target.value);
  };

  const handleFormSubmit = () => {
    console.log("You have submitted:", state);
  };

  return (
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
                checked={state === "Basic $9.99"}
                onChange={handleOptionChange}
              />
              <label htmlFor="p1">Basic</label>
            </li>
            <li>
              <input
                type="radio"
                id="p2"
                value="Standard $13.99"
                checked={state === "Standard $13.99"}
                onChange={handleOptionChange}
              />
              <label htmlFor="p2">Standard</label>
            </li>
            <li>
              <input
                type="radio"
                id="p3"
                value="Premium $16.99"
                checked={state === "Premium $16.99"}
                onChange={handleOptionChange}
              />
              <label htmlFor="p3">Premium</label>
            </li>
          </ul>
        </form>
        <table id="table">
          <tbody>
            <tr id="first-tr">
              <td>Monthly price</td>
              <td className={state === "Basic $9.99" ? "selected-plan" : null}>
                $9.99
              </td>
              <td
                className={state === "Standard $13.99" ? "selected-plan" : null}
              >
                $13.99
              </td>
              <td
                className={state === "Premium $16.99" ? "selected-plan" : null}
              >
                $16.99
              </td>
            </tr>
            <tr>
              <td>HD available</td>
              <td className={state === "Basic $9.99" ? "selected-plan" : null}>
                <BeenhereIcon />
              </td>
              <td
                className={state === "Standard $13.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
              <td
                className={state === "Premium $16.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
            </tr>
            <tr>
              <td>Ultra HD available</td>
              <td className={state === "Basic $9.99" ? "selected-plan" : null}>
                <CancelIcon />
              </td>
              <td
                className={state === "Standard $13.99" ? "selected-plan" : null}
              >
                <CancelIcon />
              </td>
              <td
                className={state === "Premium $16.99" ? "selected-plan" : null}
              >
                <CancelIcon />
              </td>
            </tr>
            <tr>
              <td>Screens you can watch on at the same time</td>
              <td className={state === "Basic $9.99" ? "selected-plan" : null}>
                1
              </td>
              <td
                className={state === "Standard $13.99" ? "selected-plan" : null}
              >
                2
              </td>
              <td
                className={state === "Premium $16.99" ? "selected-plan" : null}
              >
                4
              </td>
            </tr>
            <tr>
              <td>Watch on your laptop, TV, phone and tablet </td>
              <td className={state === "Basic $9.99" ? "selected-plan" : null}>
                <BeenhereIcon />
              </td>
              <td
                className={state === "Standard $13.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
              <td
                className={state === "Premium $16.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
            </tr>
            <tr>
              <td>Unlimited movies and TV shows</td>
              <td className={state === "Basic $9.99" ? "selected-plan" : null}>
                <BeenhereIcon />
              </td>
              <td
                className={state === "Standard $13.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
              <td
                className={state === "Premium $16.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
            </tr>
            <tr>
              <td>Cancel anytime</td>
              <td className={state === "Basic $9.99" ? "selected-plan" : null}>
                <BeenhereIcon />
              </td>
              <td
                className={state === "Standard $13.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
              <td
                className={state === "Premium $16.99" ? "selected-plan" : null}
              >
                <BeenhereIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-primary mt-2"
        type="submit"
        onClick={handleFormSubmit}
      >
        CHECKOUT
      </button>
    </MainContainer>
  );
};

export default ChoosePlan;

// Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1000px",
  mdDesktop: "950px",
});

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

// logo
const Logo = styled.img`
  width: 10.5rem;
  height: 3.5rem;
  position: absolute;
  top: 49%;
  left: 13%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
