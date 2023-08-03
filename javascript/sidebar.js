function toggleNav() {
    const sidebar = document.querySelector('.side-navigation');
    const tab = document.querySelector('.nav-toggle-btn');
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        tab.style.left = '250px';
    } else {
       sidebar.style.display = 'none';
       tab.style.left = '-40px';
    }
  }

  // Close the side navigation when a link is clicked
  const navLinks = document.querySelectorAll('.side-navigation a');
  for (const link of navLinks) {
    link.addEventListener('click', () => {
      const sidebar = document.querySelector('.side-navigation');
      const tab = document.querySelector('.nav-toggle-btn');
      sidebar.style.display = 'none';
      tab.style.left = '-40px';
    });
  }


  //if the window width is increased, return the sidebar to normal
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.side-navigation');
    const tab = document.querySelector('.nav-toggle-btn');
    
    if (window.innerWidth >= 1200) { 
      sidebar.style.display = 'block'; 
      tab.style.left = '250px'; 
    } else if (sidebar.style.display === 'block') {
      tab.style.left = '250px'; 
    } else {
      tab.style.left = '-40px';
    }

    if (window.innerWidth <= 1200) { 
        sidebar.style.display = 'none'; 
        tab.style.left = '-40px'; 
      } else if (sidebar.style.display === 'none') {
        tab.style.left = '-40px'; 
      } else {
        tab.style.left = '250px';
      }
  })