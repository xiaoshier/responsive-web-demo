/**
 * Created by xiaoshier on 15/12/17.
 */
$(document).ready(function () {

  /*------------------------------------*\
   #border-radius for ie8 hack;
   \*------------------------------------*/
  $('.circle').each(function () {
    PIE.attach(this);
  });
  $("#fp-nav ul li a span").each(function () {
    PIE.attach(this);
  });
  //刷新页面input输入框内容为空
  var inputElement = $('input');
  inputElement.val("");

  /*------------------------------------*\
   #input type="placeholder" for ie8 hack;
   \*------------------------------------*/
  //function placeholderIE() {
  //
  //    /*获取input元素*/
  //    var inputElement = $('input');
  //
  //    /*获取input键盘键入时，placeholder隐藏*/
  //    inputElement.focus(function () {
  //
  //        /*键盘键入时，placeholder隐藏*/
  //        $(this).parent().find(".placeholder").hide();
  //    });
  //
  //    /*input失去焦点，判断input是否输入内容，若内容为空，placeholder显示*/
  //    inputElement.blur(function () {
  //
  //        /*获取失去焦点的input值*/
  //        var inputContent = $(this).val();
  //
  //        //input为空，placeholder显示
  //        inputContent == '' ? $(this).parent().find(".placeholder").show() : '';
  //
  //    });
  //
  //}
  /*------------------------------------*\
   #input type="placeholder" for ie8 hack;
   \*------------------------------------*/
  function placeholderIE() {

    /*获取input元素*/
    var inputWrap    = $('.input-wrap');
    var inputElement = $("input");

    /*获取input键盘键入时，placeholder隐藏*/
    inputWrap.keydown(function () {
      /*键盘键入时，placeholder隐藏*/
      $(this).find(".placeholder").hide();
      $(this).find("input").focus();
    });

    /*input失去焦点，判断input是否输入内容，若内容为空，placeholder显示*/
    inputElement.blur(function () {

      /*获取失去焦点的input值*/
      var inputContent = $(this).val();

      //input为空，placeholder显示
      inputContent == '' ? $(this).parent().find(".placeholder").show() : '';

    });

  }

  /*调用placeholder函数*/
  placeholderIE();

  /*------------------------------------*\
   #index page animate
   \*------------------------------------*/
  $(".active .index-sub-pic").animate();
  /* css3动画 */

  //精益管理设计ui
  var stepLiOdd  = $(".ui-work-step-content li:odd");
  var stepLiEven = $(".ui-work-step-content li:even");
  stepLiOdd.addClass("step-li-odd");
  stepLiEven.addClass("step-li-even");
  stepLiOdd.find(".work-step-intro").addClass("step-li-odd");
  stepLiEven.find(".work-step-intro").addClass("step-li-even");
  $(".ui-work-step-content li:last-child .work-step").addClass("step-last");
  stepLiOdd.find(".work-step").addClass("step-odd");
  stepLiEven.find(".work-step").addClass("step-even");
  stepLiOdd.find(".work-step-circle").addClass("circle-odd");
  stepLiEven.find(".work-step-circle").addClass("circle-even");

  //精益管理－咨询可获得利益
  $(".value-content-container:even").addClass("value-content-even");
  $(".value-content-container:odd").addClass("value-content-odd");

});