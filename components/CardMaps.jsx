"use client"
import React from 'react'
import { GoogleMap, LoadScript, KmlLayer } from '@react-google-maps/api';


const CardMaps = () => {
    const center = {
        lat: 37.774546,
        lng: -122.433523
    }
    
    const containerStyle = {
        width: '100%',
        height: '600px'
    };


  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Bản đồ lộ trình</h1>
      <LoadScript googleMapsApiKey="bỏ google maps key vào đây" >
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} >
                <KmlLayer url="https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml" />
            </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default CardMaps