window.addEventListener("load", () =>{
    new Glider(document.querySelector('.glider'),{
        slidesToScroll: 1,
        slidesToShow: 4,
        dots: '.dots',
        draggable: true,
        arrows: {
            prev: '.prev',
            next: '.next'
        },
        responsive: [
            {
                //screen greater than 300
                breakpoint: 100,
                settings: {
                    slidesToShow:1.1
                }
            },{
                //screen greater than 300
                breakpoint: 300,
                settings: {
                    slidesToShow:1.1
                }
            },{
                //screen greater than 500
                breakpoint: 500,
                settings: {
                    slidesToShow:2
            }
            },{
                //screen greater than 800
                breakpoint: 800,
                settings: {
                    slidesToShow:3
                }
            },{
                //screen greater than 1000
                breakpoint: 1000,
                settings: {
                    slidesToShow:4
                }
            }
        ]
    })
    new Glider(document.querySelector('#featured-cont'),{
        slidesToScroll: 1,
        slidesToShow: 4,
        dots: '.dots2',
        draggable: true,
        arrows: {
            prev: '.prev1',
            next: '.next1'
        },
        responsive: [
            {
                //screen greater than 775
                breakpoint: 100,
                settings: {
                    slidesToShow:1.1
                }
            },{
                //screen greater than 775
                breakpoint: 300,
                settings: {
                    slidesToShow:1.3
                }
            },{
                //screen greater than 775
                breakpoint: 500,
                settings: {
                    slidesToShow:2
            }
            },{
                //screen greater than 775
                breakpoint: 800,
                settings: {
                    slidesToShow:3
                }
            },{
                //screen greater than 775
                breakpoint: 1000,
                settings: {
                    slidesToShow:4
                }
            }
        ]
    })
})