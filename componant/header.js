//add header section
document.body.querySelector(".main").innerHTML+=`<header>
<div class="container">
    <nav>
        <div class="logo" data-text="Educa">Educa</div>
        <div class="icons">
            <div class="menu btn"><i class="fa-solid fa-bars bars"></i></div>
            <div class="profile btn"><i class="fa-solid fa-user user"></i></div>
            <div class="mood btn"><i class="fa-solid fa-sun sun"></i></div>
        </div>
    </nav>
    <div class="info">
        <button class="btn main-btn orange-btn">log in</button>
        <button class="btn main-btn orange-btn">register</button>
    </div>
</div>
</header>
<aside>
<button class="exit btn">X</button>
<div class="info">
    <button class="btn main-btn orange-btn">log in</button>
    <button class="btn main-btn orange-btn">register</button>
</div>
<ul>
    <li>
        <a href="#">
            <i class="fa-solid fa-house"></i>
            <p>Home</p>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa-solid fa-question"></i>
            <p>About</p>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa-solid fa-graduation-cap"></i>
            <p>Blog</p>
        </a>
    </li>
    <li>
        <a href="#">
        <i class="fa-solid fa-flask"></i>
            <p>Labs</p>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa-solid fa-chalkboard-user"></i>
            <p>Tools</p>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="fa-solid fa-headset"></i>
            <p>Contact Us</p>
        </a>
    </li>
</ul>
</aside>`;

//view profile icon
document.querySelector("header nav .icons .profile").addEventListener("click",()=>{
    document.querySelector("header .info").classList.toggle("active");
    document.querySelector("header nav form").classList.remove("active");
});

//enable dark mood
document.querySelector("header nav .icons .mood").onclick=function(){
    document.body.classList.toggle("active");
    if(document.body.classList.contains("active")){
        this.innerHTML=`<i class="fa-solid fa-moon"></i>`;
    }else{
        this.innerHTML=`<i class="fa-solid fa-sun"></i>`;
    };
};

//view side bar
document.querySelector("header nav .icons .menu").onclick=()=>{
    document.querySelector("aside").classList.toggle("active");
};

// close side bar
document.querySelector("aside .exit").addEventListener("click",()=>{
    document.querySelector("aside").classList.remove("active");
});