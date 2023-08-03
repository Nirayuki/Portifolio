class Mobile{
    constructor(mobile, navListMobile, navLinks, buttonx){
        this.mobile = document.querySelector(mobile);
        this.navListMobile = document.querySelector(navListMobile);
        this.navLinks = document.querySelectorAll(navLinks);
        this.buttonx = document.querySelector(buttonx);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick(){
        console.log(this);
        this.navListMobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobile.addEventListener("click", this.handleClick);
        this.buttonx.addEventListener("click", this.handleClick);

    }

    init(){
        if(this.mobile){
            this.addClickEvent();
        }
        return this;
    }
}


const mobile = new Mobile(
    ".mobile",
    ".nav-list-mobile",
    ".nav-list-mobile li",
    ".container-x"
)

mobile.init();