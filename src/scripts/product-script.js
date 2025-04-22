$(document).ready(() => {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault()
  
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 70,
        },
        800,
      )
    })
  
    // Add hover effect to routine cards
    $(".routine-card").hover(
      function () {
        $(this).find(".routine-header h3").css("color", "#1a3c2e")
      },
      function () {
        $(this).find(".routine-header h3").css("color", "")
      },
    )
  
    // Add hover effect to product links
    $(".product-link").hover(
      function () {
        $(this).css("font-weight", "bold")
      },
      function () {
        $(this).css("font-weight", "normal")
      },
    )

    // Add hover effect to product images
    $(".product-image").hover(
      function() {
        $(this).css({
          'transform': 'scale(1.05)',
          'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.15)'
        });
      },
      function() {
        $(this).css({
          'transform': '',
          'box-shadow': ''
        });
      }
    );
  
    // Animate elements when they come into view
    $(window).scroll(() => {
      $(".routine-card").each(function () {
        const cardPosition = $(this).offset().top
        const scrollPosition = $(window).scrollTop() + $(window).height() - 100
  
        if (scrollPosition > cardPosition) {
          $(this).addClass("animated")
          $(this).css("opacity", "1")
        }
      })

      // Animate product images when they come into view
      $(".product-image").each(function() {
        const imagePosition = $(this).offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height() - 50;

        if (scrollPosition > imagePosition && !$(this).hasClass('animated')) {
          $(this).addClass('animated');
          $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
          }).animate({
            'opacity': '1',
            'transform': 'translateY(0)'
          }, 500);
        }
      });
    })
  
    // Initialize cards with 0 opacity
    $(".routine-card").css("opacity", "0")
  
    // Add CSS for animation
    $("<style>")
      .prop("type", "text/css")
      .html(`
              .routine-card {
                  transition: opacity 0.5s ease, transform 0.5s ease;
              }
              .routine-card.animated {
                  opacity: 1;
                  transform: translateY(0);
              }
              .product-image {
                  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
              }
              .product-image.animated {
                  opacity: 1;
                  transform: translateY(0);
              }
          `)
      .appendTo("head")
  
    // Responsive adjustments for product images
    function adjustProductLayout() {
      if ($(window).width() >= 992) {
        // Desktop layout
        $('.product-item.specialty .product-image-container').width('180px');
        $('.product-item.alternative .product-image-container').width('120px');
      } else if ($(window).width() >= 768) {
        // Tablet layout
        $('.product-item.specialty .product-image-container').width('150px');
        $('.product-item.alternative .product-image-container').width('100px');
      } else {
        // Mobile layout
        $('.product-item.specialty .product-image-container').width('100%');
        $('.product-item.alternative .product-image-container').width('100%');
      }
    }

    // Run on page load
    adjustProductLayout();
    
    // Run on window resize
    $(window).resize(function() {
      adjustProductLayout();
    });

    // Trigger scroll event on page load to animate visible elements
    $(window).trigger("scroll")
})