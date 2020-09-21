/*** LOOP AUDIO ***/  

/* var myAudio = new Audio('https://freesound.org/data/previews/344/344204_5922762-lq.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play(); 
 */
var raptorAudio = new Audio('https://freesound.org/data/previews/233/233279_4056007-lq.mp3'); 

function RaptorSound() {

raptorAudio.play();  

};

var trexAudio = new Audio('https://freesound.org/data/previews/233/233284_4056007-lq.mp3'); 

function TrexSound() {

trexAudio.play();  

};

/*** SCROLL MAGIC ***/

/* Controller */
var controller = new ScrollMagic.Controller();

/* Tween */
var tween = TweenMax.to("#raptor", 1, {left:200, ease: Power4.easeIn, onComplete : RaptorSound})

var tween2 = TweenMax.to("#trex", 1, {left:-200, ease: Power4.easeIn, onComplete : TrexSound})

var tweenLi = TweenMax.staggerFromTo('.raptorLi', 0.75, {opacity: 0, y: -100, ease:Power4.easeIn}, 
                                                        {opacity: 1, y: 0, ease:Power4.easeIn}, 1); 

var tweenLi2 = TweenMax.staggerFromTo('.trexLi', 0.75,  {opacity: 0, y: -100, ease:Power4.easeIn}, 
                                                        {opacity: 1, y: 0, ease:Power4.easeIn}, 1);

var tweenBtn = TweenMax.staggerFromTo('.btn1', 0.75,    {opacity:0, x:-100, ease:Power4.easeIn},
                                                        {opacity:1, x:0, ease:Power4.easeIn},0.1);

var tweenBtn2 = TweenMax.staggerFromTo('.btn2', 0.75,   {opacity:0, x:100, ease:Power4.easeIn},
                                                        {opacity:1, x:0, ease:Power4.easeIn},0.1);

/* Scene ScrollMagic */

var scene = new ScrollMagic.Scene({triggerElement: "#animate1", offset: 50})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.5)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "raptor", colorTrigger: "blue",  indent: 400})
                                  /* Liaison à Greensock */
                                  .setTween(tween)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
                                  

var scene2 = new ScrollMagic.Scene({triggerElement: "#animate2", offset: 100})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.8)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "trex", colorTrigger: "blue", indent: 500})
                                  /* Liaison à Greensock */
                                  .setTween(tween2)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
                                  

var scene3 = new ScrollMagic.Scene({triggerElement: "#animate1", offset: 50})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.5)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "li1", colorTrigger: "green", indent: 500})
                                  /* Liaison à Greensock */
                                  .setTween(tweenLi)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
                                  

var scene4 = new ScrollMagic.Scene({triggerElement: "#animate2", offset: 100})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.8)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "li2", colorTrigger: "blue", indent: 400})
                                  /* Liaison à Greensock */
                                  .setTween(tweenLi2)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
                                  

var scene5 = new ScrollMagic.Scene({triggerElement: "#animate1", offset: 50})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.5)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "btn1", colorTrigger: "blue", indent: 400})
                                  /* Liaison à Greensock */
                                  .setTween(tweenBtn)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
                                  

var scene6 = new ScrollMagic.Scene({triggerElement: "#animate2", offset: 100})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.8)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "btn2", colorTrigger: "blue", indent: 400})
                                  /* Liaison à Greensock */
                                  .setTween(tweenBtn2)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
                                  
                                
                                  


                                  




