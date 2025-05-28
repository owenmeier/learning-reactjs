import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let names = ["John", "Jane", "Doe", "Smith", "Alice"];
  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      <ListGroup items={names} heading="Names" />
    </div>
  );
}

export default App;
