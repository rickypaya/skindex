$(document).ready(function() {
    // Toggle mobile menu
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
        $('.overlay').fadeToggle(300);
        $('body').toggleClass('no-scroll');
    });

    // Close menu when clicking overlay
    $('.overlay').click(function() {
        $('nav').removeClass('active');
        $('.overlay').fadeOut(300);
        $('body').removeClass('no-scroll');
    });

    // Handle window resize
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $('nav').removeClass('active');
            $('.overlay').fadeOut(300);
            $('body').removeClass('no-scroll');
        }
    });

    // Add smooth animation for menu items
    $('nav ul li a').hover(
        function() {
            $(this).stop().animate({
                paddingLeft: '30px'
            }, 200);
        },
        function() {
            $(this).stop().animate({
                paddingLeft: '25px'
            }, 200);
        }
    );

    // Only apply hover animation on mobile
    function updateHoverAnimation() {
        if ($(window).width() >= 768) {
            $('nav ul li a').off('mouseenter mouseleave');
        } else {
            $('nav ul li a').hover(
                function() {
                    $(this).stop().animate({
                        paddingLeft: '30px'
                    }, 200);
                },
                function() {
                    $(this).stop().animate({
                        paddingLeft: '25px'
                    }, 200);
                }
            );
        }
    }

    // Run on load and resize
    updateHoverAnimation();
    $(window).resize(updateHoverAnimation);
});