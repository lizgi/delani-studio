$(document).ready(function(){
 

    // toggle in the product image and on clicking image the design details appear
    $(".design").click(function () {
        $("#imageofdesign, #designdetails").toggle();
    })

    // toggle in the product image and on clicking image the development details appear
    $(".devolop").click(function () {
        $("#imageofdevelopment, #developmentdetails").toggle();
    })

    // toggle in the product image and on clicking image the product details appear
    $(".product").click(function () {
        $("#imageofproducts, #productdetails").toggle();
    })

    //adding hover effect

  //projectpic4
  $('.project1').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p1').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p1').addClass('text');
});
   


//projectpic3
$('.project2').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p2').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p2').addClass('text');
});
 
//projectpic2
$('.project3').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p3').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p3').addClass('text');
});

//projectpic1

$('.project4').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p4').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p4').addClass('text');
});
  /// images in the second row

//projectpic5

$('.project5').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p5').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p5').addClass('text');
});


//projectpic6
$('.project6').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p6').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p6').addClass('text');
});

//projectpic7

$('.project7').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p7').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p7').addClass('text');
});

//projectpic8

$('.project8').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p8').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p8').addClass('text');
});
// form validation
document.getElementById('submit').addEventListener('click', function () {
    var myName = $("#namebar").val();
    var myMail = $("#emailbar").val();
    var myMessage = $("#messagebar").val();
    if ($("#namebar").val() && $("#emailbar").val() && $("#messagebar").val()) {
        alert("Hi " + myName + ", Thankyou for contacting us.we will get in touch");
    } else {
        alert("Please fill all fields!");
    }
})
//year
    let year= new Date().getFullYear()
    
    $("#year").text(year);

})
