# Mondo Dashboard

A dashboard built on top of the Mondo API.

In order to use this you'll need to set up two functions with AWS Lambda. https://github.com/willrax/mondo-lambda-auth


# Installation

```
git clone git@github.com:willrax/mondo-dashboard.git
cd mondo-dashboard
npm install; bower install;
cp example.env .env
```
Fill in the .env file with the Mondo API host and your lambda host.

You can run the application with `ember server`.

# Coming Soon

- Transaction details view with maps and counters.
- Maps.
- Charts.
