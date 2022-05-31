import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';
import mapStyles from './mapStyles';
import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCPUqCUqjdmarU2B4Yrhw8q3cTARlMLHHg' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw:e.marginBounds.sw })
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}
export default Map;