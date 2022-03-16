# Expo Publish

The Expo CLI is used to publish the MindJOGG app.

## Expo Go for Pre-release

The MindJOGG app has been published for pre-release using Expo Go. The app is available at [EXPO](https://expo.dev/@mindjogg/mindjogg?serviceType=classic&distribution=expo-go).

### Steps to Republish the App for Pre-release

1. Open VS Code and open the MindJOGG app folder (./app/client/mindjogg).
2. Log out from your personal Expo account.

```PowerShell
    $expo logout
```

3. Log in to MindJOGG Expo account using the credentials (Find the credentials in shared password manager).
4. Log in to Expo CLI using the same credentials.

```PowerShell
    $expo login --username <username> --password <password>
```

5. Go to app.json and change the version to the next pre-release version and make sure the website's app name and slug is the same as the app name and slug of the app.json file.
6. Run the following command to publish the app for pre-release:

```PowerShell
    $expo publish

```

7. Wait for the app to be published and the app URL to be available.
8. Copy the app URL and update this document with the app URL.
