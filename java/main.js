$(document).ready(function(){
 //toggle between image and description

    // toggle in the product image and on clicking image the design details appear
    $(".design").click(function () {
        $("#imageofdesign, #designdetails").toggle();
    })
    // toggle in the product image and on clicking image the development details appear
    $(".dev").click(function () {
        $("#imageofdevelopment, #developmentdetails").toggle();
    })
    // toggle in the product image and on clicking image the product details appear
    $(".product").click(function () {
        $("#imageofproducts, #productdetails").toggle();
    })






    
    let year= new Date().getFullYear()
    
    $("#year").text(year);

})
