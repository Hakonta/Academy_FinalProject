import React from 'react'


export default function MarkerComponent()
{
    getProviderMarker = (provider) => {
        switch (provider) {
            case 'Tier': return 'https://maps.google.com/mapfiles/kml/paddle/grn-blank_maps.png'
            case 'Voi': return 'https://maps.google.com/mapfiles/kml/paddle/red-blank_maps.png'
            case 'Zvipp': return 'https://maps.google.com/mapfiles/kml/paddle/blu-blank_maps.png'
            case 'Flash': return 'https://maps.google.com/mapfiles/kml/paddle/pink-blank_maps.png'
        }
    }
    return (
        getProviderMarker()
    )
}