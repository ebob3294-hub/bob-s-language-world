# Android APK with Capacitor

This project keeps the existing hosted website and packages the same app as a native Android WebView. The Android build includes the web files locally, so it does not need the hosted website to open.

## First setup on your computer

Install Node.js 20 or newer and Android Studio with its Android SDK. Then clone this repository and run these commands from the project folder:

```bash
npm install
npm run build:android
npx cap add android
npx cap sync android
npx cap open android
```

`npx cap add android` is only needed once. The generated `android/` folder should be committed to GitHub so it is available when opening the project on another computer.

## Build an APK in Android Studio

1. Open the `android/` folder (not the website root) in Android Studio and wait for Gradle Sync to finish.
2. Whenever the website code changes, run `npm run android:sync` from the project folder before building again.
3. In Android Studio, choose **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
4. Android Studio shows the location of the debug APK when the build completes. It is normally `android/app/build/outputs/apk/debug/app-debug.apk`.

For a distributable release, use **Build → Generate Signed Bundle / APK → APK** and keep the signing key safe for future updates.

## Build from a terminal

After the first setup, refresh the bundled app and build a debug APK with:

```bash
npm run android:sync
cd android
./gradlew assembleDebug
```

On Windows, use `gradlew.bat assembleDebug` instead. The debug APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.

## Updates and app identity

The requested Capacitor identity is `com.example.myapp` / `MyApp`. Choose a unique application ID before distributing to others; changing it later makes Android treat the changed ID as a different app. A release APK must be signed, and every update must use the same application ID and signing key.