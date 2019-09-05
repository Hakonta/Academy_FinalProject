import React from 'react'

export default function MarkerComponent()
{
    getProviderMarker = (provider) => {
        switch (provider) {
            case 'Tier': return 'http://maps.google.com/mapfiles/kml/paddle/grn-blank_maps.png'
            case 'Voi': return 'http://maps.google.com/mapfiles/kml/paddle/red-blank_maps.png'
            case 'Zvipp': return 'http://maps.google.com/mapfiles/kml/paddle/blu-blank_maps.png'
            case 'Flash': return 'http://maps.google.com/mapfiles/kml/paddle/pink-blank_maps.png'
        }
    }
    return (
        getProviderMarker()
    )
}