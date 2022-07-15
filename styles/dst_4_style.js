var size = 0;
var placement = 'point';

var style_dst_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
   if (feature.get("NAME") !== null && resolution > 100 && resolution < 1000) {
        labelText = String(feature.get("NAME"));
    }
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(191, 0, 255,1.0)', width: 1.5 }),
        fill: new ol.style.Fill({ color: 'rgba(147,150,221,0.0)' }),
        text: new ol.style.Text({
            align: 'end',
            text: labelText,
            font: labelFont,
            fill: new ol.style.Fill({ color: 'yellow' }),
            stroke: new ol.style.Stroke({ color: 'black', width: 0 })
        })
    })];

    return style;
};
