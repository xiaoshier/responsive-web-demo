/**
 * Created by xiaoshier on 15/7/9.
 */
$(document).ready(function () {
  /*------------------------------------*\
   #mobile nav show and hide
   \*------------------------------------*/
  //移动端导航切换
  function mobileNavCollapse() {
    /*获取移动端导航*/
    var mobileNavBar = $("#nav-mobile-wrap");

    /*获取点击按钮*/
    var navbarToggle = $(".navbar-toggle");

    /*获取页面内容容器*/
    var contentWrap = $("#content-wrap");

    /*获取关闭按钮*/
    var close = $(".nav-mobile-close");

    var body = $("body");

    var globalHeader = $("#global-header");

    var manageSideBar = $(".manage-sidebar");

    /*点击导航按钮，通过控制绝对定位的位置，页面内容消失，移动端导航出现*/
    navbarToggle.click(function () {

      /*移动端导航绝对定位left为0*/
      mobileNavBar.addClass("mobile-menu-open");

      /*页面内容绝对定位left为－100%*/
      contentWrap.addClass("menu-open");

      /*body元素添加类名，防止出现移动端导航时出现滚动条*/
      body.addClass("no-scroll");

      toolBarCol.hide();

      /*兼容android的qq和微信导航代开，主导航和精益管理子导航不隐藏*/
      globalHeader.hide();

      manageSideBar.hide();

    });

    /*点击关闭导航按钮，通过绝对定位的位置，移动端导航消失，页面内容出现*/
    close.click(function () {
      /*移动端导航，绝对定位为－100%*/
      mobileNavBar.removeClass("mobile-menu-open");

      /*页面内容绝对定位为left为0*/
      contentWrap.removeClass("menu-open");

      body.removeClass("no-scroll");

      toolBarCol.show();

      /*兼容android的qq和微信导航代开，主导航和精益管理子导航不隐藏*/
      globalHeader.show();

      manageSideBar.show();
    });
  }

  mobileNavCollapse();

  /*------------------------------------*\
   #change code page
   \*------------------------------------*/
  /*修改密码，点击获取验证码，切换至修改密码框*/
  var getCode = $(".get-code-submit");
  /*点击获取验证码触发事件*/
  getCode.click(function () {

    /*获取验证码框隐藏*/
    $(".get-code-wrap").hide();
    /*修改密码框显示*/
    $(".change-password-wrap").show();
  });

  /*------------------------------------*\
   #manage design page
   \*------------------------------------*/
  $(".manage-sidebar-main li").eq(1).click(function (event) {
    event.stopPropagation();
    var manageSidebarSub = $(".manage-sidebar-sub");

    manageSidebarSub.is(":hidden") ? manageSidebarSub.show() : manageSidebarSub.hide();

  });

  /*------------------------------------*\
   #down collapse module
   \*------------------------------------*/
  function collapse(collapseContainer, arrowUp, arrowDown) {

    var collapseTitleContainer      = collapseContainer.find('.collapse-title-container');
    var collapseAllContentContainer = collapseContainer.find('.collapse-content-container');
    collapseTitleContainer.click(function () {
      //下拉列表标题
      var collapseTitle            = $(this).find('.collapse-title');
      var arrowBtn                 = $(this).find('.icon');
      var collapseContentContainer = $(this).parent().find('.collapse-content-container');
      var collapseContent          = collapseContentContainer.find('.collapse-content');

      collapseAllContentContainer.hide();
      //如果内容隐藏，则显示
      if (collapseContentContainer.is(':hidden')) {

        //内容显示
        collapseContentContainer.show();

        //箭头朝上
        arrowBtn.addClass(arrowUp).removeClass(arrowDown);

        collapseContent.click(function () {

          //内容点击后获取内容，给标题赋值
          collapseTitle.val($(this).text());

          //点击后内容隐藏
          collapseContentContainer.hide();

          //点击后箭头朝下
          arrowBtn.removeClass(arrowUp).addClass(arrowDown);
        });

      } else {

        //箭头朝下
        arrowBtn.removeClass(arrowUp).addClass(arrowDown);

        //内容隐藏
        collapseContentContainer.hide();
      }
    });

  }

  var cooperationSelect = $(".cooperation-select");
  collapse(cooperationSelect, "arrow-up", "arrow-down");

  //返回顶部
  $(".back-top").click(function () {
    var rootEle = $("html, body");
    if ($(window).scrollTop != 0) {
      if (!rootEle.is(":animated")) {
        rootEle.animate({
          scrollTop: 0
        }, 500);
      }
    }
  });



});






