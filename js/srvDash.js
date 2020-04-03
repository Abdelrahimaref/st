$(function(){
  $('.plusIcon').click(function(){
      $('.pop2').show(500);
      $('.pop').hide();
  });
  $('.xPointPlus').click(function(){
    $('.pop2').hide(500);
  });
  $('.xPoint').click(function(){
    $('.pop').hide(500);
  });
  $('.contact').click(function(){
    $('.allInfo').show(500);
    $('.reqPage').hide(500);
    $('.action').hide(500);
    $(this).css({
      backgroundColor:'#2196f3',
      boxShadow:'0 0 8px 0 #2196f3',
      color: '#FFF',
    });
    $('.ic').css({
      color:'#fff'
    });
    $('.ic1').css({
      color:'#777'
    });
    $('.ic2').css({
      color:'#777'
    });
    $('.contact2').css({
      backgroundColor: 'transparent',
      boxShadow: '0 0 8px 0 #FFF',
      color:'#777'
    });
    $('.contact4').css({
      backgroundColor: 'transparent',
      boxShadow: '0 0 8px 0 #FFF',
      color:'#777'
    });
  });
  $('.contact4').click(function(){
    $('.allInfo').hide(500);
    $('.reqPage').hide(500);
    $('.action').show(500);
    $(this).css({
      backgroundColor:'#2196f3',
      boxShadow:'0 0 8px 0 #2196f3',
      color: '#FFF',
    });
    $('.ic2').css({
      color:'#fff'
    });
    $('.ic1').css({
      color:'#777'
    });
    $('.ic').css({
      color:'#777'
    });
    $('.contact2').css({
      backgroundColor: 'transparent',
      boxShadow: '0 0 8px 0 #FFF',
      color:'#777'
    });
    $('.contact').css({
      backgroundColor: 'transparent',
      boxShadow: '0 0 8px 0 #FFF',
      color:'#777'
    });
  });
  $('.contact1').click(function(){
    $('.pop').show(500);
    $('.pop2').hide();
  });
  $('.contact2').click(function(){
    $('.allInfo').hide(500);
    $('.reqPage').show(500);
    $('.action').hide(500);
    $(this).css({
      backgroundColor:'#2196f3',
      boxShadow:'0 0 8px 0 #2196f3',
      color: '#FFF',
    });
    $('.ic1').css({
      color:'#fff'
    });
    $('.contact').css({
      backgroundColor: 'transparent',
      boxShadow: '0 0 8px 0 #FFF',
      color:'#777'
    });
    $('.contact3').css({
      backgroundColor: 'transparent',
      boxShadow: '0 0 8px 0 #FFF',
      color:'#777'
    });
    $('.contact4').css({
      backgroundColor: 'transparent',
      boxShadow: '0 0 8px 0 #FFF',
      color:'#777'
    });
    $('.ic').css({
      color:'#777'
    });
    $('.ic2').css({
      color:'#777'
    });
  });
  $('.creditCardText').keyup(function() {  var foo = $(this).val().split("-").join("");
   if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
    $(this).val(foo);});
});