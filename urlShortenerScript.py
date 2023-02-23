import pyshorteners

# Create an instance of the Shortener class
shortener = pyshorteners.Shortener()

# Get the URL you want to shorten from the user
url = input("Enter the URL you want to shorten: ")

# Shorten the URL
shortened_url = shortener.tinyurl.short(url)

# Print the shortened URL
print("Shortened URL: ", shortened_url)
