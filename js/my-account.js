export default class MyAccountPage {
    constructor() {
  
    }
  
    init()  {
        $('[data-ma-dashboard-page]').parents(['data-ma-content-wrapper']).siblings('[data-ma-navigation]').css('display', 'block');
        
        $('[data-ma-dashboard-page]').siblings('[data-ma-navigation-back]').css('display', 'none');

        /* Edit profile info */
        const profilePageEl = document.querySelector('[data-my-account-page-dashboard]');
        if(profilePageEl) {

            const profElArr = Array.from(document.querySelectorAll('[data-ma-prof-el]'));
            const defProfFormBlock = document.querySelector('[data-ma-prof-form-default]');
            if(profElArr) {
                profElArr.forEach((el) => {
                    if (el) {
                        const editBtn = el.querySelector('[data-ma-prof-edit]');
                        const inputBlock = el.querySelector('[data-ma-prof-input]');
                        if(inputBlock) {
                            const saveBtn = inputBlock.querySelector('[data-ma-prof-save]');

                            editBtn.addEventListener('click', (e) => {
                                e.preventDefault();
                                inputBlock.classList.add('ma-section__edit--active');
                            });

                            saveBtn.addEventListener('click', (e) => {
                                e.preventDefault();
                                
                                const inputs = e.target.closest('[data-ma-prof-input]').querySelectorAll('input[data-form-attr]');
                                const inputsArr = Array.from(inputs);
                                inputsArr.forEach((input)=> {
                                    const customInputVal = input.value;
                                    const attr = input.getAttribute('data-form-attr');
                                    const defInput = defProfFormBlock.querySelector(`input[data-form-attr='${attr}']`);
                                    defInput.value = customInputVal;
                                    jQuery(function($) {
                                        $('[data-ma-prof-submit-default]').trigger( "click" );
                                    });
                                });
                                
                  

                                inputBlock.classList.remove('ma-section__edit--active');
                            });
                        }   
                        
                    }
                    
                });
            }

        }
        /* Add new address btn */
        const profileAddressesPageEl = document.querySelector('[data-my-account-page-addresses]');
        if(profileAddressesPageEl) {
            jQuery(function($) {
                var addressBlock = $('[data-ma-address]');
                addressBlock.find('[data-ma-add-address-btn]').click(function(e) {
                    e.preventDefault();
                    $(this).removeClass('is-active');
                    $(this).siblings('[data-ma-add-address-btn]').addClass('is-active');
                    
                    addressBlock.find('[data-ma-add-address-form]').toggleClass('is-active');
                });
            });
        }
        
        const profileOrdersPageEl = document.querySelector('[data-my-account-page-orders]');

        if(profileOrdersPageEl) {
            jQuery(function($) {
                var order = $('[data-ma-order]');
                order.find('[data-ma-order-arrow]').click(function(e) {
                    e.preventDefault();
                    $(this).parents('[data-ma-order]').toggleClass('is-active');
                });

                /* Product count */
                order.each(function(index, item) {
                    var maxProductImagesCount = 3;
                    var productImages = $(item).find('.ma-order__products-el');
                    productImages.each(function(index, item ){
                        if (index >= 3) {
                            $(item).css('display', 'none');
                        }
                    });
                    var productImagesCount = $(item).find('.ma-order__products-el').length;
                   
                    var productImagesCountDiff = productImagesCount - maxProductImagesCount;

                    var productCountText = "+" + productImagesCountDiff;
                    if (productImagesCount > maxProductImagesCount) {
                        $(item).find('.ma-order__count').css('display', 'flex');
                        $(item).find('.ma-order__count').text(productCountText);
                    }

                    $('.ma-order__products').css('display', 'flex');
                });
               
                
            });
        }


        const paymentsPageEl = document.querySelector('[data-my-account-page-payments]');
        if(paymentsPageEl) {
            jQuery(function($) {
                var paymentsBlock = $('[data-ma-payments]');
                paymentsBlock.find('[data-ma-edit-payment-btn]').click(function(e) {
                    e.preventDefault();
                    $(this).removeClass('is-active');
                    $(this).siblings('[data-ma-edit-payment-btn]').addClass('is-active');
                    $('[data-ma-payments-slider]').toggleClass('is-active');
                    
                    
                });
            });
        }

        /* Subscr load more btn */
        if( $('.ma-subscr__el').length > 4 && $( window ).width() <= 999) {
            $('[data-load-more-subscr]').css("display", "block");
        }

        $('[data-load-more-subscr]').click(function(e) {
            e.preventDefault();
            $('[data-load-more-subscr-wrapper]').css("overflow", "visible");
            $('[data-load-more-subscr-wrapper]').css("max-height", "none");
            $(this).css("display", "none");
        });

    }
}