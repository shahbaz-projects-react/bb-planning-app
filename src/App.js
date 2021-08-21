import React from "react";
import { MainContainer } from "./components/MainContainer";
import { store,StateProvider } from "./redux/store";
import Typography from "@material-ui/core/Typography";
import Inputs from "./components/Inputs";
import DataTable from "./components/Table";

function App() {
  /**Two ways - 1 with useContext Hook */
  // const globalState = useContext(store);
  // const { appName } = globalState;
  /**2 using Consumer with the callback */
  const { Consumer } = store;
  return (
    <div className="App">
    <StateProvider>
      <MainContainer>
        {/* <Typography variant="h4" component="h1" gutterBottom>
          {appName}
        </Typography> */}
        <Consumer>
          {({ state }) => (
            <>
              <Typography variant="h4" component="h1" gutterBottom>
                {state.appName}
              </Typography>
              <Inputs />
              <DataTable />
            </>
          )}
        </Consumer>
      </MainContainer>
    </StateProvider>
    </div>
  );
}

export default App;