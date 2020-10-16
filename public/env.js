$(document).ready(function(){
    //bind button sum
    $('#sumBtn').click(function(){
    var number1 = $('#number1').val()
    var number2 = $('#number2').val() 
    console.log(number1)
    var numbers={
        num1:number1,
        num2:number2
    }
    $.get("/adder",numbers, function(data){
        console.log(data)
        $("#result").text(data);
    
});
    })

    //bind button subtract
    $('#subtactBtn').click(function(){
        var number1 = $('#number1').val()
        var number2 = $('#number2').val() 
        console.log(number1)
        var numbers={
            num1:number1,
            num2:number2
        }
        $.get("/subtractor",numbers, function(data){
            console.log(data)
            $("#result").text(data);
        
    });
        })
})
