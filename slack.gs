function send_to_slack(profile, status) {
  var payload = {
    "channel" : "YOUR_SLACK_CHANNEL",
    "text" : profile + " --> " + status
  }
  var options =  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : JSON.stringify(payload)
  };
  UrlFetchApp.fetch("YOUR_SLACK_URL", options);
}
