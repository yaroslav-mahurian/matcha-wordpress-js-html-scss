import Select from './libs/select';

import SwiperJS from './libs/swiper';

import ProductPageVariations from './product-page/productPageVariations';

import Reviews from './reviews';
import MyAccountPage from './my-account';
import Checkout from './checkout';
import Modal from './modal';

/* Select init */
const selectJS = new Select();
selectJS.init();

/* SwiperJS init */
const swiperJS = new SwiperJS();
swiperJS.init();

/* My Account Page Scripts init */
const myAccountPageEl = document.querySelector('[data-my-account-page]');
if (myAccountPageEl) {
  const myAccountPageScripts = new MyAccountPage();
  myAccountPageScripts.init();
}

/* Checkout page scripts init */
const checkoutPageEl = document.querySelector('[data-checkout-page]');
if(checkoutPageEl) {
  const checkoutPageScripts = new Checkout();
  checkoutPageScripts.init();

  const totalsWrapper = document.querySelector('.checkout__summary-wrapper');
  const totalsWrapperOffset = offset(totalsWrapper).top;

    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      if (scrolled >= totalsWrapperOffset) {
        totalsWrapper.classList.add('sticky');
      } else {
        totalsWrapper.classList.remove('sticky');
      }
    });
}

/* Product page scripts */
const productPageEl = document.querySelector('[data-product-page]');
if(productPageEl) {
  setTimeout(subsrcInit, 1500);
  document.querySelector('.loader-container').classList.add('deactivated');
}

function subsrcInit() {
  const productPageVariations = new ProductPageVariations();
  productPageVariations.init();
}

/* Modal scripts */
const modalScripts = new Modal();
modalScripts.init();


/* SwiperJS init */
const reviews = new Reviews();
reviews.init();

/* Variables */
const body = document.querySelector('body');
const fixedInfoBlock = document.querySelector('#fixedInfoBlock');
const header = document.querySelector('#header');
const logoDark = document.querySelector('#logoDark');
const logoWhite = document.querySelector('#logoWhite');
const menuWrapper = document.querySelector('#menuWrapper');
const navDropdownElsArr = Array.from(document.querySelectorAll('.nav__dropdown'));
const footerDropdownElsArr = Array.from(document.querySelectorAll('.footer__dropdown'));
const whiteBgSection = document.querySelector('#whiteBg');
const whiteHeaderCheck = document.querySelector('[data-white-header]');

/* Change header content color */
if(whiteHeaderCheck) {
  header.classList.add('header--white-content');
}


function changeLogoColorDef() {
  if (header.hasAttribute("data-active")) {
    logoWhite.style.display = "none";
    logoDark.style.display = "block";
  } else {
    if (whiteBgSection) {
      logoWhite.style.display = "none";
      logoDark.style.display = "block";
    } else {
      logoWhite.style.display = "block";
      logoDark.style.display = "none";
    }
  }
}

function changeLogoColorSticky() {
  if (header.hasAttribute("data-active")) {
    logoWhite.style.display = "none";
    logoDark.style.display = "block";
  } else {
    if (whiteBgSection) {
      logoWhite.style.display = "none";
      logoDark.style.display = "block";
    } else {
      logoWhite.style.display = "none";
      logoDark.style.display = "block";
    }
  }
}

function addEventListenersForNav() {
  if(window.innerWidth <= 999) {
    navDropdownElsArr.forEach((el) => {
        el.addEventListener("click", ()=> {
            el.classList.toggle("nav__dropdown--active");
        });
    });
  } 

  if(window.innerWidth <= 999) {
    footerDropdownElsArr.forEach((el) => {
        el.removeEventListener("click", function(){});
        el.addEventListener("click", ()=> {
            el.classList.toggle("footer__dropdown--active");
        });
    });
  }
}

/* function selectInit() {

  const select = new Select();
  select.init();
}

setTimeout(selectInit, 3000); */


