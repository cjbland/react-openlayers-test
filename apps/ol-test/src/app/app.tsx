import { Box, Container, Stack } from '@mantine/core';
import { OSM } from 'ol/source';
import { Map, View, TileLayer } from 'react-openlayers';
import 'react-openlayers/dist/index.css'; // for css

export function App() {
  return (
    <Container>
      <Stack>
        <Box>React-OpenLayers Test App</Box>
        <Box bd="1px solid #000" bdrs="sm" h={400} w="100%">
          <Map controls={[]} interactions={[]}>
            <TileLayer source={new OSM()} />
            <View center={[-10997148, 4569099]} zoom={4} />
          </Map>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
