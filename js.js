const root = document.getElementById('root');
const content = document.getElementById('content');

root.addEventListener('wheel', e => {
  e.preventDefault();
  e.stopPropagation();
  
  const delta = e.deltaY;
  
  const maxScrollY = content.offsetHeight - root.offsetHeight;
  const maxScrollX = content.offsetWidth - root.offsetWidth;
  
  let scrollY = root.scrollTop;
  let scrollX = root.scrollLeft;
  
  if (scrollX > 0) {
    scrollX += delta;
    
    if (scrollX < 0) {
      scrollY -= scrollX;
      scrollX = 0;
    }
  } else {
    scrollY += delta;
  
    const overflow = scrollY - maxScrollY;
    if (overflow > 0) {
      scrollX += overflow;
      scrollY = maxScrollY;
    } else {
      scrollX = 0;
    }
  }
  
  root.scrollTo(scrollX, scrollY);
});