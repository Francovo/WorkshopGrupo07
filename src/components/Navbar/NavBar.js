import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";

const ContainerNav = styled.nav`
  background-color: #232e35;
  align-items: center;
  display: flex;
  display: flex;
  justify-content: space-around;
  padding: 1rem;

`;

const A = styled.a`
    text-decoration: none;
    color: #2CB67D;
`

export const Navbar = () => {
  return (
      <ContainerNav>
        <div>
          <A href="/">
            <BiHomeAlt color="#2CB67D" size={40}/>
            <br/>
            <label>Home</label>
          </A>
        </div>
        <div>
          <A href="/">
            <BsFillPersonFill color="#2CB67D" size={40}/>
            <br/>
            <label>Perfil</label>
          </A>
        </div>
      </ContainerNav>
  );
};
