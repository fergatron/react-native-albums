react-native-albums

This project is based on the Udemy tutorial hosted by Stephen Grider, _The Complete React Native and Redux Course_. My focus in on Android.

## Start packager and compile android
```
react-native start --port=8082
react-native run-android
```

## Run android emulator
```
cd /usr/local/share/android-sdk/tools/
emulator @Pixel_API_26

or

cd $(dirname $(which emulator)) && emulator @Pixel_API_26
```

## Debugging app on emulator
Ctrl + M only works when the app is in view. Ctrl + M does something different when outside the app.
