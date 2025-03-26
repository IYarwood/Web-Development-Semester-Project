document.addEventListener('DOMContentLoaded', () => {
    const daysSelect = document.getElementById('days');
   
   
    const mwfContainer = document.getElementById('mwfContainer');
    const mwContainer = document.getElementById('mwContainer');
    const tthContainer = document.getElementById('tthContainer');
    const singleContainer = document.getElementById('singleContainer');
 
    function showRelevantTimeDropdown() {
      mwfContainer.hidden = true;
      mwContainer.hidden = true;
      tthContainer.hidden = true;
      singleContainer.hidden = true;
 
      switch (daysSelect.value) {
        case 'mwf':
          mwfContainer.hidden = false;
          break;
        case 'mw':
          mwContainer.hidden = false;
          break;
        case 'tth':
          tthContainer.hidden = false;
          break;
        case 'm':
        case 't':
        case 'th':
          singleContainer.hidden = false;
          break;
        default:
          break;
      }
    }
 
   
    daysSelect.addEventListener('change', showRelevantTimeDropdown);
 
   
    showRelevantTimeDropdown();
  });