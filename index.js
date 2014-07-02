  var d = new Date();
  navigator.mozL10n.ready( function() {
      // navigator.mozL10n.language.code = 'pl';
      console.log('1', 'ready');
      var f = new navigator.mozL10n.DateTimeFormat();
      console.log('2', f);
      var format = navigator.mozL10n.get('dateFormat');
      console.log('3', format);
      var formatted = f.localeString(d, format);
      console.log('4', formatted);
});
console.log('waiting for the ready');
