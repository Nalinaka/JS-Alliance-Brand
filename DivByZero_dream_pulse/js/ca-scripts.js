var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    let header = document.getElementById('tm-header')
    title.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introHeader = document.getElementById('introheader')
    introHeader.textContent = customerName;
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let el = document.querySelectorAll('.tm-white-rect');

    for (i = 0; i < el.length; ++i) {
        el[i].classList.add('tm-blue-rect');
        el[i].classList.remove('tm-white-rect');
    }
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->

    var socialLink = document.querySelector('.tm-social-links');
    socialLink.style.visibility = "none";

};

 function addText() {

    var heading = document.querySelector('heading');
    heading.style.change = 'Alliance'

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    let intro = document.getElementById('intropara1')
    intro.textContent = 'Alliance was founded in 1931 by Albert Daniels.';

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

    let intro2 = document.getElementById('intro2')
    intro2.textContent = 'The company is a leader in P.C. Manufacturing';

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

     let aboutpara1 = document.getElementById('intropara1')
     aboutpara1.textContent = 'We deliver the best service this side of creation';

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    let aboutpara2 = document.getElementById('intropara2')
    aboutpara2.textContent = 'Our motto is satisfaction guaranteed';

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

    let addresspara = document.getElementById('addresspara')
    addresspara.textContent = '1-800-565-5656';

}; 



