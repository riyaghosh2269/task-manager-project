import "./App.css";
import IdCard from "./components/IdCard";

function App() {
  return (
    <IdCard
      employeeId="SR_21212121"
      joiningDate={new Date(Date.now())}
      name="Renuka Khatun"
      emergencyContact="32323223"
    />
  );
}

export default App;
