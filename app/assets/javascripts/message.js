$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message" data-id="${message.id}">
                  <div class="message__top">
                    <p class="message__top__info">
                      ${message.user_name}
                    </p>
                    <p class="message__top__time">
                      ${message.date}
                    </p>
                  </div>
                  <div class="message__text">
                    <p class="message__top__text">${content}</p>
                    ${img}
                  </div>
                </div>`
    return html;
    }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({  
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('#new_message')[0].reset();
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.form__main__box__send').prop('disabled', false);
    })
  })
});