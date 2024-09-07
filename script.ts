document.addEventListener('DOMContentLoaded', () => {
  // Get all the proficiency bars and sliders
  const dartProficiencyBar = document.getElementById('dartProficiency') as HTMLElement;
  const dartSlider = document.getElementById('dartSlider') as HTMLInputElement;

  const flutterProficiencyBar = document.getElementById('flutterProficiency') as HTMLElement;
  const flutterSlider = document.getElementById('flutterSlider') as HTMLInputElement;

  const htmlCssProficiencyBar = document.getElementById('htmlCssProficiency') as HTMLElement;
  const htmlCssSlider = document.getElementById('htmlCssSlider') as HTMLInputElement;

  const androidNativeProficiencyBar = document.getElementById('androidNativeProficiency') as HTMLElement;
  const androidNativeSlider = document.getElementById('androidNativeSlider') as HTMLInputElement;

  // Update proficiency bar width based on slider input for each skill
  dartSlider.addEventListener('input', () => {
    dartProficiencyBar.style.width = dartSlider.value + '%';
  });

  flutterSlider.addEventListener('input', () => {
    flutterProficiencyBar.style.width = flutterSlider.value + '%';
  });

  htmlCssSlider.addEventListener('input', () => {
    htmlCssProficiencyBar.style.width = htmlCssSlider.value + '%';
  });

  androidNativeSlider.addEventListener('input', () => {
    androidNativeProficiencyBar.style.width = androidNativeSlider.value + '%';
  });
});
