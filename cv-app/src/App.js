import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"

function App() {
  const data = {
    welcome: "Welcome to component and props corner",
    title: "React",
    subtitle: "Javascript Library",
    user: {
      firstName: "John",
      lastName: "Wick",
    },
    techSkill: ["HTML", "Javascript", "CSS", "React JS"],
    date: new Date(),
  };

  const greetPeople = () => {
    alert("Welcome to my corner");
  };

  const showDate = () => {
    let date = new Date();

    alert(date);
  };

  return (
    <div className="container">
      <div>
        <Header
          welcome={data.welcome}
          title={data.title}
          subtitle={data.subtitle}
        />
      </div>
      <Footer date={data.date} />
      <Main
        user={data.user}
        techSkill={data.techSkill}
        greetPeople={greetPeople}
        showDate={showDate}
      />
    </div>
  );
}

export default App;
