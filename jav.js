function currentDate()
{
var d;
d=new Date();
yr=d.getFullYear();
mt=d.getMonth();
dat=d.getDate();
day=d.getDay();
if(day==0) day="Sunday";
else if(day==1) day="Monday";
else if(day==2) day="Tuesday";
else if(day==3) day="Wednesday";
else if(day==4) day="Thursday";
else if(day==5) day="Friday";
else day="Saturday";

if(mt==0) mt="January";
else if(mt==1) mt="February";
else if(mt==2) mt="March";
else if(mt==3) mt="April";
else if(mt==4) mt="May";
else if(mt==5) mt="June";
else if(mt==6) mt="July";
else if(mt==7) mt="August";
else if(mt==8) mt="September";
else if(mt==9) mt="October";
else if(mt==10) mt="November";
else mt="December";

document.getElementById('date').innerHTML=day+" , " +dat+ " " +mt+ " " +yr;
refTime();
}
function currentTime(){
t=new Date();
hh=t.getHours(); //0-23
mm=t.getMinutes();
ss=t.getSeconds();

    ampm=hh<12?"AM":"PM";
document.getElementById('hh').innerHTML=hh;
document.getElementById('mm').innerHTML=mm;
document.getElementById('ss').innerHTML=ss + " " +ampm;

}
function refTime(){
setInterval(currentTime, 1000);
}