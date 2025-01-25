import { NavLink } from "react-router-dom";
import logoCofee from "../../../public/logo.svg";
import { ButtonsDiv, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCofee} alt="" />
      <ButtonsDiv>
        <button>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </button>
        <NavLink to={"/"}>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ButtonsDiv>
    </HeaderContainer>
  );
}
