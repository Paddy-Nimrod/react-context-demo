import LevelContext from "../utils/levelContext";

function Section({ level, children }) {
  return (
    <section className="">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

export default Section;
