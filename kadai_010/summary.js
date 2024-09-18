$(function() {
  // id=change-colorがクリックされたら
  $('#change-color').on('click',function() {
    // id=targetの文字色が変わる
  $('#target').css('color','red');
  });

  // id=change-textがクリックされたら
  $('#change-text').on('click',function() {
    // テキスト変更
    $('#target').text('Hello!');
  });

  // id=fade-outがクリックされたら
  $('#fade-out').on('click',function() {
  //  フェードアウトで文字が消える
   $('#target').fadeOut();
  });

  // id=fade-inがクリックされたら
  $('#fade-in').on('click',function() {
  // フェードインで文字が現れる
  $('#target').fadeIn();
  });

});