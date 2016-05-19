$(document).ready(function(){


	// built in
$.fn.embed.settings.sources = {
  youku: {
    name   : 'youku',
    type   : 'video',
    icon   : 'video play',
    domain : 'youku.com',
    url    : 'http://player.youku.com/embed/{id}',
    parameters: function(settings) {
      return {
        autohide       : !settings.showUI,
        autoplay       : settings.autoplay,
        color          : settings.colors || undefined,
        hq             : settings.hd,
        jsapi          : settings.api,
        modestbranding : 1
      };
    }
  }/*,
  vimeo: {
    name   : 'vimeo',
    type   : 'video',
    icon   : 'video play',
    domain : 'vimeo.com',
    url    : '//www.youtube.com/embed/{id}',
    parameters: function(settings) {
      return {
        api      : settings.api,
        autoplay : settings.autoplay,
        byline   : settings.showUI,
        color    : settings.colors || undefined,
        portrait : settings.showUI,
        title    : settings.showUI
      };
    }
  }*/
};
$('.ui.embed').embed();



















});