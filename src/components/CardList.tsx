import Card from "./Card";

interface CardListProps {
  cards: any;
}

function CardList({ cards }: CardListProps) {
  return (
    <>
      <div className="card-list">
        {cards.map((card: any) => (
          <Card
            name={card.c[0].v}
            set={card.c[1] == null ? "Any" : card.c[1].v}
            image={card.c[2] == null ? "" : card.c[2].v}
            price={card.c[3] == null ? null : card.c[3].v}
            quantity={card.c[4] == null ? "1" : card.c[4].v}
            person={card.c[5] == null ? "ANON" : card.c[5].v}
            key={card.c[1] == null ? card.c[0].v : card.c[0].v + card.c[1].v}
          />
        ))}
      </div>
    </>
  );
}

export default CardList;
