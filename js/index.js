const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const navBar = document.querySelectorAll("nav a");


const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = 'a'

const nav = document.querySelector('nav')
nav.appendChild(blogLink)

const socialLink = document.createElement('a')
socialLink.textContent = 'Social'
socialLink.href = 'a'

nav.prepend(socialLink)



const navLink1 = navBar[0];
const navLink2 = navBar[1];
const navLink3 = navBar[2];
const navLink4 = navBar[3];
const navLink5 = navBar[4];
const navLink6 = navBar[5];

navLink1.textContent = siteContent["nav"]["nav-item-1"];
navLink2.textContent = siteContent["nav"]["nav-item-2"];
navLink3.textContent = siteContent["nav"]["nav-item-3"];
navLink4.textContent = siteContent["nav"]["nav-item-4"];
navLink5.textContent = siteContent["nav"]["nav-item-5"];
navLink6.textContent = siteContent["nav"]["nav-item-6"];






Array.from(navBar).forEach(links => {
  links.style.color = 'green';
})






const section1 = document.querySelector(".cta");

const sec1Header = section1.querySelector(".cta-text h1");
sec1Header.textContent = siteContent["cta"]["h1"];

const sec1Button = section1.querySelector(".cta-text button");
sec1Button.textContent = siteContent["cta"]["button"];

const sec1Img = section1.querySelector("#cta-img");
sec1Img.setAttribute('src', siteContent["cta"]["img-src"]);








const section2 = document.querySelector(".main-content");



const sec2Title1 = section2.querySelector(".text-content:nth-of-type(1) h4");
sec2Title1.textContent = siteContent["main-content"]["features-h4"];

const sec2Text1 = section2.querySelector(".text-content:nth-of-type(1) p");
sec2Text1.textContent = siteContent["main-content"]["features-content"];

const sec2Title2 = section2.querySelector(".text-content:nth-of-type(2) h4");
sec2Title2.textContent = siteContent["main-content"]["about-h4"];

const sec2Text2 = section2.querySelector(".text-content:nth-of-type(2) p");
sec2Text2.textContent = siteContent["main-content"]["about-content"];

const sec2Img = section2.querySelector("#middle-img");
sec2Img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);









const section3 = document.querySelector(".bottom-content")



const sec2Title3 = section3.querySelector(".text-content:nth-of-type(1) h4");
sec2Title3.textContent = siteContent["main-content"]["services-h4"];

const sec2Text3 = section3.querySelector(".text-content:nth-of-type(1) p");
sec2Text3.textContent = siteContent["main-content"]["services-content"];

const sec2Title4 = section3.querySelector(".text-content:nth-of-type(2) h4");
sec2Title4.textContent = siteContent["main-content"]["product-h4"];

const sec2Text4 = section3.querySelector(".text-content:nth-of-type(2) p");
sec2Text4.textContent = siteContent["main-content"]["product-content"];

const sec2Title5 = section3.querySelector(".text-content:nth-of-type(3) h4");
sec2Title5.textContent = siteContent["main-content"]["vision-h4"];

const sec2Text5 = section3.querySelector(".text-content:nth-of-type(3) p");
sec2Text5.textContent = siteContent["main-content"]["vision-content"];







const contInfo = document.querySelector(".contact");



const contName = contInfo.querySelector("h4");
contName.textContent = siteContent["contact"]["contact-h4"];

const contAddr = contInfo.querySelector("p:nth-of-type(1)");
contAddr.textContent = siteContent["contact"]["address"];

const contPho = contInfo.querySelector("p:nth-of-type(2)");
contPho.textContent = siteContent["contact"]["phone"];

const contEma = contInfo.querySelector("p:nth-of-type(3)");
contEma.textContent = siteContent["contact"]["email"];








const foot = document.querySelector("footer");

const footInfo = foot.querySelector("p");
footInfo.textContent = siteContent["footer"]["copyright"];
