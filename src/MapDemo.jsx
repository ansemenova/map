import React, {Component} from 'react';
import {Circle, HereMap, Marker, PathFinder, Polygon, Polyline, Rectangle} from 'rc-here-maps';

/**
 * Renders a simple map.
 * "map-container" should have some width and height for the map to display on screen.
 */
class MapDemo extends Component {
    constructor(props) {
        super(props);

        this.center = {
            lat: 52.51,
            lng: 13.4,
        };

        this.bounds = {
            north: 53.1,
            south: 13.1,
            east: 43.1,
            west: 40.1,
        };
    }

    onPolylineDrawn = () => {
        console.log('asssssssssspolyline drawn');
    };

    onPolygonDrawn = () => {
        console.log('aaaaaaaaaPolygon drawn');
    };

    onCircleDrawn = () => {
        console.log('circle drawn');
    };

    onRectangleDrawn = () => {
        console.log('sssssssrectangle drawn');
    };

    render() {
        return (
            <div className="map-container">
                <HereMap appId="IiNdIfZEPkcOnfxa0ZAv" appCode="7Co8hznkOj36-kBEe3uo4w" useHTTPS center={this.center}>
                    <Marker lat={52.21} lng={13.4}>
                        This is a sample marker
                    </Marker>

                    <Polyline
                        dataPoints={[52, 48, 100, 42, 77, 100]}
                        strokeColor="#HexCode"
                        lineWidth={3}
                        onPolylineDrawn={this.onPolylineDrawn}
                    />

                    <Polygon
                        dataPoints={[52, 48, 100, 42, 77, 100]}
                        fillColor="#HexCode"
                        strokeColor="#HexCode"
                        lineWidth={3}
                        onPolylineDrawn={this.onPolygonDrawn}
                    />

                    <Circle
                        center={this.center}
                        radius={1000}
                        fillColor="#HexCode"
                        strokeColor="#HexCode"
                        onCircleDrawn={this.onCircleDrawn}
                    />

                    <Rectangle
                        bounds={this.bounds}
                        fillColor="#HexCode"
                        strokeColor="#HexCode"
                        onRectangleDrawn={this.onRectangleDrawn}
                    />

                    <PathFinder waypoints={[{lat: 52.516, lng: 13.3779}, {lat: 52.5206, lng: 13.3862}]}/>
                    <PathFinder
                        waypoints={[{lat: 52.516, lng: 13.3779}, {lat: 52.518, lng: 13.4062}, {
                            lat: 52.519,
                            lng: 13.4162
                        }]}
                        style={{
                            lineWidth: 10,
                            strokeColor: 'rgba(220, 220, 0, 0.9)',
                        }}
                    />
                </HereMap>
            </div>
        );
    }
};

export default MapDemo;