import { useState } from "react";
import "./App.css";
import { Header, Body } from "./containers";
import { useDispatch, useSelector } from "react-redux";
import { setAirline } from "./store/actions/airline";
import { useEffect } from "react";

function App() {
  const airlineStore = useSelector((state) => state.airlinesReducer.airline);
  const dispatch = useDispatch();
  const [state, setState] = useState(airlineStore);

  const handleAirline = (payload) => {
    dispatch(setAirline(payload));
  };

  useEffect(() => {
    setState(airlineStore);
  }, [handleAirline]);

  return (
    <div className="App">
      <Header handleAirline={handleAirline} />
      <Body airline={state} />
    </div>
  );
}

export default App;
