import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Popup, Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import useLocationContext from "../../hooks/useLocationContext";
import styles from './custommarker.module.scss';

export const CustomMarker = () => {

    const {location, locations, addLocation} = useLocationContext();
    const {latitude, longitude, country, region, postal, flag, connection, ip, timezone} = location;
    const position = [latitude, longitude];

    const [showAddLocation, setShowAddLocation] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let flat = true;
        // console.log(locations);
        setShowAddLocation(true);

        if(locations) {
            for (let index = 0; (index < locations.length) && flat; index++) {
                const pos = locations[index];
                if(pos.latitude == latitude && pos.longitude == longitude) {
                    flat = false;
                    setShowAddLocation(false);  
                } 
            }
        }

    }, [locations, location])
    
    const handleAddMarker = () => {
        addLocation(location);
    }

    return (
        <Marker position={position}>
            <Popup className=''>
            <section className="row d-flex flex-row align-items-start mt-3">
                <article className="col-12 d-flex flex-row align-items-center">
                    <img className={styles.flag} src={flag ? flag.img : ""} alt="" />
                </article>
                <p className={`col-12 text-muted m-0 mt-2 ${styles.flag_paragraf}`}>
                    Country: {country} 
                </p>
                <p className={`col-12 text-muted m-0 mt-1 ${styles.flag_paragraf}`}>
                    Region: {region} 
                </p>
                <p className={`col-12 text-muted m-0 mt-1 ${styles.flag_paragraf}`}>
                    Postal: {postal} 
                </p>
                <p className={`col-12 text-muted m-0 mt-1 ${styles.flag_paragraf}`}>
                    IP: {ip} 
                </p>
                <p className={`col-12 text-muted m-0 mt-1 ${styles.flag_paragraf}`}>
                    Latitude: {latitude} 
                </p>
                <p className={`col-12 text-muted m-0 mt-1 ${styles.flag_paragraf}`}>
                    Longitude: {longitude} 
                </p>
                <p className={`col-12 text-muted m-0 mt-1 ${styles.flag_paragraf}`}>
                    Connection: {connection && connection.domain} 
                </p>
                <p className={`col-12 text-muted m-0 mt-1 ${styles.flag_paragraf}`}>
                    ISP: {connection && connection.isp}  
                </p>
                <div className="d-flex flex-row justify-content-center">
                { showAddLocation ? 
                    <Button 
                        className='mt-2 w-75r' 
                        variant="success"
                        onClick={handleAddMarker}
                    >Save Marker
                    </Button>
                    : 
                    <Button 
                        className='mt-2 w-75r' 
                        variant="primary"
                        onClick={() => navigate('/devices')}
                    >See Devices
                    </Button>
                }
                </div>
            </section>
            </Popup>
        </Marker>
    )
}
