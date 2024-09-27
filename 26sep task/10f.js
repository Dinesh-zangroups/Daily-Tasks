function toggleButton(selector) 
{
    const button = document.querySelector(selector);
    if (!button.classList.contains('tog')) 
    {
      button.classList.add('tog');
    } 
    else 
    {
      button.classList.remove('tog');
    }
  }