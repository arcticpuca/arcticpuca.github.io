var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_G4Poly_1 = new ol.format.GeoJSON();
var features_G4Poly_1 = format_G4Poly_1.readFeatures(json_G4Poly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G4Poly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G4Poly_1.addFeatures(features_G4Poly_1);
var lyr_G4Poly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G4Poly_1, 
                style: style_G4Poly_1,
                popuplayertitle: 'G4 Poly',
                interactive: true,
                title: '<img src="styles/legend/G4Poly_1.png" /> G4 Poly'
            });
var format_G4Lines_2 = new ol.format.GeoJSON();
var features_G4Lines_2 = format_G4Lines_2.readFeatures(json_G4Lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G4Lines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G4Lines_2.addFeatures(features_G4Lines_2);
var lyr_G4Lines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G4Lines_2, 
                style: style_G4Lines_2,
                popuplayertitle: 'G4 Lines',
                interactive: true,
                title: '<img src="styles/legend/G4Lines_2.png" /> G4 Lines'
            });
var format_G4Points_3 = new ol.format.GeoJSON();
var features_G4Points_3 = format_G4Points_3.readFeatures(json_G4Points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G4Points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G4Points_3.addFeatures(features_G4Points_3);
var lyr_G4Points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G4Points_3, 
                style: style_G4Points_3,
                popuplayertitle: 'G4 Points',
                interactive: true,
                title: '<img src="styles/legend/G4Points_3.png" /> G4 Points'
            });
var format_G3Poly_4 = new ol.format.GeoJSON();
var features_G3Poly_4 = format_G3Poly_4.readFeatures(json_G3Poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G3Poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G3Poly_4.addFeatures(features_G3Poly_4);
var lyr_G3Poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G3Poly_4, 
                style: style_G3Poly_4,
                popuplayertitle: 'G3 Poly',
                interactive: true,
                title: '<img src="styles/legend/G3Poly_4.png" /> G3 Poly'
            });
var format_G3Lines_5 = new ol.format.GeoJSON();
var features_G3Lines_5 = format_G3Lines_5.readFeatures(json_G3Lines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G3Lines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G3Lines_5.addFeatures(features_G3Lines_5);
var lyr_G3Lines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G3Lines_5, 
                style: style_G3Lines_5,
                popuplayertitle: 'G3 Lines',
                interactive: true,
                title: '<img src="styles/legend/G3Lines_5.png" /> G3 Lines'
            });
var format_G3Points_6 = new ol.format.GeoJSON();
var features_G3Points_6 = format_G3Points_6.readFeatures(json_G3Points_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G3Points_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G3Points_6.addFeatures(features_G3Points_6);
var lyr_G3Points_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G3Points_6, 
                style: style_G3Points_6,
                popuplayertitle: 'G3 Points',
                interactive: true,
                title: '<img src="styles/legend/G3Points_6.png" /> G3 Points'
            });
var format_G2Poly_7 = new ol.format.GeoJSON();
var features_G2Poly_7 = format_G2Poly_7.readFeatures(json_G2Poly_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G2Poly_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G2Poly_7.addFeatures(features_G2Poly_7);
var lyr_G2Poly_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G2Poly_7, 
                style: style_G2Poly_7,
                popuplayertitle: 'G2 Poly',
                interactive: true,
                title: '<img src="styles/legend/G2Poly_7.png" /> G2 Poly'
            });
var format_G2Lines_8 = new ol.format.GeoJSON();
var features_G2Lines_8 = format_G2Lines_8.readFeatures(json_G2Lines_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G2Lines_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G2Lines_8.addFeatures(features_G2Lines_8);
var lyr_G2Lines_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G2Lines_8, 
                style: style_G2Lines_8,
                popuplayertitle: 'G2 Lines',
                interactive: true,
                title: '<img src="styles/legend/G2Lines_8.png" /> G2 Lines'
            });
var format_G1Poly_9 = new ol.format.GeoJSON();
var features_G1Poly_9 = format_G1Poly_9.readFeatures(json_G1Poly_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G1Poly_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G1Poly_9.addFeatures(features_G1Poly_9);
var lyr_G1Poly_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G1Poly_9, 
                style: style_G1Poly_9,
                popuplayertitle: 'G1 Poly',
                interactive: true,
                title: '<img src="styles/legend/G1Poly_9.png" /> G1 Poly'
            });
var format_G1Lines_10 = new ol.format.GeoJSON();
var features_G1Lines_10 = format_G1Lines_10.readFeatures(json_G1Lines_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G1Lines_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G1Lines_10.addFeatures(features_G1Lines_10);
var lyr_G1Lines_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G1Lines_10, 
                style: style_G1Lines_10,
                popuplayertitle: 'G1 Lines',
                interactive: true,
                title: '<img src="styles/legend/G1Lines_10.png" /> G1 Lines'
            });
var format_G1Points_11 = new ol.format.GeoJSON();
var features_G1Points_11 = format_G1Points_11.readFeatures(json_G1Points_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G1Points_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G1Points_11.addFeatures(features_G1Points_11);
var lyr_G1Points_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G1Points_11, 
                style: style_G1Points_11,
                popuplayertitle: 'G1 Points',
                interactive: true,
                title: '<img src="styles/legend/G1Points_11.png" /> G1 Points'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_G4Poly_1.setVisible(true);lyr_G4Lines_2.setVisible(true);lyr_G4Points_3.setVisible(true);lyr_G3Poly_4.setVisible(true);lyr_G3Lines_5.setVisible(true);lyr_G3Points_6.setVisible(true);lyr_G2Poly_7.setVisible(true);lyr_G2Lines_8.setVisible(true);lyr_G1Poly_9.setVisible(true);lyr_G1Lines_10.setVisible(true);lyr_G1Points_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_G4Poly_1,lyr_G4Lines_2,lyr_G4Points_3,lyr_G3Poly_4,lyr_G3Lines_5,lyr_G3Points_6,lyr_G2Poly_7,lyr_G2Lines_8,lyr_G1Poly_9,lyr_G1Lines_10,lyr_G1Points_11];
lyr_G4Poly_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G4Lines_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G4Points_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G3Poly_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G3Lines_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G3Points_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G2Poly_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G2Lines_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G1Poly_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G1Lines_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G1Points_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G4Poly_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G4Lines_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G4Points_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G3Poly_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G3Lines_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G3Points_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G2Poly_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G2Lines_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G1Poly_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G1Lines_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G1Points_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G4Poly_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G4Lines_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G4Points_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G3Poly_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G3Lines_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G3Points_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Poly_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Lines_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G1Poly_9.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G1Lines_10.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G1Points_11.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G1Points_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});