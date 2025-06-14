var wms_layers = [];


        var lyr_YandexSatprojectionerror_0 = new ol.layer.Tile({
            'title': 'Yandex Sat (projection error)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_GESatellite_1 = new ol.layer.Tile({
            'title': 'GE Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Sentinel2Cloudless_2 = new ol.layer.Tile({
            'title': 'Sentinel 2 Cloudless',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_G5Poly_4 = new ol.format.GeoJSON();
var features_G5Poly_4 = format_G5Poly_4.readFeatures(json_G5Poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G5Poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G5Poly_4.addFeatures(features_G5Poly_4);
var lyr_G5Poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G5Poly_4, 
                style: style_G5Poly_4,
                popuplayertitle: 'G5 Poly',
                interactive: true,
                title: '<img src="styles/legend/G5Poly_4.png" /> G5 Poly'
            });
var format_G5Lines_5 = new ol.format.GeoJSON();
var features_G5Lines_5 = format_G5Lines_5.readFeatures(json_G5Lines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G5Lines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G5Lines_5.addFeatures(features_G5Lines_5);
var lyr_G5Lines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G5Lines_5, 
                style: style_G5Lines_5,
                popuplayertitle: 'G5 Lines',
                interactive: true,
                title: '<img src="styles/legend/G5Lines_5.png" /> G5 Lines'
            });
var format_G5Points_6 = new ol.format.GeoJSON();
var features_G5Points_6 = format_G5Points_6.readFeatures(json_G5Points_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G5Points_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G5Points_6.addFeatures(features_G5Points_6);
var lyr_G5Points_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G5Points_6, 
                style: style_G5Points_6,
                popuplayertitle: 'G5 Points',
                interactive: true,
                title: '<img src="styles/legend/G5Points_6.png" /> G5 Points'
            });
var format_G4Poly_7 = new ol.format.GeoJSON();
var features_G4Poly_7 = format_G4Poly_7.readFeatures(json_G4Poly_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G4Poly_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G4Poly_7.addFeatures(features_G4Poly_7);
var lyr_G4Poly_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G4Poly_7, 
                style: style_G4Poly_7,
                popuplayertitle: 'G4 Poly',
                interactive: true,
                title: '<img src="styles/legend/G4Poly_7.png" /> G4 Poly'
            });
var format_G4Lines_8 = new ol.format.GeoJSON();
var features_G4Lines_8 = format_G4Lines_8.readFeatures(json_G4Lines_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G4Lines_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G4Lines_8.addFeatures(features_G4Lines_8);
var lyr_G4Lines_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G4Lines_8, 
                style: style_G4Lines_8,
                popuplayertitle: 'G4 Lines',
                interactive: true,
                title: '<img src="styles/legend/G4Lines_8.png" /> G4 Lines'
            });
var format_G4Points_9 = new ol.format.GeoJSON();
var features_G4Points_9 = format_G4Points_9.readFeatures(json_G4Points_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G4Points_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G4Points_9.addFeatures(features_G4Points_9);
var lyr_G4Points_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G4Points_9, 
                style: style_G4Points_9,
                popuplayertitle: 'G4 Points',
                interactive: true,
                title: '<img src="styles/legend/G4Points_9.png" /> G4 Points'
            });
var format_G3Poly_10 = new ol.format.GeoJSON();
var features_G3Poly_10 = format_G3Poly_10.readFeatures(json_G3Poly_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G3Poly_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G3Poly_10.addFeatures(features_G3Poly_10);
var lyr_G3Poly_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G3Poly_10, 
                style: style_G3Poly_10,
                popuplayertitle: 'G3 Poly',
                interactive: true,
                title: '<img src="styles/legend/G3Poly_10.png" /> G3 Poly'
            });
var format_G3Points_11 = new ol.format.GeoJSON();
var features_G3Points_11 = format_G3Points_11.readFeatures(json_G3Points_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G3Points_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G3Points_11.addFeatures(features_G3Points_11);
var lyr_G3Points_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G3Points_11, 
                style: style_G3Points_11,
                popuplayertitle: 'G3 Points',
                interactive: true,
                title: '<img src="styles/legend/G3Points_11.png" /> G3 Points'
            });
