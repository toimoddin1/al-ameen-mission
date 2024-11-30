const navbarToggler = document.getElementById('navbarToggler');
const menuList = document.getElementById('menuList');
const toggleIcon = document.getElementById('toggleIcon');

// Toggle menu and icon when the toggler is clicked
navbarToggler.addEventListener('click', () => {
    menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
    toggleIcon.classList.toggle('fa-bars'); 
    toggleIcon.classList.toggle('fa-times'); 
});

    //Our Publication menu

    $(document).ready(function() {
        // Toggle sub-menu on link click
        $('.our-publication-link').on('click', function(e) {
            e.preventDefault();
            $(this).next('.sub-menu').toggle();
        });
    
        // Hide sub-menu if clicked outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.horizontal-box').length) {
                $('.sub-menu').hide();
            }
        });
    });


    