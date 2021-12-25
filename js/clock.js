$(document).ready(function(){


console.log("hii");

let str=new Date();
console.log(str);



setInterval(() => {
    let date=new Date();

    let hr=date.getHours().toString();

    if(hr.length==1)
    hr="0"+hr;

    let min=date.getMinutes().toString();
    if(min.length==1)
    min="0"+min;

    let sec=date.getSeconds().toString();
    if(sec.length==1)
    sec="0"+sec;

    let today=date.toLocaleDateString().slice(0,10);
    let d_name=['Monday','Tueday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    let day=d_name[date.getDay()-1];
    $('#t-1').html(hr+":");
    $('#t-2').html(min+":");
    $('#t-3').html(sec);

    $('#day_name').html(day+":");
    $('#t_date').html(today);

    
    
    
    
    
    
}, 1000);
var a=new Audio('/Music/teri-meri-gallan-hogi-mashhur-ringtone-256k-55108-55202-55225.mp3');
function Alarming(){
    a.play();
}
$('#set').on({
    click: function(){
        let a=   $('#hours').val();
         let b=  $('#minute').val();
          let c= $('#second').val();

          let message=$('#message').val();
         let d=new Date();
         let current=d.getTime();
         

         let yr=d.getFullYear();
         let mn=d.getMonth();
         let day=d.getDate();

         let alarm=new Date(yr,mn,day,parseInt(a),parseInt(b),parseInt(c),0);

         let set_alarm=alarm.getTime();

         let remain=set_alarm-current;
         console.log(remain);

         setTimeout(() => {
             console.log("your alarm is ringing ");
             Alarming();
             
         }, remain);
          
    }
});

});
