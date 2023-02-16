function portfolio() {
  const cardDescr = document.querySelectorAll('.portfolio__item__desr'); 
  const cardShortDescr = document.querySelectorAll('.portfolio__item__shortDescr');
  const cardWrapper = document.querySelector('.portfolio__wrapper');
  const cardItems = document.querySelectorAll('.portfolio__item');
  const cardImgs = document.querySelectorAll('.portfolio__item__img');

  let elemI = null;

  cardShortDescr.forEach(item => {
    if (item.textContent.length > 400) {
      let str = item.textContent;
      item.textContent = str.slice(0, 300) + ' ...';
    }
  });

  function changeVisibleInfo (item, event) {
    let target = event.target;
    let eventType = event.type;
    
    if (eventType === 'mouseenter') {
      elemI = [...cardItems].indexOf(target);

      cardImgs.forEach(item => {
        if(item === cardImgs[elemI]) {
          item.style.visibility = 'hidden';
          item.style.opacity = 0;
        }
      });

      cardDescr.forEach(item => {
        if(item === cardDescr[elemI]) {
          item.style.visibility = 'visible';
          item.style.opacity = 1;
        }
      });
    } else if (eventType === 'mouseleave') {

      cardDescr.forEach(item => {
        if(item === cardDescr[elemI]) {
          item.style.visibility = 'hidden';
          item.style.opacity = 0;
        }
      }); 

      cardImgs.forEach(item => {
        if(item === cardImgs[elemI]) {
          item.style.visibility = 'visible';
          item.style.opacity = 1;
        }
      });

      elemI = null;
    }
  }

  cardItems.forEach(item => {
    item.addEventListener('mouseenter', (event) => changeVisibleInfo(item, event));
  })
  cardItems.forEach(item => {
    item.addEventListener('mouseleave', (event) => changeVisibleInfo(item, event));
  })

  








}

export default portfolio;