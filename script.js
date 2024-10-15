let typeEffect = [];
for(let i = 0; i < 15; i++){
    typeEffect.push('a');
    
    //document.getElementById('typeEffect').innerHTML = abigail_paulus;
}

document.addEventListener("adobe_dc_view_sdk.ready", function()
{
var adobeDCView = new AdobeDC.View({clientId: "cfe8c956b365414aaf54fd6567d63f8f", divId: "adobe-dc-view"});
adobeDCView.previewFile(
{
content:   {location: {url: "https://abbypaulus.github.io/Resources/Paulus_Resume.pdf"}},
metaData: {fileName: "Paulus_Resume.pdf"}
});
});