import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const names = ["John", "Jane", "Doe", "Smith", "Alice"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="dark" onClick={() => console.log("Clicked")}>
        Hello Button
      </Button>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={names}
        heading="Names"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
