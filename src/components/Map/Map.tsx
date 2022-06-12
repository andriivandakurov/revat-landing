import './Map.scss'
import * as React from 'react'
import * as L from 'leaflet'
import { Map, Marker, TileLayer } from 'react-leaflet'

import MapPin from '../../images/map-pin.svg'

import 'leaflet/dist/leaflet.css'

const markerIcon = L.icon
  ? L.icon({
      iconUrl: MapPin,
      iconSize: [24, 40],
      iconAnchor: [12, 40],
    })
  : null

const position = { lat: 49.857206, lng: 24.0377137 }

const MapComponent = () => {
  if (!Map) return null

  return (
    <Map center={position} className="map" zoom={16}>
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      />
      <Marker position={position} icon={markerIcon} />
    </Map>
  )
}

export default MapComponent
