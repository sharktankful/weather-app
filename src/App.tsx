import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "city" "temp" "sky"`,
      lg: `"nav city" "temp sky"` //1024px
    }}>
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>
      <GridItem area={"city"} bg={"gold"}>
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
