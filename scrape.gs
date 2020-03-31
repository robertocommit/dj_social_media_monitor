function scrape(profile) {
  var instagram = scrape_instagram(profile);
  return {
    'instagram': instagram
  }
}

function scrape_facebook() {
  var response = UrlFetchApp.fetch(facebook_url).getContentText();
  try {
    var sections = response.split('_3xom">');
  }
  catch(error) {
    var sections = '';
  }
  try {
    var likes = sections[1].split('<')[0];
  }
  catch(error) {
    var likes = '';
  }
  try {
    var followers = sections[2].split('<')[0];
  }
  catch(error) {
    var followers = '';
  }
  return {
    'likes': likes,
    'followers': followers
  }
}

function scrape_twitter() {
  var response = UrlFetchApp.fetch(twitter_url).getContentText();
  try {
    var section = response.split('ProfileNav-list')[1].split('</div>')[0];
  }
  catch(error) {
    var section = '';
  }
  try {
    var subsections = section.split('title="');
  }
  catch(error) {
    var subsections = '';
  }
  try {
    var tweets = subsections[1].split(' ')[0];
  }
  catch(error) {
    var tweets = '';
  }
  try {
    var following = subsections[2].split(' ')[0];
  }
  catch(error) {
    var following = '';
  }
  try {
    var followers = subsections[3].split(' ')[0];
  }
  catch(error) {
    var followers = '';
  }
  try {
    var likes = subsections[4].split(' ')[0];
  }
  catch(error) {
    var likes = '';
  }
  return {
    'tweets': tweets,
    'following': following,
    'followers': followers,
    'likes': likes
  }
}

function scrape_instagram(profile) {
  var response = UrlFetchApp.fetch(profile).getContentText();
  try {
    var posts = response.split('edge_owner_to_timeline_media":{"count":')[1].split(',')[0];
  }
  catch(error) {
    var posts = '';
  }
  try {
    var followers = response.split('"edge_followed_by":{"count":')[1].split('}')[0];
  }
  catch(error) {
    var followers = '';
  }
  try {
    var following = response.split('edge_follow":{"count":')[1].split('}')[0];
  }
  catch(error) {
    var following = '';
  }
  return {
    'posts': posts,
    'followers': followers,
    'following': following
  }
}

function scrape_youtube() {
  var response = UrlFetchApp.fetch(youtube_url).getContentText();
  try {
    var section = response.split('<div class="about-stats">')[1].split('<br/>')[0];
  }
  catch(error) {
    var section = '';
  }
  try {
    var subscribers = response.split('<b>')[1].split('<')[0];
  }
  catch(error) {
    var subscriber = '';
  }
  try {
    var views = response.split('<b>')[2].split('<')[0];
  }
  catch(error) {
    var view = '';
  }
  return {
    'subscribers': subscribers,
    'views': views
  }
}

function scrape_linkedin() {
  var proxy_url = 'https://api.proxycrawl.com/?token=LEvMjnBBDbKh7BDMro-Qdw&url='
  try {
    var response = UrlFetchApp.fetch(proxy_url + linkedin_url).getContentText();
  }
  catch(error) {
    var response = UrlFetchApp.fetch(proxy_url + linkedin_url).getContentText();
  }
  try {
    var followers = response.split('<p class="updates__overview-followers">')[1].split('followers')[0];
  }
  catch(error) {
    var followers = '';
  }
  try {
    var employees = response.split('See all ')[1].split('employees')[0];
  }
  catch(error) {
    var employees = '';
  }
  return {
    'followers': followers,
    'employees': employees
  }
}


function test() {
  Logger.log(scrape('https://www.instagram.com/anetha_music/'));
}
