setTimeout(function () {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 3000);

//スクロールをしたら1度だけアニメーションをする設定
$(
  ".works , .introduction, .skill ,.about ,.contact ,.strengths ,.idea_source"
).on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("active"); //クラス名が付与
  }
});
