import Section from "./components/Section";

import "./App.css";
import Heading from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Section>
          <Heading>Title 1</Heading>
          <Section>
            <Heading>Title 2</Heading>
            <Heading>Title 2</Heading>
            <Section>
              <Heading>Title 3</Heading>
              <Heading>Title 3</Heading>
            </Section>
          </Section>
        </Section>
      </div>
    </>
  );
}

export default App;
