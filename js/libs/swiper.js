import SwiperCore, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/core';
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Thumbs]);

export default class SwiperJS {
    constructor() {

    }

    init() {

        const swiperFeatured = new SwiperCore('.swiper-featured', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 4,
            spaceBetween: 23,
            autoHeight: false,
        
            //Pagination
            pagination: {
            el: '.featured-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-section-pagination__el featured-pagination__el',
            bulletActiveClass: 'swiper-section-pagination__el--active featured-pagination__el--active'
            },

            // Responsive breakpoints
            breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },

            479: {
                slidesPerView: 1,
            },
            
            767: {
                slidesPerView: 3,
                pagination: false,

            },

            999: {
                slidesPerView: 4,
            },

            1200: {
                allowTouchMove: false,
            }
            // when window width is >= 640px
            }
        });

        const swiperBenefits = new SwiperCore('.swiper-benefits', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
        /*     slidesPerView: 4,
        */  spaceBetween: 23,
            autoHeight: true,
        
            //Pagination
            pagination: {
            el: '.benefits-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-section-pagination__el benefits-pagination__el',
            bulletActiveClass: 'swiper-section-pagination__el--active benefits-pagination__el--active'
            },

            // Responsive breakpoints
            breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1.2,
                spaceBetween: 15,
                centeredSlides: true,
            },
            
            767: {
                slidesPerView: 2,
                spaceBetween: 23,
                centeredSlides: false,
            },

            999: {
                pagination: false,
            },

            1200: {
                slidesPerView: 3,
                allowTouchMove: false,
            },
            // when window width is >= 640px
            }
        });

        const swiperBriefInfo = new SwiperCore('.swiper-brief-info', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
        /*     slidesPerView: 4,
        */    spaceBetween: 23,
            autoHeight: false,
        
            //Pagination
            pagination: {
            el: '.brief-info-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-section-pagination__el brief-info-pagination__el',
            bulletActiveClass: 'swiper-section-pagination__el--active brief-info-pagination__el--active'
            },

            // Responsive breakpoints
            breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                centeredSlides: true,
            },
            
            767: {
                slidesPerView: 2,

                centeredSlides: false,
            },
            
            999: {
                pagination: false,
            },

            1200: {
                slidesPerView: 3,
                allowTouchMove: false,
            },
            // when window width is >= 640px
            }
        });

        const swiperTestimonials = new SwiperCore('.swiper-testimonials', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: true,
        
            //Pagination
            pagination: {
            el: '.testimonials-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-section-pagination__el testimonials-pagination__el',
            bulletActiveClass: 'swiper-section-pagination__el--active testimonials-pagination__el--active'
            },
        
            // Navigation arrows
            navigation: {
            nextEl: '#swiperTestimonialsBtnNext',
            prevEl: '#swiperTestimonialsBtnPrev',
            },

            breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 15,
                centeredSlides: true,
            },
            
            767: {
                slidesPerView: 1,
                spaceBetween: 23,
            },
            }
            
        });

        const swiperCreationInfo = new SwiperCore('.swiper-creation-info', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,
            spaceBetween: 23,
            autoHeight: false,
        
            //Pagination
            pagination: {
            el: '.creation-info-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-section-pagination__el creation-info-pagination__el',
            bulletActiveClass: 'swiper-section-pagination__el--active creation-info-pagination__el--active'
            },

            // Responsive breakpoints
            breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },

            479: {
                slidesPerView: 1,
            },
            
            767: {
                slidesPerView: 1,
                pagination: false,
            },

            999: {
                slidesPerView: 3,
            },

            1200: {
                allowTouchMove: false,
            }
            // when window width is >= 640px
            }
        });



        /* Blog article */
        const swiperRecipeBlog = new SwiperCore('.swiper-recipe-blog', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 23,
            autoHeight: true,
            watchOverflow: true,
        
            //Pagination
            pagination: {
            el: '.recipe-blog-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-section-pagination__el swiper-recipe-blog-pagination__el',
            bulletActiveClass: 'swiper-section-pagination__el--active swiper-recipe-blog-pagination__el--active'
            },

            navigation: {
            nextEl: '#swiperRecipeBlogBtnNext',
            prevEl: '#swiperRecipeBlogBtnPrev',
            },

            // Responsive breakpoints
            breakpoints: {
            // when window width is >= 320px
            999: {
                pagination: false,
            },
            // when window width is >= 640px
            }
        });
    
        

        const swiperInsta = new SwiperCore('.swiper-feed', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 16,
            autoHeight: true,
            freeMode: true,
            centeredSlides: true,

            breakpoints: {

            767: {
                spaceBetween: 24,
                centeredSlides: false,
            }
            }
        });



        jQuery(function($) {
            'use strict';



            $(document).on('change', '.form-trigger-event-input', function() {
                initswiperSuggProd(); 
            });

            
            

        });

        function initswiperSuggProd () {
            
            const swiperSuggProd = new SwiperCore('.swiper-prod-sugg', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: false,
                spaceBetween: 16,

                breakpoints: {

                    1000: {
                        spaceBetween: 24,
                    }
                }
            });

            $('.swiper-prod-sugg').find('.btn').each(function(){
                var btn = $(this);

                var text = btn.text().split(' ')[0];

                btn.text(text);
            });
        }
    
        
        let thisSwiper = [];
        const swipersOptionsArr = Array.from(document.querySelectorAll('.swiper-prod-cat'));
        
        if(swipersOptionsArr) {
            swipersOptionsArr.forEach(function(item) {
            const swiperID = item.getAttribute("id");    
            thisSwiper[item] = new SwiperCore('#'+swiperID, {
            freeMode: true,
                // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 4,
            spaceBetween: 23,
            autoHeight: false,
            watchOverflow: true,


            navigation: {
                nextEl: '#'+swiperID+'Next',
                prevEl: '#'+swiperID+'Prev',
            },

            scrollbar: {
                el: '#swiper-scrollbar-'+swiperID,
                draggable: true,
                hide: false,
                dragClass: 'swiper-scrollbar-drag '+swiperID,
            },
            

            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                0: {
                slidesPerView: 'auto',
                /* autoHeight: true, */
                spaceBetween: 15,
                },
                
                767: {
                slidesPerView: 2,
                },

                999: {
                slidesPerView: 3,

                spaceBetween: 23,
                },

                1200: {
                slidesPerView: 4,
                },
            } //breakpoints closed
                
            });

            });
        }

        const relatedProduct = new SwiperCore('.swiper-related-products', {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
                slidesPerView: 4,
                spaceBetween: 23,
                autoHeight: false,
        
                navigation: {
                nextEl: '#swiperRelatedProdBtnNext',
                prevEl: '#swiperRelatedProdBtnPrev',
                },
        
                scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                },
            
        
                // Responsive breakpoints
                breakpoints: {
                // when window width is >= 320px
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    freeMode: true,

                },
                
                767: {
                    slidesPerView: 2,
                    freeMode: false,
                },
        
                999: {
                    slidesPerView: 3,
                    scrollbar: true,
                    spaceBetween: 23,
                },
        
                1200: {
                    slidesPerView: 4,
                },
                } //breakpoints closed
        });

        /* RECIPE BLOG PAGE */

        const recipeBlogSliders = Array.from(document.querySelectorAll('.swiper-container'));
        recipeBlogSliders.forEach((container) => {
            if(container.hasAttribute('data-container-id')) {
                const dataID = container.getAttribute('data-container-id');
                const containerSelector = '.swiper-recipe-blog-page-' + dataID;

                const paginationSelector = '.recipe-blog-pagination-' + dataID;
                const bulletClass = 'swiper-section-pagination__el recipe-blog-pagination__el-' + dataID;
                const bulletActiveClass = 'swiper-section-pagination__el--active swiper-section-pagination__el-' + dataID +'--active'; 

                const swiperRecipeBlogPage = new SwiperCore(containerSelector, {
                    // Optional parameters
                    direction: 'horizontal',
                    loop: false,
                    slidesPerView: 1,
                    spaceBetween: 23,
                    autoHeight: true,
                
                    //Pagination
                    pagination: {
                    el: paginationSelector,
                    type: 'bullets',
                    clickable: true,
                    bulletClass: bulletClass, 
                    bulletActiveClass: bulletActiveClass
                    },
        
                    // Responsive breakpoints
                    breakpoints: {
                    // when window width is >= 320px
                    999: {
                        slidesPerView: 'auto',
                        direction: 'vertical',
                        pagination: false,
                        autoHeight: false,
                    },
                    // when window width is >= 640px
                    }
                });
            }

        });

        

        /* PRODUCT PAGE */

        const swiperProductBlog = new SwiperCore('.swiper-product-blog', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        /*     slidesPerView: 4,
        */  spaceBetween: 23,
        autoHeight: true,

        //Pagination
        pagination: {
            el: '.product-blog-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-section-pagination__el product-blog-pagination__el',
            bulletActiveClass: 'swiper-section-pagination__el--active product-blog-pagination__el--active'
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            0: {
            slidesPerView: 1,
            spaceBetween: 15,
            },
            
            767: {
            slidesPerView: 2,
            spaceBetween: 23,
            },

            999: {
            pagination: false,
            },

            1200: {
            slidesPerView: 3,
            allowTouchMove: false,
            },
            // when window width is >= 640px
        }
        });

        /* Recipes blog page */

        const swiperRecipesHead = new SwiperCore('.swiper-recipes-head', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        
        navigation: {
            nextEl: '#swiperRecipesHeadBtnNext',
            prevEl: '#swiperRecipesHeadBtnPrev',
        },



        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            0: {
            navigation: false,
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,
            },

            999: {
            spaceBetween: 24,
            freeMode: true,
            slidesPerView: 'auto',
            },

            1200: {
            slidesPerView: 4,
            freeMode: false,
            },

            1440: {
            navigation: true,
            freeMode: false,
            slidesPerView: 4,
            spaceBetween: 24,
            }
            // when window width is >= 640px
        }
        });

        /* Reviews page */
        const swiperReviewsPage = new SwiperCore('.swiper-reviews-page', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 50,
        autoHeight: true,

        breakpoints: {
            0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
            centeredSlides: true,
            },
            
            767: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            direction: 'vertical',
            },
        }
        
        });

        const swiperReviewsPage2 = new SwiperCore('.swiper-reviews-page2', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 50,
        autoHeight: true,

        breakpoints: {
            0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
            centeredSlides: true,
            },
            
            767: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            direction: 'vertical',
            },
        }
        
        });

        const swiperReviewsPage3 = new SwiperCore('.swiper-reviews-page3', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 50,
        autoHeight: true,

        breakpoints: {
            0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
            centeredSlides: true,
            },
            
            767: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            direction: 'vertical',
            },
        }
        
        });

        const paymentMethods = new SwiperCore('.swiper-payment-cards', {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
                slidesPerView: 3,
                spaceBetween: 20,
                autoHeight: false,
        
                navigation: {
                nextEl: '#swiperPaymentCardsNext',
                prevEl: '#swiperPaymentCardsBtnPrev',
                },
            
        
                // Responsive breakpoints
                breakpoints: {
                    // when window width is >= 320px
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    
                    999: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                } //breakpoints closed
        });

        
        const productDesktopGallery = new SwiperCore('.product-desktop-gallery', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 15,
            autoHeight: false,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
    
            navigation: {
            nextEl: '#productDesktopNavNext',
            prevEl: '#productDesktopNavPrev',
            },
        });

        const productMobileGallery = new SwiperCore('.product-mobile-gallery', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 15,
            autoHeight: false,
            watchOverflow: true,
    
            navigation: {
            nextEl: '#productMobileNavNext',
            prevEl: '#productMobileNavPrev',
            },
        });

        const productDesktopMainGallery = new SwiperCore('.product-desktop-image-slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: false,

            thumbs: {
                swiper: productDesktopGallery
            }
        });

        const productMobileMainGallery = new SwiperCore('.product-mobile-image-slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 15,
            autoHeight: false,

            thumbs: {
                swiper: productMobileGallery
            }
        });

        const aboutPageSlider = new SwiperCore('.about-page-slider', {
            // Optional parameters
            direction: 'vertical',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 20,
            allowTouchMove: false   ,

            pagination: {
                el: '.swiper-pagination-about-page-wrapper',
                type: 'custom',
                clickable: true,
            
                renderCustom: function(swiper, current, total) {
        
                    class PaginationEl {
                        constructor(title, desc) {
                            this.title = title;
                            this.desc = desc;
                        }
                    }
            
                    let names = [];
                    const slidesNamesEl =  document.querySelectorAll(".about-page-slide");
                    Array.from(slidesNamesEl).forEach(function(el) {
                        const title = el.querySelector('.about-info__desc-title').innerText;
                        const desc = el.querySelector('.about-info__desc-text').innerText;

                        const elObj = new PaginationEl(title, desc);
                        names.push(elObj);
                    });

                    
                    var text = "<div class='swiper-pagination swiper-pagination-about-page'><div class='about-info__desc'>";
                    for (let i = 0; i < total; i++) {
                        var elObj = names[i];
                        if (current - 1 == i) {

                            
                        text += "<div class='swiper-pagination-element swiper-pagination-element--active about-info__desc-el about-info__desc-el--active' data-swiper-page-element><div class='about-info__desc-title'>" + elObj.title + "</div><div class='about-info__desc-text'>"+ elObj.desc +"</div></div>";
                        } else {
                        text += "<div class='swiper-pagination-element about-info__desc-el' data-swiper-page-element><div class='about-info__desc-title'>" + elObj.title + "</div><div class='about-info__desc-text'>"+ elObj.desc +"</div></div>";
                    }
            
                    }
                    text += "</div></div>";
                    return text;
        
                }
            },

            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                0: {
                    height: null,
                },
                
                999: {
                    height: 400,
                    autoHeight: false,
                },

            }, //breakpoints closed

            
        });

        function initClickableAboutPagination() {
            var aboutPageSlideWrapper = document.querySelector('.about-info__wrapper');
            if(aboutPageSlideWrapper) {
                var aboutPageSlidesArr = Array.from(aboutPageSlideWrapper.querySelectorAll('.swiper-pagination-element'));

        
        
                aboutPageSlidesArr.forEach(function(item, index) {
                    item.addEventListener('click', function(){
                        aboutPageSlider.slideTo(index, 500, true);
                    });
                });
            }
            
        }

        initClickableAboutPagination();


        aboutPageSlider.on('slideChange', function() {
            initClickableAboutPagination();
        });

        
        

    }

}