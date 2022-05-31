import React from 'react';
import googleMapReact from 'google-map-react';
import { Paper, Typography } from '@material-ui/core';
import LocationOutlinedIcon from '@material-ui/icons/LocationOutlined';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const coordinates = { lat: 0. lng: 0 };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}
export default Map;