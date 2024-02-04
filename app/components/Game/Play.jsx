import Card from "./Card";


export default function Play({ playerName }) {
  return (
    <section className="h-screen p-4">
      <h1 className="text-4xl pb-2">{playerName}</h1>
      <Card />
    </section>
  );
}
