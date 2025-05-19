import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import L from "leaflet";

const Map = () => {
  const location: LatLngTuple = [32.891, 13.341];
  const position: LatLngTuple = [32.890983, 13.341047];
  return (
    <div className="overflow-hidden relative w-[200px] h-[200px] md:w-[720px] md:h-[480px] lg:w-[1020xpx] lg:h-[480px] rounded-lg">
      <MapContainer
        center={location}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl:
                "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl:
                "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>
            <a
              href="https://maps.app.goo.gl/eCpRm9eD6JWKXkZA7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open in Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
