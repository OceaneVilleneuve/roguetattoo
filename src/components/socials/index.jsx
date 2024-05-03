import React from 'react';
import styled from "styled-components";
import Logo from "../../assets/IMG_0751-removebg-preview.png"
// import styled from 'styled-components';
// import colors from '../../utils/style/colors';

const Title = styled.h1`
  font-size: 45px;
`

const Socials = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const location = useLocation();

  return (
    <div id="socialsPage" style={{
    height: "100vh",
    marginTop: "20rem",
    textAlign: "center",
    }}>
      <Title>
        RETROUVE MOI
        <br/>
        <br/>
        SUR INSTAGRAM
      </Title>
      <div>
      <img src={Logo} alt="logo" />
      </div>
    </div>
  )
};

export default Socials;
