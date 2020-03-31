function get_date() {
  var date = new Date();
  return Utilities.formatDate(date, 'Etc/GMT', 'yyyy/MM/dd');
}

function get_random_color() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function remove_dimension_from_2d_array(array) {
  return array.join().split(',');
}
