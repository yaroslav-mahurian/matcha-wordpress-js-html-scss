export default class Modal {
    constructor() {
  
    }
  
    init()  {
        jQuery(function($) {
            $('[data-product-details]').click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $('[data-modal-container]').addClass('is-active');
            });
            
            $('[data-modal-close]').click(function() {
                $(this).parents('[data-modal-container]').removeClass('is-active');

            });
        });
    }

}