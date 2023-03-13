
function openNav() {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("main").style.marginLeft = "100%";
  }
  
  function closeNav() {
    document.getElementById("nav").style.height = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 



  const tween = new TimelineLite();

  tween.add(
    TweenLite.to('.shape1,.shape2',1,{
      strokeDashoffset:0,
      strokeDasharray:2200
    })
  )
  
  const controller = new ScrollMagic.Controller()
  
  const scene = new ScrollMagic.Scene({
    triggerElement: '.quote',
    duration : 900,
    triggerHook : 0.8
  })
  .setTween(tween)
  .addTo(controller)