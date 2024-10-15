let typeEffect = [];
for(let i = 0; i < 15; i++){
    typeEffect.push('a');
    
    //document.getElementById('typeEffect').innerHTML = abigail_paulus;
}

document.addEventListener("adobe_dc_view_sdk.ready", function()
{
var adobeDCView = new AdobeDC.View({clientId: "aef28bece6ad47a081b57412a4ba6003", divId: "adobe-dc-view"});
adobeDCView.previewFile(
{
content:   {location: {url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
metaData: {fileName: "Paulus_Resume.pdf"}
});
});