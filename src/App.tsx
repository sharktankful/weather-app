import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "nav" "city" "temp" "sky"`,
        lg: `"header header" "nav city" "temp sky"`, //1024px
      }}
    >
      <GridItem area={"header"}>
        <Header/>
      </GridItem>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"city"} bg={"brown"}>
        City
      </GridItem>
      <GridItem area={"temp"} bg={"dodgerblue"}>
        Temp
      </GridItem>
      <GridItem area={"sky"} bg={"green"}>
        Sky
      </GridItem>
    </Grid>
  );
}

export default App;
