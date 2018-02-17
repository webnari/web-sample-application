
// フォームが送信されるときに実行される。
document.querySelector('#form1').addEventListener('submit',function(e){
  // フォームの値を取得
  var name = document.querySelector("input[name='name']").value
  var password = document.querySelector("input[name='password']").value

  if( name == '' || password == ''){
    alert('passwordあるいはNameが不正です。')
    e.preventDefault() //値が不正だったら送信させない。
  }
})