var format_G2Poly_12 = new ol.format.GeoJSON();
var features_G2Poly_12 = format_G2Poly_12.readFeatures(json_G2Poly_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G2Poly_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G2Poly_12.addFeatures(features_G2Poly_12);
var lyr_G2Poly_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G2Poly_12, 
                style: style_G2Poly_12,
                popuplayertitle: 'G2 Poly',
                interactive: true,
                title: '<img src="styles/legend/G2Poly_12.png" /> G2 Poly'
            });
var format_G2Lines_13 = new ol.format.GeoJSON();
var features_G2Lines_13 = format_G2Lines_13.readFeatures(json_G2Lines_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G2Lines_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G2Lines_13.addFeatures(features_G2Lines_13);
var lyr_G2Lines_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G2Lines_13, 
                style: style_G2Lines_13,
                popuplayertitle: 'G2 Lines',
                interactive: true,
                title: '<img src="styles/legend/G2Lines_13.png" /> G2 Lines'
            });
var format_G2Points_14 = new ol.format.GeoJSON();
var features_G2Points_14 = format_G2Points_14.readFeatures(json_G2Points_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G2Points_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G2Points_14.addFeatures(features_G2Points_14);
var lyr_G2Points_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G2Points_14, 
                style: style_G2Points_14,
                popuplayertitle: 'G2 Points',
                interactive: true,
                title: '<img src="styles/legend/G2Points_14.png" /> G2 Points'
            });
var format_G1Poly_15 = new ol.format.GeoJSON();
var features_G1Poly_15 = format_G1Poly_15.readFeatures(json_G1Poly_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G1Poly_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G1Poly_15.addFeatures(features_G1Poly_15);
var lyr_G1Poly_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G1Poly_15, 
                style: style_G1Poly_15,
                popuplayertitle: 'G1 Poly',
                interactive: true,
                title: '<img src="styles/legend/G1Poly_15.png" /> G1 Poly'
            });
var format_G1Lines_16 = new ol.format.GeoJSON();
var features_G1Lines_16 = format_G1Lines_16.readFeatures(json_G1Lines_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G1Lines_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G1Lines_16.addFeatures(features_G1Lines_16);
var lyr_G1Lines_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G1Lines_16, 
                style: style_G1Lines_16,
                popuplayertitle: 'G1 Lines',
                interactive: true,
                title: '<img src="styles/legend/G1Lines_16.png" /> G1 Lines'
            });

lyr_YandexSatprojectionerror_0.setVisible(false);lyr_GESatellite_1.setVisible(false);lyr_Sentinel2Cloudless_2.setVisible(false);lyr_OpenStreetMap_3.setVisible(true);lyr_G5Poly_4.setVisible(true);lyr_G5Lines_5.setVisible(true);lyr_G5Points_6.setVisible(true);lyr_G4Poly_7.setVisible(true);lyr_G4Lines_8.setVisible(true);lyr_G4Points_9.setVisible(true);lyr_G3Poly_10.setVisible(true);lyr_G3Points_11.setVisible(true);lyr_G2Poly_12.setVisible(true);lyr_G2Lines_13.setVisible(true);lyr_G2Points_14.setVisible(true);lyr_G1Poly_15.setVisible(true);lyr_G1Lines_16.setVisible(true);
var layersList = [lyr_YandexSatprojectionerror_0,lyr_GESatellite_1,lyr_Sentinel2Cloudless_2,lyr_OpenStreetMap_3,lyr_G5Poly_4,lyr_G5Lines_5,lyr_G5Points_6,lyr_G4Poly_7,lyr_G4Lines_8,lyr_G4Points_9,lyr_G3Poly_10,lyr_G3Points_11,lyr_G2Poly_12,lyr_G2Lines_13,lyr_G2Points_14,lyr_G1Poly_15,lyr_G1Lines_16];
lyr_G5Poly_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G5Lines_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G5Points_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G4Poly_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G4Lines_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G4Points_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G3Poly_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G3Points_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G2Poly_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G2Lines_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G2Points_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G1Poly_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G1Lines_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G5Poly_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G5Lines_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G5Points_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G4Poly_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G4Lines_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G4Points_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G3Poly_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G3Points_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G2Poly_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G2Lines_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G2Points_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G1Poly_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G1Lines_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G5Poly_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G5Lines_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G5Points_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G4Poly_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G4Lines_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G4Points_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G3Poly_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G3Points_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Poly_12.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Lines_13.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Points_14.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G1Poly_15.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G1Lines_16.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G1Lines_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});