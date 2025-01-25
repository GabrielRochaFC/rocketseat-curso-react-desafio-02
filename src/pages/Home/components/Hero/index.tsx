import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { HeroContainer, HeroList, HeroTexts } from "./styles";

import Image from "../../../../assets/Imagem.png";

export function Hero() {
  return (
    <HeroContainer>
      <HeroTexts>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <ul>
          <HeroList backgroundSpanColor="yellow-dark">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </HeroList>
          <HeroList backgroundSpanColor="base-text">
            <span>
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </HeroList>
          <HeroList backgroundSpanColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </HeroList>
          <HeroList backgroundSpanColor="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </HeroList>
        </ul>
      </HeroTexts>
      <img src={Image} alt="A cup of coffee" />
    </HeroContainer>
  );
}
