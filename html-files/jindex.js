$(document).ready(function(){

    // Banner Owl Carousel

    $("#banner-area .owl-carousel").owlCarousel({
     dots: true ,
     items :1
    });
    // top sale wol-carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive :{
            0 :{
                items:1
            },
            300:{
              items:2
            },
            600 :{
                items:3
            },
            1000 :{
                  items:5
            }
        }
    })
    // iso top filter
    var grid =$(".grid").isotope({
        itemSelctor:".grid-item",
        layoutMode:"fitRows"
    })
    // filter items on button click
         
    $(".button-group").on("click","button",function(){
        var filterValue =$(this).attr("data-filter") ;
        grid.isotope({filter:filterValue})
    })

      //new phones wol-carousel
      $("#new-phones .owl-carousel").owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          responsive: {
              0: {
                  items: 1
              },
              300: {
                  items: 2
              },
              600: {
                  items: 3
              },
              1000: {
                  items: 5
              }
          }
      }) 
      $("#blog .owl-carousel").owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          responsive: {
              0: {
                  items: 1
              },
              300:{
                  item: 2
              },
              
              600: {
                  items: 3
              },
              
          }
      })

    //   product Quantity Section
    let qty_up= $(".qty .qty-up");
    let qty_down= $(".qty .qty-down");
    let input= $(".qty .qty-input");

    // click on qty-up button
     qty_up.click(function(){
         if (input.val()>=1 && input.val()<=9) {
             input.val(function(i , oldval){
                 return ++oldval ;
             })
         };
    });

     // click on qty-Down button
    qty_down.click(function () {
        if (input.val() >1 && input.val() <= 10) {
            input.val(function (i, oldval) {
              return --oldval ;
            });
        };
    });
    
    
})