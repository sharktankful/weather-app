import { Grid, GridItem, HStack } from "@chakra-ui/react";
import City from "./components/City";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "city" "temp" "sky"`,
        lg: `"nav city" "temp sky"`, //1024px
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>
      <GridItem area={"city"}>
        <City/>
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
