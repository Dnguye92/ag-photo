var loadBtn = document.getElementById('loadBtn')

var feed = new Instafeed({
    get: 'user',
    userId: '397060188',
    limit: 16,
    resolution: 'standard_resolution',
    accessToken: '397060188.1677ed0.58f3010f06544b70a3d6b75d11a1521e',
    sortBy: 'most-recent',
    clientId: '2c0aaea40a844cebbf35635038a6e9a5',
    template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{image}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>',
    after: function() {
        if(!this.hasNext()) {
            loadBtn.setAttribute('disabled', 'disabled');
        }
    }
});

loadBtn.addEventListener('click', function() {
  feed.next();
});

feed.run();

$('.gallery').magnificPopup({
    type: 'image',
  delegate: 'a',
  gallery: {
    enabled: true
  }
});