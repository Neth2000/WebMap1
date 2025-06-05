var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DataSession3SriLankaDistrictsshp_1 = new ol.format.GeoJSON();
var features_DataSession3SriLankaDistrictsshp_1 = format_DataSession3SriLankaDistrictsshp_1.readFeatures(json_DataSession3SriLankaDistrictsshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataSession3SriLankaDistrictsshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataSession3SriLankaDistrictsshp_1.addFeatures(features_DataSession3SriLankaDistrictsshp_1);
var lyr_DataSession3SriLankaDistrictsshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataSession3SriLankaDistrictsshp_1, 
                style: style_DataSession3SriLankaDistrictsshp_1,
                popuplayertitle: 'Data Session 3/Sri Lanka Districts.shp',
                interactive: true,
                title: '<img src="styles/legend/DataSession3SriLankaDistrictsshp_1.png" /> Data Session 3/Sri Lanka Districts.shp'
            });
var format_DataSession3SriLankaWaterwaysshp_2 = new ol.format.GeoJSON();
var features_DataSession3SriLankaWaterwaysshp_2 = format_DataSession3SriLankaWaterwaysshp_2.readFeatures(json_DataSession3SriLankaWaterwaysshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataSession3SriLankaWaterwaysshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataSession3SriLankaWaterwaysshp_2.addFeatures(features_DataSession3SriLankaWaterwaysshp_2);
var lyr_DataSession3SriLankaWaterwaysshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataSession3SriLankaWaterwaysshp_2, 
                style: style_DataSession3SriLankaWaterwaysshp_2,
                popuplayertitle: 'Data Session 3/Sri Lanka Waterways.shp',
                interactive: true,
                title: '<img src="styles/legend/DataSession3SriLankaWaterwaysshp_2.png" /> Data Session 3/Sri Lanka Waterways.shp'
            });
var format_DataSession3SriLankaRoadsshp_3 = new ol.format.GeoJSON();
var features_DataSession3SriLankaRoadsshp_3 = format_DataSession3SriLankaRoadsshp_3.readFeatures(json_DataSession3SriLankaRoadsshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataSession3SriLankaRoadsshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataSession3SriLankaRoadsshp_3.addFeatures(features_DataSession3SriLankaRoadsshp_3);
var lyr_DataSession3SriLankaRoadsshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataSession3SriLankaRoadsshp_3, 
                style: style_DataSession3SriLankaRoadsshp_3,
                popuplayertitle: 'Data Session 3/Sri Lanka Roads.shp',
                interactive: true,
                title: '<img src="styles/legend/DataSession3SriLankaRoadsshp_3.png" /> Data Session 3/Sri Lanka Roads.shp'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_DataSession3SriLankaDistrictsshp_1.setVisible(true);lyr_DataSession3SriLankaWaterwaysshp_2.setVisible(true);lyr_DataSession3SriLankaRoadsshp_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_DataSession3SriLankaDistrictsshp_1,lyr_DataSession3SriLankaWaterwaysshp_2,lyr_DataSession3SriLankaRoadsshp_3];
lyr_DataSession3SriLankaDistrictsshp_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_DataSession3SriLankaWaterwaysshp_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_si': 'name_si', 'name_ta': 'name_ta', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_DataSession3SriLankaRoadsshp_3.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_si': 'name_si', 'name_ta': 'name_ta', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_DataSession3SriLankaDistrictsshp_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_DataSession3SriLankaWaterwaysshp_2.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'blockage': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'name_si': 'TextEdit', 'name_ta': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_DataSession3SriLankaRoadsshp_3.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'width': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'source': 'TextEdit', 'name_si': 'TextEdit', 'name_ta': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_DataSession3SriLankaDistrictsshp_1.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_DataSession3SriLankaWaterwaysshp_2.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_si': 'no label', 'name_ta': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_DataSession3SriLankaRoadsshp_3.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_si': 'no label', 'name_ta': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_DataSession3SriLankaRoadsshp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});