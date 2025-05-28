import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const names = ["John", "Jane", "Doe", "Smith", "Alice"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Button color="dark" onClick={() => setAlertVisibility(true)}>
        Hello Button
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Found Me!</Alert>
      )}
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
