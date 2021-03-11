import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import Banner from "../Banner/Banner";
import Download from "../Download/Download";

// Images
import speedImage from '../../static/images/electric.png'
import effecientImage from '../../static/images/effecient.png'
import powerImage from '../../static/images/power.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cont">
        <Banner />
        <div className="sections">
          <Section image={speedImage} title="speed." side="l" imageSize="speedImage">
            electric's advanced concurrency management system makes it anywhere from 2x to 15x faster than its opposition.
          </Section>
          <Section image={effecientImage} title="effeciency." side="r" className="martop" imageSize="effecientImage">
            electric is the first windows package manager to officially support installing packages concurrently, because effeciency matters.
          </Section>
          <Section image={powerImage} title="power." side="l" imageSize="powerImage">
            electric can install over 2000 packages out of the box along with installing portable non-admin software
          </Section>
        </div>
        <Download />
      </div>
    </div>
  );
}

export default App;
