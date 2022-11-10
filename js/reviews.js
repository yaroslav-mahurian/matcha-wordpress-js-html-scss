export default class Reviews {
    constructor() {
  
    }
  
    init()  {
        const productReviewFormWrapper = document.querySelector('#productReviewFormWrapper');


        if (productReviewFormWrapper) {
            /* Submit Btn */
            const submitBtnDef = productReviewFormWrapper.querySelector('#submit');
            const submitBtnCustom = productReviewFormWrapper.querySelector('#customSubmit');

            /* Name input */
            const nameInputDef = productReviewFormWrapper.querySelector('#author');
            const nameInputCustom = productReviewFormWrapper.querySelector('#reviewsName');

            /* Email input */
            const emailInputDef = productReviewFormWrapper.querySelector('#email');
            const emailInputCustom = productReviewFormWrapper.querySelector('#reviewsEmail');

            /* Rating block */
            
            const ratingStarsBlockCustom = productReviewFormWrapper.querySelector('#reviewsRatingStars');
            const ratingStarsArrCustom = Array.from(ratingStarsBlockCustom.querySelectorAll('.article__rating-el'));

            ratingStarsArrCustom.forEach((star)=> {
                const indexValue = ratingStarsArrCustom.indexOf(star) + 1;

                star.addEventListener('mouseover', ()=> {
                    ratingStarsArrCustom.forEach((el, index) => {

                        if(index < indexValue) {
                            el.classList.add('article__rating-el--onhover');
                        } else {
                            el.classList.remove('article__rating-el--onhover');
                        }
                    });
                });

                star.addEventListener('mouseout', ()=> {
                    ratingStarsArrCustom.forEach((el)=> {
                        if(!el.hasAttribute('data-active')) {
                            el.classList.remove('article__rating-el--onhover');

                        }
                    });
                });


                star.addEventListener('click', ()=> {
                    ratingStarsArrCustom.forEach((el, index) => {
                        el.setAttribute('data-active', '');
                        el.classList.remove('article__rating-el--onhover');
                        if(index < indexValue) {
                            el.classList.add('article__rating-el--onhover');
                        } else {
                            el.classList.remove('article__rating-el--onhover');
                        }
                    });
                    jQuery(function($) {
                        var productRatingDef = $('#rating-default');
                        if(productRatingDef) {
                            $('#rating-default').find('option[value="'+ indexValue +'"]').prop('selected',true).trigger('change');
                        }
                        var postRatingDef = $('.wppcr_rating');
                        if (postRatingDef) {
                            $('.wppcr_rating').find('input[value="'+ indexValue +'"]').prop('checked',true).trigger('change');
                        }
                    });                
                });
            });

            /* Comment block */

            const commentInputDef = productReviewFormWrapper.querySelector('#comment');
            const commentInputCustom = productReviewFormWrapper.querySelector('#reviewsComment');

            submitBtnCustom.addEventListener('click', function(e) {
                e.preventDefault();

                /* Name input */
                if(nameInputCustom) {
                    nameInputDef.value = nameInputCustom.value;
                }
                
                /* Email input */
                if(emailInputCustom) {
                    emailInputDef.value = emailInputCustom.value;
                }

                /* Comment input */
                commentInputDef.value = commentInputCustom.value;
                
                

                /* Submit Btn */
                submitBtnDef.click();
            });



        }

    }

}
