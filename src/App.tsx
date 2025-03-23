import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <SideBar />
        <Main />
      </div>
    </>
  );
};

export default App;
