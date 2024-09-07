document.addEventListener('DOMContentLoaded', function () {
    // Get all the proficiency bars and sliders
    var dartProficiencyBar = document.getElementById('dartProficiency');
    var dartSlider = document.getElementById('dartSlider');
    var flutterProficiencyBar = document.getElementById('flutterProficiency');
    var flutterSlider = document.getElementById('flutterSlider');
    var htmlCssProficiencyBar = document.getElementById('htmlCssProficiency');
    var htmlCssSlider = document.getElementById('htmlCssSlider');
    var androidNativeProficiencyBar = document.getElementById('androidNativeProficiency');
    var androidNativeSlider = document.getElementById('androidNativeSlider');
    // Update proficiency bar width based on slider input for each skill
    dartSlider.addEventListener('input', function () {
        dartProficiencyBar.style.width = dartSlider.value + '%';
    });
    flutterSlider.addEventListener('input', function () {
        flutterProficiencyBar.style.width = flutterSlider.value + '%';
    });
    htmlCssSlider.addEventListener('input', function () {
        htmlCssProficiencyBar.style.width = htmlCssSlider.value + '%';
    });
    androidNativeSlider.addEventListener('input', function () {
        androidNativeProficiencyBar.style.width = androidNativeSlider.value + '%';
    });
});
