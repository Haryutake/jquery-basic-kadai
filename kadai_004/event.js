  // HTMLドキュメントが読み込み完了したときに
  $(window).on('load',()=>{
    console.log('loadイベントが発生しました');
  });


  // 画面をスクロールしたときに
  $(window).on('scroll',()=>{
    console.log('scrollイベントが発生しました');
  });