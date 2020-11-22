$(document).ready(function(){


    var nineAm = localStorage.getItem("9:00 AM");
    $("#9am").text(nineAm);


    var tenAm = localStorage.getItem("10:00 AM");
    $("#10am").text(tenAm);


    var elevenAm = localStorage.getItem("11:00 AM");
    $("#11am").text(elevenAm);


    var twelvePm = localStorage.getItem("12:00 AM");
    $("#12pm").text(twelvePm);


    var onePm = localStorage.getItem("1:00 PM");
    $("#1pm").text(onePm);

    var twoPm = localStorage.getItem("2:00 PM");
    $("#2pm").text(twoPm);


    var threePm = localStorage.getItem("3:00 PM");
    $("#3pm").text(threePm);


    var fourPm = localStorage.getItem("4:00 PM");
    $("#4pm").text(fourPm);
    

    var fivePm = localStorage.getItem("5:00 PM");
    $("#5pm").text(fivePm);


    $(".saveBtn").on("click", function() {

        var value = $(this).siblings(".content").val(); 
        var time = $(this).siblings(".time").text();
        localStorage.setItem(time, value);
        $("this").siblings(".content").textContent(localStorage.value);

    });

    $("#currentDay").text(moment().format("llll"));


    var elements = $(".time-slot");
    var dateNow = new Date();
    var hourNow = dateNow.getHours();

    
    for (i = 0; i < elements.length; i++) {
        var slotTime = parseInt(elements[i].getAttribute("data-hour"));

        if (hourNow < slotTime) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        }  else if (hourNow > slotTime) {
            elements[i].classList.add('past');
            elements[i].classList.remove('future');
            elements[i].classList.remove('present');
        } else if (hourNow === slotTime) {
            elements[i].classList.add('present');
            elements[i].classList.remove('future');
            elements[i].classList.remove('past');
        } else if (hourNow > 16 && hourNow < 9) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        }
    }

});