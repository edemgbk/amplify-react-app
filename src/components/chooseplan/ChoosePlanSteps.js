import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../svg/logo.svg";
import FooterChoosePlan from "./FooterChoosePlan";

import { Link, NavLink } from "react-router-dom";
import ChoosePlanTabs from "./ChoosePlanTabs";

class ChoosePlan extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <MainContainer>
        {/* header top */}
        <div className="header-top">
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <NavLink to="/login" className="btn signIn-btn">
            Sign In
          </NavLink>
        </div>
        {/* header content */}
        <ChoosePlanTabs />
        <FooterChoosePlan />
      </MainContainer>
    );
  }
}

export default ChoosePlan;

// Main container
const MainContainer = styled.div`
  background: #fff;
  // header top
  .header-top {
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #999;
  }

 

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


  // signin btn
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
    
  }

 
`;

// logo
const Logo = styled.img`
  width: 10.5rem;
  height: 3.5rem;
  position: absolute;
  top: 49%;
  left: 8%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
