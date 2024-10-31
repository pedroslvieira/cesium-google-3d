import {
  Cartesian3,
  Math as CesiumMath,
  Terrain,
  Viewer,
  createGooglePhotorealistic3DTileset,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(7.444409, 46.343684, 2300),
  orientation: {
    heading: CesiumMath.toRadians(-50.0),
    pitch: CesiumMath.toRadians(-25.0),
  },
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
createGooglePhotorealistic3DTileset().then((buildingTileset) => {
  viewer.scene.primitives.add(buildingTileset);
});
