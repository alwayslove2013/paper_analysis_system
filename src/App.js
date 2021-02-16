import logo from "./logo.svg";
import "./App.scss";
import { useEffect } from "react";
import { StoreProvider, useGlobalStore } from "./Store";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <StoreProvider>
      <MainBody />
    </StoreProvider>
  );
}

export default App;

const MainBody = () => {
  const store = useGlobalStore();
  useEffect(() => {
    store.setPapers([1, 2]);
  }, []);
  return (
    <div className="main-body">
      <TestContainer />
    </div>
  );
};

const TestContainer = observer(() => {
  const store = useGlobalStore();
  const { papers } = store;
  console.log("length", papers.length);
  return <div>{papers.length}</div>;
});
