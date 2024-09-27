function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('tog')) 
    {
      turnOff();
  
      button.classList.add('tog');
    } 
    else 
    {
      button.classList.remove('tog');
    }
  }
  
  function turnOff() 
  {
    const previousButton = document.querySelector('.tog');
    if (previousButton) 
        {
      previousButton.classList.remove('tog');
    }
  }