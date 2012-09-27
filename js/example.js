$(window).load(function() {

    $(".top-demo div").each(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        });
    }).click(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        });
    });
        
    $("#recurssive-button").click(function() {
        if ($(this).text() == "Start") {
            $("#text-demo span").circulate({
                loop: true,
                width: 150,
                height: 10
            });
            $(this).text("Stop");
        } else {
            $("#text-demo span").circulate("Stop");
            $(this).text("Start");
        }       
    });   

    function startBallOne() {
        $("#orange-ball").circulate({
            speed: 7000,
            height: 500,
            width: -1600,
            sizeAdjustment: 80,
            loop: true,
            zIndexValues: [1, 1, 3, 3]
        });
    }
    
    function startBallTwo() {
        $("#blue-ball").circulate({
            speed: 4000,
            height: 120,
            width: -700,
            sizeAdjustment: 35,
            loop: true,
            zIndexValues: [2, 2, 2, 2]
        })
    }
    
    function startBallThree() {
        $("#green-ball").circulate({
            speed: 7000,
            height: 500,
            width: -1600,
            sizeAdjustment: 80,
            loop: true,
            zIndexValues: [1, 1, 3, 3]
        }).fadeIn();
    }
            
    startBallOne();
    setTimeout(startBallTwo, 2000);
    setTimeout(startBallThree, 4000);
    
});
