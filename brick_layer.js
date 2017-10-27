var path = window.location.href;

if ((path.indexOf('reddit.com') > -1) && (path.indexOf('the_donald') === -1)) {
  var link  = document.createElement('link');

  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.ref  = 'applied_subreddit_stylesheet'
  link.href = 'https://b.thumbs.redditmedia.com/RRwsrHl0qgghmDxcW9Jv2yVdfTojiJc8mk7p4S1N1qQ.css'; // last synced: 10.26.17
  document.getElementsByTagName('head')[0].appendChild(link);
}

// hide side nav, which often breaks
document.getElementsByClassName('side')[0].getElementsByClassName('usertext-body')[0].style.display = 'none';
