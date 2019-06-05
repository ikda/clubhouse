import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.button`
    width: 100%;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    font-weight: 600;
    background-color: ${props => props.theme.blueColor};
    text-align: center;
    padding: 7px 0px;   
    font-size: 14px;
`;

const Button = ({text}) => <Container>{text}</Container>

Button.propTypes = {
    text: propTypes.string.isRequired
};

export default Button;