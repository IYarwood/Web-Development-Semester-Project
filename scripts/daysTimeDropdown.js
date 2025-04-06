  document.addEventListener('DOMContentLoaded', () => {
    const daysSelect = document.getElementById('days');
    const timesSelect = document.getElementById("times");

    const mwfOptions = document.getElementsByClassName("mwf");
    const mwOptions = document.getElementsByClassName("mw");
    const tthOptions = document.getElementsByClassName("tth");
    const singleOptions = document.getElementsByClassName("single");

    const allOptions = {
      "mwf": mwfOptions, 
      "mw": mwOptions, 
      "tth": tthOptions, 
      "single": singleOptions
    };
 
    function showRelevantTimeDropdown() {
      // hide all time options
      for (optionList of Object.values(allOptions)) {
        for (let i=0; i < optionList.length; i++) {
          optionList[i].hidden = true;
        };
      }

      // reset selected time if they change day
      timesSelect.selectedIndex = 0;
 
      // reveal selected days' times
      switch (daysSelect.value) {
        case 'mwf':
        case 'mw':
        case 'tth':
          for (let i=0; i < allOptions[daysSelect.value].length; i++) {
            allOptions[daysSelect.value][i].hidden = false;
          };
          break;
        case 'm':
        case 't':
        case 'th':
          for (let i=0; i < allOptions["single"].length; i++) {
            allOptions["single"][i].hidden = false;
          };
          break;
        default:
          break;
      }
    }
 
   
    daysSelect.addEventListener('change', showRelevantTimeDropdown);
 
   
    showRelevantTimeDropdown();
  });