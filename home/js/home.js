// increase number of statics
function increase(){
    let i=11936681242;
    setInterval(function(){
        document.querySelectorAll(".statistics .stat .text span")[1].innerHTML=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        i++;
    },1500);
    let x=223169978;
    setInterval(function(){
        document.querySelectorAll(".statistics .stat .text span")[3].innerHTML=x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        x++;
    },1000)
    if(i=11936681242+999){
        i=11936681242;
    };
    if(x=223169978+999){
        x=223169978;
    };
};
increase();