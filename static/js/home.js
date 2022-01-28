
function change(index){   //當滑鼠點擊，按鈕設定改變
    let news=window.document.getElementById("news");
    let goods=window.document.getElementById("goods");
    let online=window.document.getElementById("online");
    let contact=window.document.getElementById("contact");
    let car=window.document.getElementById("car"); 
    let login=window.document.getElementById("login");
    let logout=window.document.getElementById("logout");
    let sell=window.document.getElementById("sell");
    if(index==1){
        news.className="current-tag";
        goods.className="tag";
        online.className="tag";
        contact.className="tag";
        car.className="tag";
        login.className="tag";
        logout.className="tag";
        
    }else if(index==2){
        news.className="tag";
        goods.className="current-tag";
        online.className="tag";
        contact.className="tag";
        car.className="tag";
        login.className="tag";
        logout.className="tag";
    }else if(index==3){
        news.className="tag";
        goods.className="tag";
        online.className="current-tag";
        contact.className="tag";
        car.className="tag";
        login.className="tag";
        logout.className="tag";
    }else if(index==4){
        news.className="tag";
        goods.className="tag";
        online.className="tag";
        contact.className="current-tag";
        car.className="tag";
        login.className="tag";
        logout.className="tag"; 
    }else if(index==5){
        news.className="tag";
        goods.className="tag";
        online.className="tag";
        contact.className="tag";
        car.className="current-tag";
        login.className="tag";
        logout.className="tag";
        sell.style.display="block";
    }else if(index==6){
        news.className="tag";
        goods.className="tag";
        online.className="tag";
        contact.className="tag";
        car.className="tag";
        login.className="current-tag";
        window.location.href="login";
        logout.className="tag";
    }else if(index==7){
        news.className="tag";
        goods.className="tag";
        online.className="tag";
        contact.className="tag";
        car.className="tag";
        login.className="tag";
        logout.className="current-tag";
        window.location.href="goofu";
    }
}

function no(){   //設定按鈕顯示方式
    let element=window.document.getElementById("sell");
    element.style.display="none";
}

function yes(){  //設定按鈕顯示方式
    let element=window.document.getElementById("sell");
    element.style.display="none";
}
let sellbox=document.getElementById("sellbox"); //設定滑鼠可拖曳對話框
let move=function(a){
    sell.style.left=(a.clientX-10)+"px";
    sell.style.top=(a.clientY-10)+"px";
};
let drag=function(){
    document.addEventListener("mousemove",move);
};
let drop=function(){
    document.removeEventListener("mousemove",move);
};
sellbox.addEventListener("mousedown",drag);
sellbox.addEventListener("mouseup",drop);

function toggleMenu(){
    let menu= document.getElementById("menu");
    /*menu.classList.toggle("hide");*/
         
    if (menu.style.display==""){
        menu.style.display="block";
    }else if(menu.style.display=="none"){
     menu.style.display="block";
    }else{
     menu.style.display="none";
    }
 
 }
