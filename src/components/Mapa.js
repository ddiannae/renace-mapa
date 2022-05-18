import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "../styles/map.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const Mapa = ({ allGrupos }) => {

    return (
        <MapContainer center={[23.6492, -102.5154]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            allGrupos.map(grupo => (
                <Marker 
                    key={grupo._id}
                    position={[grupo.latitud, grupo.longitud]} 
                    icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                    <Popup>
                     <b>{grupo.nombreEncargado}</b> <br /> Easily customizable.
                    </Popup>
                </Marker>
            ))
        }

        
        </MapContainer>
    );
};

export default Mapa;
