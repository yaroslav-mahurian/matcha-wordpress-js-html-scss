export default class ProductPageVariation {
    constructor() {
  
    }
  
    init()  {
    
      function initVariation3Dmodel() {
        jQuery(function($) {
          var modelUrl;
         
          modelUrl = $('[data-variation-3dmodel-url]').first().text();
         

          var imageUrl = $('[data-variation-image-url]').first().text();

          var html = "";

          /* If variation has 3d model */
          if(modelUrl !== 'false ') {
            html = '<model-viewer class="product-head__model-img" src='+ modelUrl +'  poster='+ imageUrl +' alt="A 3D model of an astronaut" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer>';
          } else {
            html = '<a href="'+ imageUrl +'" data-fancybox data-caption=""><img class="product-head__photo-img" src='+imageUrl+' alt="product-image"></a>';
          }

          if($('[data-product-page]').attr('data-product-type') !== 'variable') {
            $('.product-desktop-main-image-slider').addClass('is-active');
            $('.product-mobile-main-image-slider').addClass('is-active');
            $('[data-photo-wrapper]').addClass('is-hidden');
          }

          $('[data-variable-photo-wrapper]').html(html);
  
          $('[data-product-gallery-photo]').off('click').on('click', function() {
            $('.product-desktop-main-image-slider').addClass('is-active');
            $('.product-mobile-main-image-slider').addClass('is-active');
            $('[data-photo-wrapper]').addClass('is-hidden');
            /* var galleryItemSrc = $(this).find('img').attr('src'); 
            var galleryHTML = '<a href="'+ galleryItemSrc +'" data-fancybox data-caption="">' + $(this).html() + 
            '</a>'; 

            $('[data-photo-wrapper]').html(galleryHTML); */
          });

        });
      }
    
      initVariation3Dmodel();

      function initAboutSubscr() {
        jQuery(function($) {
          $('.product-head__subsc-link').off('click').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('is-active');
          });
        });
      }

      function changeAddToCartBtnPrice(discount) {
        var productType = $('[data-cart-btn]').attr('data-product-type');

        var btnTitle = $('[data-cart-btn]').attr('data-cart-btn-text');
        var btnCurrency = $('[data-cart-btn]').attr('data-cart-btn-currency');

        if(discount) {
          var rawPrice = $('[data-cart-btn]').attr('data-cart-btn-price'); 

          var price;
          if(productType == 'variable') {
            price = Number(rawPrice.slice(1)); 
          } else {
            price = Number(rawPrice.slice(0, (rawPrice.length - 1)));
          }
          
          var discountPrice = (price - (price * discount / 100)).toFixed(2);
          $('[data-cart-btn]').html(discountPrice + btnCurrency + " - " + btnTitle);
        } else {
          if(productType == 'variable') {
            $('[data-cart-btn]').html( $('[data-variation-price-value]').find('.price').html() + " - " + btnTitle);
          } else {
            $('[data-cart-btn]').html($('[data-cart-btn]').attr('data-cart-btn-price') + " - " + btnTitle);
          }
          
        }
        
      }

      changeAddToCartBtnPrice();

      initAboutSubscr();

      jQuery(function($) {
        if ( $('.product-section').attr('data-product-type') == 'variable' ) {
          $('.product-bar__copy').html($('.product-section .variations_form').html());
          initAboutSubscr();


        } else if ( $('.product-section').attr('data-product-type') == 'simple' ) {
          $('.product-bar__copy').html($('.product-section form.cart').html());
          initAboutSubscr();

        }

      });

      const variationSelectArr = Array.from(document.querySelectorAll('[data-variation-select]'));

        
      variationSelectArr.forEach((select) => { 
          const optionsArr = Array.from(select.querySelectorAll('[data-variation-option]'));

          optionsArr.forEach((option) => {
              const defaultVariationSelect = document.querySelector('[data-variations-default-select]');
              const defaultOption = defaultVariationSelect.querySelector('option[selected=selected]');



              const optionEl = option.querySelector('[data-variation-option-el]');

              if (defaultOption) {
                const defaultOptionValue = defaultOption.value;
                if (optionEl.getAttribute('data-value') == defaultOptionValue) {
                  option.classList.add('product-head__var--active');
                  
                  $('[data-cart-btn]').attr('data-cart-btn-price', option.querySelector('.product-head__var-price').innerText);
                  changeAddToCartBtnPrice();
                }
              }
              
              option.addEventListener('click', () => {
                  optionsArr.forEach((option) => {
                      option.classList.remove('product-head__var--active');

                      jQuery(function($) {
                        $('[data-subscr-wrapper]').find('input[name=subscribe-to-action-input][value=no]').prop('checked', true);
                      });
                  });
                  option.classList.add('product-head__var--active');
                  initVariation3Dmodel();
              });
          });
      });
                
      jQuery(function($) {

          var defaultSelectedSubscrOption = $('.product-section [data-subscr-wrapper]').find('input[name=subscribe-to-action-input][value=yes]');
          
          if(defaultSelectedSubscrOption.is(':checked')) {
            $('[data-product-subscr-check]').prop('checked', true);
            var productSubscrSelect = $('[subscr-select-custom]');
            productSubscrSelect.addClass('active');
            productSubscrSelect.attr('data-subscr-check-active', '');
          }
        
          $('[data-variation-option]').on('click', function(){
              
              initVariation3Dmodel();
              $('[data-photo-wrapper]').removeClass('is-hidden');
              $('.product-desktop-main-image-slider').removeClass('is-active');
              $('.product-mobile-main-image-slider').removeClass('is-active');
              
              var value = $(this).find('[data-variation-option-el]').attr("data-value");
              $('[data-variation-option]').removeClass('product-head__var--active');
              $('[data-value="'+value +'"]').parent('[data-variation-option]').addClass('product-head__var--active');
              $('.product-section [data-variations-default-select]').find('option[value="'+ value +'"]').prop('selected',true).trigger('change');
          
              productPageSubscr();

              $('.custom-select-product').find('select').removeAttr('data-select-initialized');
              $('.custom-select-product .select-selected').remove();
              $('.custom-select-product .select-items').remove();
              $('#productSubscrCheckProduct-bar').prop("checked", false);
              $('#productSubscrCheck').prop("checked", false);

              $('[data-cart-btn]').attr('data-cart-btn-price', $(this).find('.product-head__var-price').text().trim());

              changeAddToCartBtnPrice();

              $('[subscr-select-custom]').removeClass('active');

              var selectAttrCont = $('.custom-select-product');

              selectAttrCont.each(function(index, item){
                var selectAttr = $(item).find('select').attr('data-product-select-initialized');
                if(typeof selectAttr == 'undefined') {
                  selectSubscr();
                }    
              });
              productPageSubscr(); 
       
              return false;
          });
      });

      
      function productPageSubscr() {
          jQuery(function($) {
            $('.product-bar__wrapper').find(' [data-product-subscr-check]').attr('id', 'productSubscrCheckProduct-bar');
            $('.product-bar__wrapper').find(' [data-product-subscr-checkbox]').attr('for', 'productSubscrCheckProduct-bar');
      
            $('#productSubscrCheck').off('click').on('click', function() {
              if($('#productSubscrCheckProduct-bar').is(":not(:checked)")) {
                $('#productSubscrCheckProduct-bar').prop("checked", true);
              } else {
                $('#productSubscrCheckProduct-bar').prop("checked", false);
              }
            });
      
            $('#productSubscrCheckProduct-bar').off('click').on('click', function() {
              if($('#productSubscrCheckProduct-bar').is(":not(:checked)")) {
                $('#productSubscrCheckProduct-bar').prop("checked", true);
              } else {
                $('#productSubscrCheckProduct-bar').prop("checked", false);
              }
              $('#productSubscrCheck').trigger('click');
            });

            $('[data-product-bar-add-to-cart]').off('click').on('click', function(){
              $('.single_add_to_cart_button').trigger('click');
            });
      
        });


        jQuery(function($) {
          $('#productSubscrCheck').click (function() {
            

            if($(this).is(":not(:checked)")) {
              $('[subscr-select-custom]').removeClass('active');
              $(this).removeAttr('data-subscr-check-active');
              $('.product-section [data-subscr-wrapper]').find('input[name=subscribe-to-action-input][value=no]').prop("checked", true).trigger("change"); 
              changeAddToCartBtnPrice();
              
    
            } else {
              $('[subscr-select-custom]').addClass('active');
              $(this).attr('data-subscr-check-active', '');
    
              $('.product-section [ data-subscr-wrapper]').find('input[name=subscribe-to-action-input][value=yes]').prop("checked", true).trigger("change");
             
              changeAddToCartBtnPrice($('[data-subscr-select]').find(':selected').attr('data-subscr-discount'));
            }

            
          });

          /* $('#productSubscrCheckProduct-bar').click (function() {
            var attr = $(this).attr('data-subscr-check-active');
            if (typeof attr !== 'undefined' && attr !== false) {
              $('[subscr-select-custom]').removeClass('active');
              $(this).removeAttr('data-subscr-check-active');

            } else {
              $('[subscr-select-custom]').addClass('active');
              $(this).attr('data-subscr-check-active', '');

            }
            
          }); */

        });
          
      }

      productPageSubscr();
  
      function selectSubscr()  {
          var x, i, j, l, ll, selElmnt, a, b, c;
          /* Look for any elements with the class "custom-select": */

          x = document.getElementsByClassName("custom-select-product");
          l = x.length;
            for (i = 0; i < l; i++) {
              selElmnt = x[i].getElementsByTagName("select")[0];
              if(!selElmnt.hasAttribute('data-product-select-initialized')) {
                selElmnt.setAttribute('data-product-select-initialized', '');
              }
              ll = selElmnt.length;
              /* For each element, create a new DIV that will act as the selected item: */
              a = document.createElement("DIV");
              a.setAttribute("class", "select-selected");
              var Selvalue = selElmnt.options[selElmnt.selectedIndex].value;
              a.setAttribute('value', Selvalue);
              a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
              x[i].appendChild(a);
              /* For each element, create a new DIV that will contain the option list: */
              b = document.createElement("DIV");
              b.setAttribute("class", "select-items select-hide");
              for (j = 0; j < ll; j++) {
                /* For each option in the original select element,
                create a new DIV that will act as an option item: */
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                  const value = selElmnt.options[j].value;
                  c.setAttribute('value', value);
                  c.addEventListener("click", function(e) {
                    jQuery(function($) {
                        $('.product-section [data-subscr-select]').find('option[value="'+ e.target.getAttribute('value') +'"]').prop('selected',true).trigger('change');
                        changeAddToCartBtnPrice($('.product-section [data-subscr-select]').find('option[value="'+ e.target.getAttribute('value') +'"]').attr('data-subscr-discount'));
                    });
                    /* When an item is clicked, update the original select box,
                    and the selected item: */
                    
                    var y, i, k, s, h, sl, yl;
                    
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                      if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                          y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                      }
                    }
                    h.click();
                });
                b.appendChild(c);
              }
              x[i].appendChild(b);
              a.addEventListener("click", function(e) {
                /* When the select box is clicked, close any other select boxes,
                and open/close the current select box: */
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-selected--active");
              });
            }

          
                   
          
          function closeAllSelect(elmnt) {
            /* A function that will close all select boxes in the document,
            except the current select box: */
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
              if (elmnt == y[i]) {
                arrNo.push(i)
              } else {
                y[i].classList.remove("select-selected--active");
              }
            }
            for (i = 0; i < xl; i++) {
              if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
              }
            }
          }
          
          /* If the user clicks anywhere outside the select box,
          then close all select boxes: */
          document.addEventListener("click", closeAllSelect);
      }
      selectSubscr();

      let scrollFnInit = false;
      let scrollFnCancel = false;
      let productOptionsEl = document.querySelector('[data-scroll-event]');

      let productOptionsElOffset = offsetProdPage(productOptionsEl).top;

      window.addEventListener('resize', function(){
        productOptionsElOffset = offsetProdPage(productOptionsEl).top;
      });
      window.addEventListener('scroll', function() {
        let scrolled = window.pageYOffset;

        if(scrolled >= productOptionsElOffset && scrollFnInit === false) {
          jQuery(function($) {
            $('.custom-select-product').find('select').removeAttr('data-product-select-initialized');
            $('.custom-select-product .select-selected').remove();
            $('.custom-select-product .select-items').remove();
            $('#productSubscrCheckProduct-bar').prop("checked", false);
            $('#productSubscrCheck').prop("checked", false);
  
            $('[subscr-select-custom]').removeClass('active');
  
            var selectAttrCont = $('.custom-select-product');
  
            selectAttrCont.each(function(index, item){
              var selectAttr = $(item).find('select').attr('data-product-select-initialized');
              if(typeof selectAttr == 'undefined') {
                selectSubscr();
              }    
            });
            productPageSubscr(); 
            $( ".product-bar" ).addClass( "is-active");

          });
     
          scrollFnInit = true;
          scrollFnCancel = false;
        } else if (scrolled < productOptionsElOffset && scrollFnCancel === false) {
          jQuery(function($) {
            $('.custom-select-product').find('select').removeAttr('data-product-select-initialized');
            $('.custom-select-product .select-selected').remove();
            $('.custom-select-product .select-items').remove();
            $('#productSubscrCheckProduct-bar').prop("checked", false);
            $('#productSubscrCheck').prop("checked", false);
  
            $('[subscr-select-custom]').removeClass('active');
  
            var selectAttrCont = $('.custom-select-product');
  
            selectAttrCont.each(function(index, item){
              var selectAttr = $(item).find('select').attr('data-product-select-initialized');
              if(typeof selectAttr == 'undefined') {
                selectSubscr();
              }    
            });
            productPageSubscr(); 
            $( ".product-bar" ).removeClass( "is-active");
          });

          scrollFnCancel = true;
          scrollFnInit = false;

        } else if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
          $( ".product-bar" ).removeClass( "is-active");
          scrollFnCancel = true;
          scrollFnInit = false;
        }
        
      });

      $('[data-product-bar-pull-up]').click(function(){
        $(this).toggleClass('is-active');
        $(this).parents('.product-bar').toggleClass('pull-up');
      });

      function offsetProdPage(elem) {
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
    }
}