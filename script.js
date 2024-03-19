setTimeout(function () {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 3000);

/*-------------------------------------------
ふわっと表示 
-------------------------------------------*/
$(
  ".works , .introduction, .skill ,.about ,.contact ,.strengths ,.idea_source"
).on("inview", function (event, isInView) {
  if (isInView) {
    $(this).addClass("active");
  }
});
