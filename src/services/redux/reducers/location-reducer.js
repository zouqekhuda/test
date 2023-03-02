import { createSlice } from '@reduxjs/toolkit'
import { setUserLocation } from '../actions/location-actions'

const initialState = {
    location: {
        latitude: 37.78825,
        longitude: -122.4324,
    },
}

export const locationReducer = createSlice({
    name: 'userLocation',
    initialState,
    reducers: {
        setLocation: setUserLocation,
    },
})

export const { setLocation } = locationReducer.actions

export default locationReducer.reducer