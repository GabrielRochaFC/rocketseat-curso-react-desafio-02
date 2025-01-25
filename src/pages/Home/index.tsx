import { Hero } from "./components/Hero";
import { CardContainer, Cards, HomeContainer } from "./styles";

import coffeesData from "../../../data.json";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CardContainer>
        <h2>Nossos cafés</h2>
        <Cards>
          {coffeesData.coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </Cards>
      </CardContainer>
    </HomeContainer>
  );
}
