export default class Checkout {
    constructor() {
  
    }
  
    init()  {
        jQuery(function($) {
            $('.header').css("display", "none");
            $('.footer__wrapper').css("display", "none");
            $('.footer').addClass('footer--checkout');
            $('.footer__hr').css("display", "none");
            $('[data-checkout-dropdown]').click(function(){
                $(this).toggleClass('is-active');
                $(this).siblings('[data-сheckout-dropdown-body]').toggleClass('is-active');
            });

            $("[data-order-submit-custom]").click(function(e) {
                e.preventDefault();

                $("[name='billing_first_name']").val($("[name='shipping_first_name']").val());
                $("[name='billing_last_name']").val($("[name='shipping_last_name']").val());
                $("[name='billing_company']").val($("[name='shipping_company']").val());
                $("[name='billing_address_1']").val($("[name='shipping_address_1']").val());
                $("[name='billing_address_2']").val($("[name='shipping_address_2']").val());
                $("[name='billing_city']").val($("[name='shipping_city']").val());
                $("[name='billing_postcode']").val($("[name='shipping_postcode']").val());
                $("[name='billing_country']").val($("[name='shipping_country']").val());
                $("[name='billing_phone']").val($("[name='shipping_phone']").val());
                $("[name='billing_email']").val($("[name='shipping_email']").val());


                if($('.checkout__option-terms-checkbox input:checked').length > 0) {
                    $("[data-order-submit-default]").trigger('click');
                } else {
                    $('.checkout__option-terms-checkbox input').siblings('span').css('color', 'red');
                }
                

            });

            $('[data-show-login]').click(function(e) {
                e.preventDefault();
                $('[data-login-form]').addClass('is-active');
            });
              
            $('[data-login-form]').click(function(e) {
                if($(e.target).attr('id') == "customLoginForm") {
                    $(this).removeClass('is-active');
                }
            });

            $('[data-login-close]').click(function(e) {
                e.preventDefault();
                $(this).parents('[data-login-form]').removeClass('is-active');
            });

        });
        
    }

}