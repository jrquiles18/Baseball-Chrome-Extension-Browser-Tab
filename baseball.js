
var totalCount = 30;
function ChangeIt() 
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/'+num+'.jpg';
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
}


ChangeIt();

	

