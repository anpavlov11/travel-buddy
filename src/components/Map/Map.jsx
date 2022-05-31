import React from 'react';
import GoogleMapReact from 'google-map-react';
// eslint-disable-next-line
import { Paper, Typography } from '@material-ui/core';
// eslint-disable-next-line
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// eslint-disable-next-line
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const coordinates = { lat: 0, lng: 0 };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCPUqCUqjdmarU2B4Yrhw8q3cTARlMLHHg' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}
export default Map;