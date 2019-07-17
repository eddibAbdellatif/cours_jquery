$(document).ready(function () {

     var $mainMenuItem = $("#main-menu ul").children("li"),
         totalMainMenuItems = $mainMenuItem.length,
         openedIndex = 2;

     var init = function () {
             bindEvents();
             if(validIndex(openedIndex))
             animateItem($mainMenuItem.eq(openedIndex), true, 550 );
     },

     bindEvents = function(){

         $mainMenuItem.children(".images").click(function () {
             var newIndex = $(this).parent().index();
             checkAndAnimateItem(newIndex);

         });

         $(".button").hover(
             function ()
             {
                $(this).addClass("hover");
             },
             function ()
             {
                 $(this).removeClass("hover")
             }
             );
         $(".button").click(function (){
             var newIndex = $(this).index();
             checkAndAnimateItem(newIndex);

         });
     },

     validIndex = function(indexToCheck){

        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems )
     },

     animateItem = function ($item,toOpen,speed) {
         var $colorImage = $item.find(".color");
         var itemParam = toOpen ? {width: "420px"}: {width: "140px"};
         var $colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};

         $colorImage.animate($colorImageParam,speed);
         $item.animate(itemParam,speed);
         //openedIndex = newIndex;
     },

     checkAndAnimateItem = function(newIndex){

         var $item = $mainMenuItem.eq(newIndex);

         if (openedIndex === newIndex)
         {
             animateItem($item, false, 250 );
             openedIndex = -1;
         }
         else
         {
             if (validIndex(newIndex))
             {
                 animateItem($mainMenuItem.eq(openedIndex),false,250)
                 openedIndex = newIndex;
                 animateItem($item, true, 250 );
             }
         }
     };



     init();
});