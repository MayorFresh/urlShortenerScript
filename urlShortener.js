const shortener = require('node-url-shortener');
const readline = require('readline');

// Create an interface for getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter the URL they want to shorten
rl.question('Enter the URL you want to shorten: ', (url) => {
  // Shorten the URL
  shortener.short(url, function(err, shortenedUrl) {
    if (err) {
      console.log(err);
    } else {
      // Print the shortened URL
      console.log(`Shortened URL: ${shortenedUrl}`);
    }
    // Close the readline interface
    rl.close();
  });
});
