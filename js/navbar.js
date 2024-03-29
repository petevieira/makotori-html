
var navbar = new Component('nav', {
  data: {
    menuItems: {
      'Cultivation Arts':
        ['Mind Body Journal', 'Meditation', 'Taiji', 'Yoga', 'Qigong',
         'Wing Chun', 'Nunchaku', 'Qi', 'Measuring Body Markers',
         'Dynamic Stretching'],
      'Psychology': ['Psychology'],
      'Linguistics':
        ['Language Diversity', 'Language Origins', 'Syntax I']
    }
  },
  template: function (props) {
    var html = '';
    for (let [key, value] of Object.entries(props.menuItems)) {
      // Create dropdown menu div with button
      html += '<div class="dropdown">'
           +   '<button class="dropdown-button">' + key
           +      '<i class="fa fa-caret-down"></i>'
           +    '</button>'
           +    '<div class="dropdown-content">';
      // Add dropdown content items
      html += value.map(function (item) {
        // Create html file name for link by converting name of page to
        // lowercase and replace spaces with dashes
        var link =
          key.toLowerCase().replace(/ /g, '-') + '/' +
          item.toLowerCase().replace(/ /g, '-') + '.html';
        return    '<a href="' + link + '">' + item + '</a>';
      }).join('');
      // Close dropdown-content div and dropdown div
      html +=   '</div>'
           +  '</div>';
    }
    return html;
  }
});

// Render navigation bar
navbar.render();