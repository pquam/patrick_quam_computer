function toggleNav() {
  const sidebar = document.querySelector('.side-navigation');
  const tab = document.querySelector('.nav-toggle-btn');
  if ((window.innerWidth >= 1500) && (sidebar.style.display === 'none' || sidebar.style.display === '')) { 
    sidebar.style.display = 'block'; 
    tab.style.left = '175px'; 
  } else if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'block';
      tab.style.left = '350px';
  } else {
     sidebar.style.display = 'none';
     tab.style.left = '-70px';
  }

  
}


//if the window width is increased, return the sidebar to normal
window.addEventListener('resize', function() {
  const navLinks = document.querySelectorAll('.side-navigation a');
  const sidebar = document.querySelector('.side-navigation');
  const tab = document.querySelector('.nav-toggle-btn');
  
  if (window.innerWidth >= 1500) { 
    sidebar.style.display = 'none'; 
    tab.style.left = '175px'; 
  } else if (sidebar.style.display === 'block') {
    tab.style.left = '175px'; 
  } else {
    tab.style.left = '-70px';
  }

  if (window.innerWidth <= 1500) { 
      for (const link of navLinks) {
          link.addEventListener('click', () => {
            const sidebar = document.querySelector('.side-navigation');
            const tab = document.querySelector('.nav-toggle-btn');
            sidebar.style.display = 'none';
            tab.style.left = '-70px';
          });
        }
      sidebar.style.display = 'none'; 
      tab.style.left = '-70px'; 
    } else if (sidebar.style.display === 'none') {
      tab.style.left = '-70px'; 
    } else {
      tab.style.left = '350px';
    }
})