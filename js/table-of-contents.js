
/**
 * Set up new table of contents component.
 * Finds all the heading tags in the HTML and puts them into a table of contents.
 */
var tableOfContents = new Component('#table-of-contents', {
  data: {
  },
  template: function (props) {
    var headings = Array.prototype.slice.call(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );
    var id = '';
    return headings.map(function (h, index) {
      // Create id for heading and link
      id = 'heading-' + index;
      // Set id of heading element
      h.setAttribute("id", id);
      // Create paragraph element with class based on heading level for styling
      var tocHeading = '<p class="toc-h' + h.tagName.substring(1) + '">';
      // Add link
      tocHeading += '<a href="#' + id + '">' + h.innerHTML + '</a>';
      // Return heading HTML
      return tocHeading;
    }).join('');
  }
});

// Render table of contents
tableOfContents.render();