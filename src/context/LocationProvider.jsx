import React, { useState, useEffect } from 'react';
import LocationContext from './LocationContext';
import dataLocation from '../data/dataLocation';
import { call } from '../lib/calls';
import isMovile, {movileCoords} from '../utils/movileUtils';
import * as util from '../utils/utils';

export default function LocationProvider({children}) {

    const [location, setLocation] = useState(dataLocation);
    const [locations, setLocations] = useState();

    const addLocation = (location) => {
        !locations ? setLocations([location]) : 
        setLocations([...locations, location]);
    }

    const delLocation = (ip) => {
        const newLocations = 
        locations.length == 1 ? null :
        locations.filter(locat => locat.ip != ip);

        setLocations(newLocations);
    }

    const getLocationFromIp = (ip) => {
        call(`https://ipwho.is/${ip}`)
            .then(res => {
                let {latitude, longitude, country, region, postal, flag, connection, timezone, ip} = res;
                setLocation((res.success || res) ?
                    {
                        latitude : latitude,
                        longitude : longitude,
                        country : country,
                        region : region,
                        postal : postal,
                        flag : flag,
                        connection : connection,
                        timezone : timezone,
                        ip : ip
                    }
                : null);
            })
            .catch(error => util.print(error))
    }

    useEffect(() => {
        if(location.latitude == null) {
            if(isMovile()) {
                let coords = movileCoords(location);
                setLocation(coords);
            } else {
            call(`https://ipwho.is/`)
                .then(res => {
                    let {latitude, longitude, country, region, postal, flag, connection, timezone, ip} = res;
                    
                    setLocation(
                        {
                            latitude : latitude,
                            longitude : longitude,
                            country : country,
                            region : region,
                            postal : postal,
                            flag : flag,
                            connection : connection,
                            timezone : timezone,
                            ip : ip,
                        }
                    )
                    util.print(location)
                })
                .catch(error => util.print(error))
            }
        }
    }, [])
    // context data is updating here before rendering the component. 


    return (
        <LocationContext.Provider value={{
            location, 
            locations, 
            addLocation,
            delLocation,
            getLocationFromIp,
            }}>

            {children}
        </LocationContext.Provider>
    )
}