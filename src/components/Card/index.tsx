import { CardComponent, CardTags, Price } from "./styles";

interface CardProps {
  coffee: {
    id: string;
    image: string;
    tags: string[];
    title: string;
    description: string;
    price: number;
  };
}

export function Card({ coffee }: CardProps) {
  const { id, image, tags, title, description, price } = coffee;

  return (
    <CardComponent key={id}>
      <img src={image} alt={title} />
      <CardTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardTags>
      <h3>{title}</h3>
      <p>{description}</p>
      <Price>
        R$ <span>{price}</span>
      </Price>
    </CardComponent>
  );
}
