import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Banner from "../Banner/Banner";
import TerminalAnimation from "../TerminalAnimation/TerminalAnimation";
import MiniPackageSearch from "../MiniPackageSearch/MiniPackageSearch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cont">
        <Banner />
        <TerminalAnimation />
        <div className="cards row">
          <div className="col-lg-4">
            <Card title="speed." >
              electric's advanced concurrency management system makes it anywhere from 2x to 15x faster than its opposition.
          </Card>
          </div>
          <div className="col-lg-4">
            <Card title="effeciency.">
              electric is the first windows package manager to officially support installing packages concurrently, because effeciency matters.
            </Card>
          </div>
          <div className="col-lg-4">
            <Card title="power.">
              electric can install over 2000 packages out of the box along with installing portable non-admin software
          </Card>
          </div>
        </div>
        <MiniPackageSearch />
      </div>
    </div>
  );
}

export default App;
