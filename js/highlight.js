/**
 * highlight.js: Highlighting the element jumped from other pages. 
 *
 * Copyright (C) 2003 by Ryuji SAKAI
 * Copyright (C) 2003 by Kazuhiro NISHIYAMA
 * Copyright (C) 2011 by MATSUOKA Kohei <kmachu@gmail.com>
 * You can distribute it under GPL.
 */

$(function() {
  function highlight(anchor) {
    // clear current highlight
    $(".highlight").removeClass("highlight");
    var target = $(anchor).parent();
    target.addClass("highlight");
    // change document title
    if (target.filter('h3').size() > 0) {
      document.title = target.children("a").attr("title") + " - " + $tDiary.title;
    }
  }

  // bind click event to anchors
  $(document.anchors)
    .filter(function() {
      return $(this).attr("name").match(/^[pc]/);
    })
    .bind("click", function() {
      highlight(this);
    })

  if (document.location.hash) {
    highlight($('[name=' + document.location.hash.substr(1) + ']')[0]);
  }
});
