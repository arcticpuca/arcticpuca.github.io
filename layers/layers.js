var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EUMENOTAMpolygons_1 = new ol.format.GeoJSON();
var features_EUMENOTAMpolygons_1 = format_EUMENOTAMpolygons_1.readFeatures(json_EUMENOTAMpolygons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUMENOTAMpolygons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUMENOTAMpolygons_1.addFeatures(features_EUMENOTAMpolygons_1);
var lyr_EUMENOTAMpolygons_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUMENOTAMpolygons_1, 
                style: style_EUMENOTAMpolygons_1,
                popuplayertitle: 'EU/ME NOTAM polygons',
                interactive: true,
                title: '<img src="styles/legend/EUMENOTAMpolygons_1.png" /> EU/ME NOTAM polygons'
            });
var format_EUMENOTAMlines_2 = new ol.format.GeoJSON();
var features_EUMENOTAMlines_2 = format_EUMENOTAMlines_2.readFeatures(json_EUMENOTAMlines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUMENOTAMlines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUMENOTAMlines_2.addFeatures(features_EUMENOTAMlines_2);
var lyr_EUMENOTAMlines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUMENOTAMlines_2, 
                style: style_EUMENOTAMlines_2,
                popuplayertitle: 'EU/ME NOTAM lines',
                interactive: true,
                title: '<img src="styles/legend/EUMENOTAMlines_2.png" /> EU/ME NOTAM lines'
            });
var format_EUMENOTAMpoints_3 = new ol.format.GeoJSON();
var features_EUMENOTAMpoints_3 = format_EUMENOTAMpoints_3.readFeatures(json_EUMENOTAMpoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUMENOTAMpoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUMENOTAMpoints_3.addFeatures(features_EUMENOTAMpoints_3);
var lyr_EUMENOTAMpoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUMENOTAMpoints_3, 
                style: style_EUMENOTAMpoints_3,
                popuplayertitle: 'EU/ME NOTAM points',
                interactive: true,
                title: '<img src="styles/legend/EUMENOTAMpoints_3.png" /> EU/ME NOTAM points'
            });
var format_RestofWorldNOTAMpolygons_4 = new ol.format.GeoJSON();
var features_RestofWorldNOTAMpolygons_4 = format_RestofWorldNOTAMpolygons_4.readFeatures(json_RestofWorldNOTAMpolygons_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestofWorldNOTAMpolygons_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestofWorldNOTAMpolygons_4.addFeatures(features_RestofWorldNOTAMpolygons_4);
var lyr_RestofWorldNOTAMpolygons_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestofWorldNOTAMpolygons_4, 
                style: style_RestofWorldNOTAMpolygons_4,
                popuplayertitle: 'Rest of World NOTAM polygons',
                interactive: true,
                title: '<img src="styles/legend/RestofWorldNOTAMpolygons_4.png" /> Rest of World NOTAM polygons'
            });
var format_RestofWorldNOTAMlines_5 = new ol.format.GeoJSON();
var features_RestofWorldNOTAMlines_5 = format_RestofWorldNOTAMlines_5.readFeatures(json_RestofWorldNOTAMlines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestofWorldNOTAMlines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestofWorldNOTAMlines_5.addFeatures(features_RestofWorldNOTAMlines_5);
var lyr_RestofWorldNOTAMlines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestofWorldNOTAMlines_5, 
                style: style_RestofWorldNOTAMlines_5,
                popuplayertitle: 'Rest of World NOTAM lines',
                interactive: true,
                title: '<img src="styles/legend/RestofWorldNOTAMlines_5.png" /> Rest of World NOTAM lines'
            });
var format_RestofWorldNOTAMpoints_6 = new ol.format.GeoJSON();
var features_RestofWorldNOTAMpoints_6 = format_RestofWorldNOTAMpoints_6.readFeatures(json_RestofWorldNOTAMpoints_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestofWorldNOTAMpoints_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestofWorldNOTAMpoints_6.addFeatures(features_RestofWorldNOTAMpoints_6);
var lyr_RestofWorldNOTAMpoints_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestofWorldNOTAMpoints_6, 
                style: style_RestofWorldNOTAMpoints_6,
                popuplayertitle: 'Rest of World NOTAM points',
                interactive: true,
                title: '<img src="styles/legend/RestofWorldNOTAMpoints_6.png" /> Rest of World NOTAM points'
            });
var format_RussianNOTAMpolygons_7 = new ol.format.GeoJSON();
var features_RussianNOTAMpolygons_7 = format_RussianNOTAMpolygons_7.readFeatures(json_RussianNOTAMpolygons_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RussianNOTAMpolygons_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RussianNOTAMpolygons_7.addFeatures(features_RussianNOTAMpolygons_7);
var lyr_RussianNOTAMpolygons_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RussianNOTAMpolygons_7, 
                style: style_RussianNOTAMpolygons_7,
                popuplayertitle: 'Russian NOTAM polygons',
                interactive: true,
                title: '<img src="styles/legend/RussianNOTAMpolygons_7.png" /> Russian NOTAM polygons'
            });
var format_RussianNOTAMlines_8 = new ol.format.GeoJSON();
var features_RussianNOTAMlines_8 = format_RussianNOTAMlines_8.readFeatures(json_RussianNOTAMlines_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RussianNOTAMlines_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RussianNOTAMlines_8.addFeatures(features_RussianNOTAMlines_8);
var lyr_RussianNOTAMlines_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RussianNOTAMlines_8, 
                style: style_RussianNOTAMlines_8,
                popuplayertitle: 'Russian NOTAM lines',
                interactive: true,
                title: '<img src="styles/legend/RussianNOTAMlines_8.png" /> Russian NOTAM lines'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EUMENOTAMpolygons_1.setVisible(true);lyr_EUMENOTAMlines_2.setVisible(true);lyr_EUMENOTAMpoints_3.setVisible(true);lyr_RestofWorldNOTAMpolygons_4.setVisible(true);lyr_RestofWorldNOTAMlines_5.setVisible(true);lyr_RestofWorldNOTAMpoints_6.setVisible(true);lyr_RussianNOTAMpolygons_7.setVisible(true);lyr_RussianNOTAMlines_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EUMENOTAMpolygons_1,lyr_EUMENOTAMlines_2,lyr_EUMENOTAMpoints_3,lyr_RestofWorldNOTAMpolygons_4,lyr_RestofWorldNOTAMlines_5,lyr_RestofWorldNOTAMpoints_6,lyr_RussianNOTAMpolygons_7,lyr_RussianNOTAMlines_8];
lyr_EUMENOTAMpolygons_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EUMENOTAMlines_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EUMENOTAMpoints_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RestofWorldNOTAMpolygons_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RestofWorldNOTAMlines_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RestofWorldNOTAMpoints_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RussianNOTAMpolygons_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RussianNOTAMlines_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EUMENOTAMpolygons_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_EUMENOTAMlines_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_EUMENOTAMpoints_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RestofWorldNOTAMpolygons_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RestofWorldNOTAMlines_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RestofWorldNOTAMpoints_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RussianNOTAMpolygons_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RussianNOTAMlines_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_EUMENOTAMpolygons_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_EUMENOTAMlines_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_EUMENOTAMpoints_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RestofWorldNOTAMpolygons_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RestofWorldNOTAMlines_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RestofWorldNOTAMpoints_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RussianNOTAMpolygons_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RussianNOTAMlines_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RussianNOTAMlines_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});