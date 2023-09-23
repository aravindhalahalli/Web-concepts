import "./App.css";
import BackgroundColorChange from "./components/BgChanger";
// import Card from "./components/Card";
// import Counter from "./components/Counter";
// import Header from "./components/Header";

function App() {
  // let someObject = {
  //   fisrtName : "Deepak",
  //   lastName : "Jha",
  //   location : 'Bihar',
  // }

  // let someArry = [
  //   { id: 0, type: 'circle', x: 50, y: 100 },
  //   { id: 1, type: 'square', x: 150, y: 100 },
  //   { id: 2, type: 'circle', x: 250, y: 100 },
  // ];
  return (
    <>
      <h1 className="text-center bg-green-500">Hello Tailwind css</h1>
      <BackgroundColorChange />
      {/* <Header /> */}
      {/* <Counter /> */}
      {/* <Card username="Aravind" simpleObj={someObject} simpleArr = {someArry}  /> */}
    </>
  );
}

export default App;
