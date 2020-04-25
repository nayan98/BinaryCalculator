let eql=false;
function back()
{
    let res=document.getElementById("res");
    let val=res.innerHTML;
    if(val[0]!="I")
    res.innerHTML=val.slice(0,val.length-1);  
}
function show()
{
    let res=document.getElementById("res");
    if(eql==true)
        res.innerHTML="";
    eql=false;
    
    res.innerHTML+=this.innerHTML;
    

}
function clear(){
    let res=document.getElementById("res");
    res.innerHTML="";

}
function calculate()
{
    eql=true;
    let res=document.getElementById("res");
    let exp=res.innerHTML;
  
    let first="";
    let second="";
    
    let i=0;
    while(exp[i]>="0"&&exp[i]<="9")
    {first+=exp[i];
    i++;
    }
    let op=exp[i];
    if(op=="&")
    i+=4;
    i++;
    while(exp[i])
    {
        second+=exp[i];
        i++;
    }
    
    
    
    //console.log(first);
    //console.log(second);
    
    first = parseInt(first,2);
    second = parseInt(second,2);
    if(isNaN(second)||isNaN(first))
    {
        res.innerHTML="Invalid Expression";
        return;
    }

    console.log(first);
    console.log(second);
    let ans=first+op+second;
    //console.log(ans);
    ans=eval(ans);
    console.log(ans);
    res.innerHTML=ans;
    ans=ans.toString(2);
    console.log(ans);
    res.innerHTML=res.innerHTML+"<sub>"+"("+ans+")"+"</sub>";
    
        
}


let btns = document.getElementById("btns");
btns=btns.getElementsByClassName("btn");
for(let btn of btns)
{
    if(btn.id=="btnClr")
    {
    btn.addEventListener("click",clear);
    }
    else if(btn.id=="btnEql")
    {
        btn.addEventListener("click",calculate)
    }
    else if(btn.id=="btnBack")
    {
        btn.addEventListener("click",back);
    }

    else
    {
        btn.addEventListener("click",show);
    }  
     
}





