import React, { useState } from 'react';
// eslint-disable-next-line
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceInfo from '../PlaceInfo/PlaceInfo';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType]= useState('restaurants');
    const [rating, setRating]= useState('');
    const places = [
        { name: 'Hot Spot' },
        { name: 'Best Seafood' },
        { name: 'Best Coffee' },
        { name: 'Best Local Spot' },
        { name: 'Best Dessert' },
        { name: 'Best Wine' },
        { name: 'Best Breakfast' },
        { name: 'Best Wings' },
        { name: 'Best Atmosphere' },
    ];
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants, Hotels and Things To Do Nearby</Typography>
            <FormControl className={classes.formControls}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='thing-to-do'>Things To Do Nearby</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControls}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>3.0+</MenuItem>
                    <MenuItem value={4}>4.0+</MenuItem>
                    <MenuItem value={4.5}>4.5+</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceInfo place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
export default List;