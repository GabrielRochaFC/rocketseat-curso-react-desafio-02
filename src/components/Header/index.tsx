import { NavLink } from "react-router-dom";
import logoCofee from "/logo.svg?url";
import { ButtonsDiv, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Header() {
  const context = useContext(OrderContext);

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
          {context?.orders && context.orders.length > 0 && (
            <span>{context.orders.length}</span>
          )}
        </NavLink>
      </ButtonsDiv>
    </HeaderContainer>
  );
}
