$(function() {

  var cards = [
    {
           title: "Qwerty",
           id: 1,
           btnid: 1001,
           intro: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
           mentor: "sipah00",
           coordi:"ankita132",
           tag: ['javascript','hello','java']
       },
       {
           title: "Apple",
           id: 2,
           btnid: 1002,
           intro: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
           mentor: "sipah00",
           coordi:"americast",
           tag: ['javascript','hello','java']
       },
       {
           title: "Mango",
           id: 3,
           btnid: 1003,
           intro: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
           mentor: "sipah00",
           coordi:"americast",
           tag: ['julia','react','java']
       },
       {
           title: "Pineapple",
           id: 4,
           btnid: 1004,
           intro: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
           mentor: "sipah00",
           coordi:"americast",
           tag: ['javascript','hello','java']
       },
       {
           title: "Lichi",
           id: 5,
           btnid: 1005,
           intro: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
           mentor: "sipah00",
           coordi:"americast",
           tag: ['javascript','hello','java']
       },
       {
           title: "Choco",
           id: 6,
           btnid: 1006,
           intro: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
           mentor: "sipah00",
           coordi:"americast",
           tag: ['javascript','hello','java']
       }
  ];


  var str = "";

  $.each(cards , function(k,v){
    var list="";
    var i = 0;

    var len = v.tag.length;
    for(i = 0; i<len; i++){
      list +='<li>\
          <div class="tag">'+v.tag[i]+'</div>\
        </li>';
    }

    str +='<div class="cards">\
        <div class="card-item">\
          <div class="card-info">\
            <h2 class="card-title">'+v.title+'</h2>\
            <hr>\
            <p class="card-intro">'+v.intro+'</p>\
        </div>\
        <div class="mentor"><h2>-@'+v.mentor+'</h2></div>\
        <form id="form">\
      <ul class="tags custom">'+list+'\
      </ul>\
    </form>\
    <div class="wrap">\
         <a href="#" class="button" id="'+v.btnid+'" class="modal-btn">Details</a>\
     </div>\
        </div>\
      </div>\
      <div class="modal" id="'+v.id+'">\
        <div class="modal-content">\
          <div class="modal-header">\
            <h3 class="header-title">'+v.title+'</h3>\
            <div class="close fa fa-close"></div>\
          </div>\
          <div class="modal-body">\
            <h3>Description:-</h3>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit natus nemo et magni soluta voluptatibus quas quasi pariatur necessitatibus, totam, officia id at praesentium fuga molestias numquam ullam iure accusamus.</p>\
            <h3>Tags:-</h3>\
            <ul class="tags custom">'+list+'\
            </ul>\
            <h3>Mentors:-</h3>\
            <ul class="qwe">\
              <li>\
                <div class="tag">@'+v.mentor+'</div>\
              </li>\
            </ul>\
            <h3>Coordinator:-</h3>\
            <ul class="qwe">\
              <li>\
                <div class="tag">@'+v.coordi+'</div>\
              </li>\
            </ul>\
          </div>\
          <div class="modal-footer">\
          </div>\
        </div>\
      </div>';

$('.container2').html(str);

  });
var btnno, no;
var modBtn, modal, close,modContent;
  $('.button').click(function() {
       btnno = $(this).attr('id');
       no = btnno - 1000;
       console.log(btnno);
       console.log(no);
       modBtn  = $('#' + btnno);
       modal  = $('#' + no);
       console.log(modBtn);
       close   = modal.find('.close'),
       modContent = modal.find('.modal-content');
       modal.css('display', 'block');
       modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

        // close modal when click on close button or somewhere out the modal content
        $(document).on('click', function(e) {
          var target = $(e.target);
          if(target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
              modal.css('display', 'none');
              next();
            });
          }
        });


});
