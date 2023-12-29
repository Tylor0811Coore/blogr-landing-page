// ========== primary navigation toggle ========
const toggleButton = document.querySelector('.primary-navigation-toggle-button'),
      navigationMenu = document.querySelector('.primary-navigation-menu'),
      navigationLinks = document.querySelectorAll('.primary-navigation-link');

toggleButton.addEventListener('click', function() {
   toggleButton.classList.toggle('active');
   navigationMenu.classList.toggle('active');
   if (!toggleButton.classList.contains('active')) {
      closeAllDropdowns();
   }
});

navigationLinks.forEach(function(navigationLink, index) {
   navigationLink.addEventListener('click', function() {
      closeDropdownsNotInUse(index);
      navigationLink.classList.toggle('active');
   });
});

//This method will check if a link is already opened
//and will close it for the link that has been recently
//clicked to be displayed
function closeDropdownsNotInUse(recentOpenedLink) {
   navigationLinks.forEach(function(navigationLink, index) {
      if (index !== recentOpenedLink) {
         navigationLink.classList.remove('active');
      }
   });
}

function closeAllDropdowns() {
   navigationLinks.forEach(function(navigationLink) {
      navigationLink.classList.remove('active');
   });
}

// ========= close navigation menu when dropdown link is clicked =======

const dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(function(dropdownLink) {
   dropdownLink.addEventListener('click', function() {
      toggleButton.classList.remove('active');
      navigationMenu.classList.remove('active');
   });
});