var size = 0;
var placement = 'point';

var style_Riv = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(252,248,8, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Name") !== null && resolution > 0 && resolution < 28) {
        labelText = String(feature.get("Name"));
    }
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(50, 56, 241, 0.96)', width: 2 }),
        fill: new ol.style.Fill({ color: 'rgba(255,0,255,0.0)' }),
        text: new ol.style.Text({
            align: 'center',
            text: labelText,
            placement: 'line',
            font: '10px sans-serif',
            fill: new ol.style.Fill({ color: 'yellow', width: 0.8 }),
            stroke: new ol.style.Stroke({ color: 'black', width: 0.8 })
        })
    })];

    return style;
};
