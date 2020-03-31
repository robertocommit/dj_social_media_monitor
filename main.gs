var spreadsheet = SpreadsheetApp.openById('YOUR_SHEET_URL');
var sheet_data = spreadsheet.getSheetByName('Data');
var sheet_profiles = spreadsheet.getSheetByName('Profiles');

function main() {
  var date = get_date();
  var profiles = get_profiles();
  for (var i = 0; i < profiles.length; i++) {
    try {
      var scraping_data = scrape(profiles[i]);
      update_spreadsheet(date, profiles[i], scraping_data);
      send_to_slack(profiles[i], 'OK');
    }
    catch (error) {
      send_to_slack(profiles[i], 'KO');
    }
    Utilities.sleep(1000);
  }
}

function get_profiles() {
  return remove_dimension_from_2d_array(sheet_profiles.getRange(1, 2, sheet_profiles.getLastRow()).getValues());
}

function update_spreadsheet(date, profiles, scraping_data) {
  var output = new Array();
  for (var social in scraping_data) {
    for (var metric in scraping_data[social]) {
      output.push([date, social, profiles, metric, scraping_data[social][metric]]);
    }
  }
  Logger.log(output);
  sheet_data.getRange(sheet_data.getLastRow() + 1, 1, output.length, output[0].length).setValues(output);
}
