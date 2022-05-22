// import React, {useState, Component} from "react";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//
// export class MapContainer extends Component {
//     render() {
//         return (
//             <div style={{maxWidth:'70%',maxHeight:'70%'}}>
//                 <div style={{width:'70vw',height:'70vh'}}>
//                     <Map google={this.props.google} zoom={14}>
//                         <Marker onClick={this.onMarkerClick}
//                                 name={'Current location'}/>
//
//                         <InfoWindow onClose={this.onInfoWindowClose}>
//                             <div>
//                                 <h2>test</h2>
//                             </div>
//                         </InfoWindow>
//                     </Map>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDajrb51TCrQZSY-kIz0-TnCix_ksN0l4Y")
// })(MapContainer)
