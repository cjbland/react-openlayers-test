import { Box, Container, Stack } from '@mantine/core';
import { OSM } from 'ol/source';
import { Map, View, TileLayer } from '../map';
import 'ol/ol.css';
import 'react-openlayers/dist/index.css'; // for css

export default function App() {
  return (
    <Container>
      <Stack>
        <Box>React-OpenLayers Test App</Box>
        <Box bd="1px solid #000" bdrs="sm" h={400} w="100%">
          <Map
            controls={[]}
            interactions={[]}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer source={new OSM()} />
            <View center={[-10997148, 4569099]} zoom={4} />
          </Map>
        </Box>
      </Stack>
    </Container>
  );
}
