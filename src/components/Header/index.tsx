import { NavLink } from "react-router-dom";
import logoCofee from "../../../public/logo.svg";
import { ButtonsDiv, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={logoCofee} alt="Coffee Delivery Logo" />
      </NavLink>
      <ButtonsDiv>
        <button>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </button>
        <NavLink to={"/checkout"}>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ButtonsDiv>
    </HeaderContainer>
  );
}
