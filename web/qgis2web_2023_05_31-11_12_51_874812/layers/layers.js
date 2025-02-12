var wms_layers = [];

var format_IND_adm1_0 = new ol.format.GeoJSON();
var features_IND_adm1_0 = format_IND_adm1_0.readFeatures(json_IND_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_0.addFeatures(features_IND_adm1_0);
var lyr_IND_adm1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_adm1_0, 
                style: style_IND_adm1_0,
                interactive: true,
                title: '<img src="styles/legend/IND_adm1_0.png" /> IND_adm1'
            });
var format_Refactored_1 = new ol.format.GeoJSON();
var features_Refactored_1 = format_Refactored_1.readFeatures(json_Refactored_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_1.addFeatures(features_Refactored_1);
var lyr_Refactored_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refactored_1, 
                style: style_Refactored_1,
                interactive: true,
    title: 'Refactored<br />\
    <img src="styles/legend/Refactored_1_0.png" /> 0 - 4.6<br />\
    <img src="styles/legend/Refactored_1_1.png" /> 4.6 - 6.5<br />\
    <img src="styles/legend/Refactored_1_2.png" /> 6.5 - 13.9<br />\
    <img src="styles/legend/Refactored_1_3.png" /> 13.9 - 20<br />\
    <img src="styles/legend/Refactored_1_4.png" /> 20 - 74.5<br />'
        });

lyr_IND_adm1_0.setVisible(true);lyr_Refactored_1.setVisible(true);
var layersList = [lyr_IND_adm1_0,lyr_Refactored_1];
lyr_IND_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'ue in india_Date': 'ue in india_Date', 'ue in india_Estimated Unemployment Rate (%)': 'ue in india_Estimated Unemployment Rate (%)', 'ue in india_Estimated Employed': 'ue in india_Estimated Employed', 'ue in india_Estimated Labour Participation Rate (%)': 'ue in india_Estimated Labour Participation Rate (%)', 'ue in india_Area': 'ue in india_Area', });
lyr_Refactored_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'ue in india_Date': 'ue in india_Date', 'Estimated Unemployment Rate (%)': 'Estimated Unemployment Rate (%)', 'Estimated Employed': 'Estimated Employed', 'Estimated Labour Participation Rate (%)': 'Estimated Labour Participation Rate (%)', 'Area': 'Area', });
lyr_IND_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'ue in india_Date': 'TextEdit', 'ue in india_Estimated Unemployment Rate (%)': 'TextEdit', 'ue in india_Estimated Employed': 'TextEdit', 'ue in india_Estimated Labour Participation Rate (%)': 'TextEdit', 'ue in india_Area': 'TextEdit', });
lyr_Refactored_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'ue in india_Date': 'TextEdit', 'Estimated Unemployment Rate (%)': 'TextEdit', 'Estimated Employed': 'TextEdit', 'Estimated Labour Participation Rate (%)': 'TextEdit', 'Area': 'TextEdit', });
lyr_IND_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'ue in india_Date': 'no label', 'ue in india_Estimated Unemployment Rate (%)': 'no label', 'ue in india_Estimated Employed': 'no label', 'ue in india_Estimated Labour Participation Rate (%)': 'no label', 'ue in india_Area': 'no label', });
lyr_Refactored_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'inline label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'ue in india_Date': 'inline label', 'Estimated Unemployment Rate (%)': 'inline label', 'Estimated Employed': 'inline label', 'Estimated Labour Participation Rate (%)': 'inline label', 'Area': 'inline label', });
lyr_Refactored_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});