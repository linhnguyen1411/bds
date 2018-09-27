CKEDITOR.editorConfig = function (config) {
  config.toolbar = [
    { name: 'basicstyles', items : [ 'Bold', 'Italic', 'Underline', 'Strike' ] },
    { name: 'colors', items : [ 'Subscript', 'Superscript' , 'RemoveFormat', 'TextColor', 'BGColor' ] },
    { name: 'styles', items : [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    { name: 'paragraph', items : [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight',
      'JustifyBlock', '-', 'NumberedList', 'BulletedList', 'Outdent', 'Indent' ] },
    { name: 'editing', items : [ 'Undo', 'Redo', 'Find', 'Replace', 'SpellChecker', 'Scayt' ] },
    { name: 'insert', items : [ 'Image', 'Table', 'Smiley', 'SpecialChar', 'Link'] }
  ];
  config.height = 350;
}
