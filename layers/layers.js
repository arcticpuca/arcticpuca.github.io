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
var format_Experimental_4 = new ol.format.GeoJSON();
var features_Experimental_4 = format_Experimental_4.readFeatures(json_Experimental_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Experimental_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Experimental_4.addFeatures(features_Experimental_4);
var lyr_Experimental_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Experimental_4, 
                style: style_Experimental_4,
                popuplayertitle: 'Experimental',
                interactive: true,
                title: '<img src="styles/legend/Experimental_4.png" /> Experimental'
            });
var format_G3Poly_5 = new ol.format.GeoJSON();
var features_G3Poly_5 = format_G3Poly_5.readFeatures(json_G3Poly_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G3Poly_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G3Poly_5.addFeatures(features_G3Poly_5);
var lyr_G3Poly_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G3Poly_5, 
                style: style_G3Poly_5,
                popuplayertitle: 'G3 Poly',
                interactive: true,
                title: '<img src="styles/legend/G3Poly_5.png" /> G3 Poly'
            });
var format_G2Lines_6 = new ol.format.GeoJSON();
var features_G2Lines_6 = format_G2Lines_6.readFeatures(json_G2Lines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G2Lines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G2Lines_6.addFeatures(features_G2Lines_6);
var lyr_G2Lines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G2Lines_6, 
                style: style_G2Lines_6,
                popuplayertitle: 'G2 Lines',
                interactive: true,
                title: '<img src="styles/legend/G2Lines_6.png" /> G2 Lines'
            });
var format_G2Points_7 = new ol.format.GeoJSON();
var features_G2Points_7 = format_G2Points_7.readFeatures(json_G2Points_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_G2Points_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_G2Points_7.addFeatures(features_G2Points_7);
var lyr_G2Points_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_G2Points_7, 
                style: style_G2Points_7,
                popuplayertitle: 'G2 Points',
                interactive: true,
                title: '<img src="styles/legend/G2Points_7.png" /> G2 Points'
            });

lyr_YandexSatprojectionerror_0.setVisible(false);lyr_GESatellite_1.setVisible(false);lyr_Sentinel2Cloudless_2.setVisible(false);lyr_OpenStreetMap_3.setVisible(true);lyr_Experimental_4.setVisible(true);lyr_G3Poly_5.setVisible(true);lyr_G2Lines_6.setVisible(true);lyr_G2Points_7.setVisible(true);
var layersList = [lyr_YandexSatprojectionerror_0,lyr_GESatellite_1,lyr_Sentinel2Cloudless_2,lyr_OpenStreetMap_3,lyr_Experimental_4,lyr_G3Poly_5,lyr_G2Lines_6,lyr_G2Points_7];
lyr_Experimental_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G3Poly_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G2Lines_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_G2Points_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Experimental_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G3Poly_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G2Lines_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_G2Points_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Experimental_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G3Poly_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Lines_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Points_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_G2Points_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});