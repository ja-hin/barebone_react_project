import Card from "./Card";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <article
      id="cards"
      style={{
        width: "100%",
        height: "22vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor:'{data?.color}',
      }}
    >
      {data.map((item) => {
        return <Card key={item.title} data={item} />;
      })}
    </article>
  );
};

export default Cards;
