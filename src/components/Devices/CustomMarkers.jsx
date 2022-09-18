import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Popup, Marker } from 'react-leaflet';
import useLocationContext from "../../hooks/useLocationContext";
import styles from './custommarkers.module.scss';

export const CustomMarkers = () => {

    const {locations, delLocation} = useLocationContext();

    const handleDelete = (ip) => {
        delLocation(ip);
    }
    
    return (
        <>
            { 
                locations.length > 0 && locations.map((loc, index) => {
                    const {latitude, longitude, country, region, postal, flag, connection, ip, timezone} = loc;
                    const position = [latitude, longitude];
                
                    return(
                        <Marker position={position} key={index}>
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
                                    <Button 
                                        className='mt-2 w-75' 
                                        variant="danger"
                                        onClick={() => handleDelete(ip)}
                                        >Delete Marker
                                    </Button>
                                </div>
                            </section>
                            </Popup>
                        </Marker>
                    )
                })
            }
        </>
    )
}
