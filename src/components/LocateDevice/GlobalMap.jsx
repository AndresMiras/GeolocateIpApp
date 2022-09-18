import { useEffect } from "react";
import { MapContainer, TileLayer, Popup, useMap } from 'react-leaflet';
import { CustomMarker } from "./CustomMarker";
import useLocationContext from "../../hooks/useLocationContext";
import 'leaflet/dist/leaflet.css';
import styles from './globalmap.module.scss';
import styles2 from '../../styles/errors.module.scss';

export const GlobalMap = () => {
    
    const {latitude, longitude} = useLocationContext().location;
    const position = [latitude, longitude];
    
    
    useEffect(() => {
        const L = require("leaflet");
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, []);

    function SetViewmap() {
        const map = useMap();
        useEffect(() => {
            map.setView(position)
        }, [position]);
        // podemos usar setView o flyTo para ubicar el mapa en tiempo real, lo que cambia es la animación.
        return null
    }
    
    return(
        <>
            {
                latitude ?
                <main className={styles.container}>
                    <div className={styles.map}>
                        <MapContainer className={styles.map} center={position} zoom={6} scrollWheelZoom={true}>
                            <SetViewmap/>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <CustomMarker/>   
                        </MapContainer>
                    </div>
                </main> : <div className="bg-dark mt-5 p-5">
                    <h3 className={`text-danger text-center ${styles2.ip_error_flicker}`}>IP doesn't exist</h3>
                </div>
            } 
        </>
    )
}