window.addEventListener("load", ()=> {
    


    const scrolled = window.pageYOffset;
    if(header) {
      if(!header.hasAttribute('data-header-product')) {
        if (scrolled >= 1) {
          header.classList.add('header--sticky');
          header.setAttribute("data-active", '');
          changeLogoColorSticky();
        } else {
            header.classList.remove('header--sticky');
            header.removeAttribute("data-active");
            changeLogoColorDef();
        }
      }
      

      addEventListenersForNav();
      const fixedInfoBlockHeight = fixedInfoBlock.scrollHeight;



      header.style.top = `${fixedInfoBlockHeight}px`;
      window.addEventListener("scroll", () => {
        if(!header.hasAttribute('data-header-product')) {
          const scrolled = window.pageYOffset;
          if (scrolled >= 1) {
              header.classList.add('header--sticky');
              header.setAttribute("data-active", '');
              changeLogoColorSticky();
          } else {
              header.classList.remove('header--sticky');
              header.removeAttribute("data-active");
              changeLogoColorDef();
          }
        }

         
      });
    } 
     
    

   
    /* FAQ Elements */
    const FAQGroupTitlesArr = Array.from(document.querySelectorAll('.arconix-faq-term-title'));
    const FAQElArr = Array.from(document.querySelectorAll('.arconix-faq-accordion-wrap')); 
    const FAQTitlesArr = Array.from(document.querySelectorAll('.arconix-faq-accordion-title'));
    const FAQContentArr = Array.from(document.querySelectorAll('.arconix-faq-accordion-content'));
    const FAQIconArr = Array.from(document.querySelectorAll('.ui-accordion-header-icon'));

    if(FAQGroupTitlesArr) {
      FAQGroupTitlesArr.forEach((groupTitle) => {
        groupTitle.setAttribute('data-faq-group-title', '');

        /* Create icon el */
        const icondiv = document.createElement('div');
        icondiv.setAttribute('data-faq-group-title-icon', '');
        icondiv.innerHTML = `
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.09128 7L-1.95499e-08 1.55531L1.45436 0L8 7L1.45436 14L-1.56427e-07 12.4447L5.09128 7Z" fill="#705F5E"/>
        </svg>
        `;
        groupTitle.insertAdjacentElement('beforeend', icondiv);

        /* Add specific class to data-faq-el */
        groupTitle.nextElementSibling.classList.add('arconix-faq-accordion-wrap-group');


        /* Add event listener */
        groupTitle.addEventListener("click", ()=> {
          groupTitle.classList.toggle('data-faq-group-title-active');
          groupTitle.nextElementSibling.classList.toggle('arconix-faq-accordion-wrap-group--active');
        });
      });
    }

    if (FAQElArr) {
      FAQElArr.forEach((el) => {
          el.setAttribute('data-faq-el', ''); 
          if (el.closest('[data-faq-bordered-wrapper]')) {
            FAQTitlesArr.forEach((title) => {
              title.setAttribute('data-faq-bordered', '');
            });

            if(FAQContentArr) {
              FAQContentArr.forEach((contentBlock) => {
                contentBlock.setAttribute('data-faq-bordered', '');
              });
            }
          } 
      });
        
    }

    if(FAQTitlesArr) {
      FAQTitlesArr.forEach((title) => {
        title.setAttribute('data-faq-title', '');
      });
    }


    if(FAQContentArr) {
      FAQContentArr.forEach((contentBlock) => {
        contentBlock.setAttribute('data-faq-content', '');
      });
    }

    if(FAQIconArr) {
      FAQIconArr.forEach((icon) => {
        icon.setAttribute('data-faq-icon', '');
      });
    }
    

    /* Product & post rating */

  const reviewRatingElArr = Array.from(document.querySelectorAll('[data-review-rating]')); 

  if (reviewRatingElArr) {
    reviewRatingElArr.forEach((el) => {
      const postAvgRatingEl = el.querySelector('.wpcr_averageStars');
      
      const reviewRatingElValue = Math.round(el.getAttribute('data-review-rating'));
      const reviewRatingContainer = el.nextElementSibling;

      /* Article */
      const articlePrintRatingContainer = document.querySelector('[data-article-print-rating]');
      

      const reviewRatingStars = reviewRatingContainer.querySelectorAll('[data-review-rating-star]');

      const reviewRatingStarsArr = Array.from(reviewRatingStars);

      function showRatingStars(starsArr, avgRatingVal) {
        const reviewRatingStarsArrFiltered = starsArr.slice(0, avgRatingVal);

        reviewRatingStarsArrFiltered.forEach((star)=> {
          star.classList.add('article__rating-icon--selected');
        }); 

      }

      if(!postAvgRatingEl) {
        showRatingStars(reviewRatingStarsArr, reviewRatingElValue);
      } else {
        if(postAvgRatingEl) {
          const postAvgRatingVal = Math.round(postAvgRatingEl.getAttribute('data-wpcravg'));
          showRatingStars(reviewRatingStarsArr, postAvgRatingVal);
          if (articlePrintRatingContainer) {
            const articlePrintRatingStarsArr = Array.from(articlePrintRatingContainer.querySelectorAll('[data-article-print-rating-star]'));
            showRatingStars(articlePrintRatingStarsArr, postAvgRatingVal);
          }
        }
        
      }
            
    });
  }

  const articlePrintRatingContainer = document.querySelector('[data-article-print-rating]');
  if (articlePrintRatingContainer) {
    const articleTitle = document.querySelector('[data-article-title]').innerText;
    const reviewsCountEl = document.querySelector('[data-reviews-count]');
    const reviewsCountVal= Number(reviewsCountEl.getAttribute('data-reviews-count'));
    let text = '';
    if(reviewsCountVal != 1) {
      text = 'Reviews';
    } else {
      text = 'Review';
    }

    articlePrintRatingContainer.querySelector('[data-article-print-rating-count]').innerText = reviewsCountVal;
    articlePrintRatingContainer.querySelector('[data-article-print-rating-text]').innerText = text;
    articlePrintRatingContainer.closest('.article__print').querySelector('[data-article-print-title]').innerText = articleTitle;
  }

  const articleHeadAvgRatingBlock = document.querySelector('#articleHeadAvgRating');
  if(articleHeadAvgRatingBlock) {
    const changeRatingBlockHtml = function(ratingVal) {
      const customAvgRatingBlock = articleHeadAvgRatingBlock.querySelector('[data-avg-rating-number]'); 
      customAvgRatingBlock.innerHTML = ratingVal;
    };
    const avgRatingEl = articleHeadAvgRatingBlock.querySelector('[data-wpcravg]');
    let avgRatingVal = 0;
    let avgRatingValRounded = 0;
    if(avgRatingEl) {
      avgRatingVal =  Number(avgRatingEl.getAttribute('data-wpcravg'));
      avgRatingValRounded = avgRatingVal.toFixed(1);
      changeRatingBlockHtml(avgRatingValRounded);
    } else {
      changeRatingBlockHtml('0');
    }
    
  }

  /* Article image list count */
  /* const articleImageList = document.querySelector('#articleImageList');
  if(articleImageList) {
    const articleImageListElArr = Array.from(articleImageList.querySelectorAll('[data-article-image-list-el]'));

    articleImageListElArr.forEach((el, index) => {
      const count = index + 1;
      el.querySelector('[data-article-image-list-el-count]').innerText = count;

    });
  } */
    
}); /* end of 'load' eventListener */

