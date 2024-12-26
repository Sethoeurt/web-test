const navLinks = document.querySelector(".nav-links");
        const topNavs = document.querySelector(".top-nav");
        let isMenuOpen = false;
        
        function onMenu(e) {
            // e.name = e.name === 'menu' ? 'close' : 'menu';
            if (isMenuOpen) {
                navLinks.style.left = "-25ds0px";
            } else {
                navLinks.style.left = "0px";
            }
            isMenuOpen = !isMenuOpen;
        }
    
        function onTop() {
            topNavs.classList.toggle('hidden');
        }
    
        // Function to close the sidebar when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = navLinks.contains(event.target);
            const menuIconClicked = event.target.name === 'menu' || event.target.name === 'close';
            
            // If the click is outside the navLinks and the menu icon was not clicked, close the sidebar
            if (!isClickInside && !menuIconClicked && isMenuOpen) {
                navLinks.style.left = "-260px";
                isMenuOpen = false;
            }
        });
