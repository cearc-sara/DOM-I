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

const navBar = document.querySelector("nav");

const navLink1 = navBar.querySelector('a:nth-of-type(1)');
const navLink2 = navBar.querySelector('a:nth-of-type(2)');
const navLink3 = navBar.querySelector('a:nth-of-type(3)');
const navLink4 = navBar.querySelector('a:nth-of-type(4)');
const navLink5 = navBar.querySelector('a:nth-of-type(5)');
const navLink6 = navBar.querySelector('a:nth-of-type(6)');

navLink1.textContent = siteContent["nav"]["nav-item-1"];
navLink2.textContent = siteContent["nav"]["nav-item-2"];
navLink3.textContent = siteContent["nav"]["nav-item-3"];
navLink4.textContent = siteContent["nav"]["nav-item-4"];
navLink5.textContent = siteContent["nav"]["nav-item-5"];
navLink6.textContent = siteContent["nav"]["nav-item-6"];




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