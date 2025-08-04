{
  const welcome = () => {
    console.log('Hello, World!');
  };

  welcome();

  const init = () => {
    const toggleHeaderColor = () => {
      const switchHeaderButton = document.querySelector('.article__switchHeaderButton');
      const mainHeader = document.querySelector('.header');
      const mainHeaderDarker = document.querySelector('.js-article__switchHeaderButton');

      const handleHeaderClick = () => {
        mainHeader.classList.toggle('header--darker');
        mainHeaderDarker.innerText = mainHeader.classList.contains('header--darker')
          ? 'domyślny'
          : 'inny';
      };

      switchHeaderButton.addEventListener('click', handleHeaderClick);
    };

    const toggleBackgroundColor = () => {
      const switchBackgroundButton = document.querySelector('.article__switchBackgroundButton');
      const body = document.querySelector('.body');
      const bodyDarker = document.querySelector('.js-article__switchBackgroundButton');

      const handleBackgroundClick = () => {
        body.classList.toggle('body--darker');
        bodyDarker.innerText = body.classList.contains('body--darker') ? 'domyślny' : 'inny';
      };

      switchBackgroundButton.addEventListener('click', handleBackgroundClick);
    };

    toggleHeaderColor();
    toggleBackgroundColor();
  };

  init();
}
