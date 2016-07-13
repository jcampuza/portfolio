$(document).ready(function() {
  var wordCount = $('#word-count');
  var charCount = $('#character-count');
  var sentenceCount = $('#sentence-count');
  var paragraphCount = $('#paragraph-count');
  var textarea = $('textarea');
  
  textarea.on('keyup', function() {
    var text = textarea.val();
    var characters = text.split('');
    var words = text.split(' ').filter(function(word) {
      return word.length > 0; 
    });
    var sentences = text.split(/[\.\!\?]+/);
    var paragraphs = text.split(/\n+/).filter(function(e) {
      return Boolean(e);
    });
    charCount.text(characters.length);
    wordCount.text(words.length);
    sentenceCount.text(sentences.length - 1);
    paragraphCount.text(paragraphs.length);
  })
});

console.log('This is something else ya know.');