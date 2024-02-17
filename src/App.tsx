import { Show, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        // nav nav aside main
        base: `"nav main"`,
        lg: `"nav nav aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="nav" bg="yellow">
        Nav
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="white">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="pink">
        Main
      </GridItem>
    </Grid>
  );
}
export default App;