window.addEventListener("resize", ()=> {
  const fixedInfoBlockHeight = fixedInfoBlock.scrollHeight;
  if(header) {
     header.style.top = `${fixedInfoBlockHeight}px`;
    /* addEventListenersForNav(); */
  }

  

});


/* HEADER MENU */
const headerBurger = document.querySelector('#headerBurger');
if(headerBurger) {
  headerBurger.addEventListener("click", function() {
    headerBurger.classList.toggle('is-active');
    menuWrapper.classList.toggle('nav--active');
    menuWrapper.toggleAttribute('data-active');
    body.classList.toggle('no-scroll');
    
    const scrolled = window.pageYOffset;

    if(menuWrapper.hasAttribute('data-active')) {
        header.classList.add("header--sticky");
        header.setAttribute("data-active", '');
        
        if (scrolled >= 1) {
          changeLogoColorSticky();
        } else {
          changeLogoColorDef();
        }
        /* logoWhite.style.display = "none";
        logoDark.style.display = "block"; */
    } else {
        header.classList.remove("header--sticky");
        header.removeAttribute("data-active", '');

        if (scrolled >= 1) {
          changeLogoColorSticky();
        } else {
          changeLogoColorDef();
        }
    }

        if (scrolled >= 1) {
            header.classList.add('header--sticky');
            header.setAttribute("data-active", '');
        }
  }); 
}

/* Woocommerce notices */
jQuery(function($) {
  $('[data-error-close-el]').find('.woocommerce-error-close').click(function() {
    $(this).parents('.woocommerce-error').css('display', 'none');
    $(this).parents('.woocommerce-error').css('opacity', '0');
  });
});


/* Reviwes page video scripts  */
const reviewsPageEl = document.querySelector('[data-reviews-page]');
if(reviewsPageEl) {
  jQuery(function($) {

    var videoEl = $('.testimonials-slide__video');
    videoEl.each(function(index, item){
      var videoTag = $(item).find('video');
      var videoSrc = videoTag.attr('src');
      var posterVideoSrc = videoTag.attr('poster');
  
      $(item).empty();
      var html = '<img src="' + posterVideoSrc + '" class="testimonials-slide__video-img"><a class="testimonials__play-btn" href="' + videoSrc + '" data-fancybox data-caption=""></a>';
      $(item).html(html); 
  
      $('.loader-container').addClass('deactivated');
  
    });
  });
}






jQuery(function($) {
  setTimeout(function() {
    $('.woocommerce-message').fadeOut('fast');
  }, 4000);
});


/* Helpers */

/* ------------- Mobile vh fix func------------- */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function offset(elem) {
  // (1)
  var box = elem.getBoundingClientRect();
  
  // (2)
  var body = document.body;
  var docElem = document.documentElement;
  
  // (3)
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  
  // (4)
  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0;
  
  // (5)
  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  
  return { top: Math.round(top), left: Math.round(left) };
}

/* --------------- Smooth scroll for anchors script -------------- */

window.addEventListener('load', ()=> {
  const anchors = document.querySelectorAll('[data-smooth-scroll]');
if(anchors) {
    Array.from(anchors).forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const yOffset = fixedInfoBlock.scrollHeight + header.scrollHeight;
            const blockID = anchor.getAttribute('href');
            const y = document.querySelector('' + blockID).getBoundingClientRect().top + window.pageYOffset - yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        });
    });
}
});



