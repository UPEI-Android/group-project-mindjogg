# Deploy The Server To Cloud

## Deployment To Heroku

The Server of the app is hosted on Heroku from the stage environment.

### Steps to deploy the backend to Heroku

1. Create a new account on Heroku (The account is already created).
2. Download the Heroku CLI on your computer from [Heroku](https://devcenter.heroku.com/articles/heroku-cli).
3. Create a new app on Heroku dashboard (If app already exists, it can be used to re-deploy the app) and add heroku.yml (Already done) file in the same folder of DockerFile.
4. Download any Authenticator Mobile App from Google Play Store or Apple App Store(Preferrably the latest version of Microsoft Authenticator).
5. Login to Heroku using through the Heroku CLI.

```POWERSHELL
    $heroku login
```

6. Press any key to continue to authenticate the Heroku account.
7. Add the Heroku account to the authenticator app.
8. Complete the Heroku authentication process.
9. Login to Heroku container.

```POWERSHELL
    $heroku container:login
```

10. Run the following command to deploy the Docker conatiner to Heroku.

```POWERSHELL
    $heroku create
    $heroku container:push web --app <app_name>
    $heroku container:release web --app <app_name>
```

**Note:** The .env variables need to be set in the Heroku dashboard. For more information, refer to the [Heroku documentation](https://devcenter.heroku.com/articles/config-vars).

## Deployment To AWS
