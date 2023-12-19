This Project uses the fanmade Elden ring API: https://eldenring.fanapis.com/ 

This Project uses react native and [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Setting up for development 

## Step 1: Install dependencies

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

- with the steps above completed we should have the latest version of `node.js/ npm` and metro bundler that ships with react native.
  
once that is done we can install packages using npm:

```bash
npm install
```

## Step 2: Start the Metro Server
First, you will need to start **Metro**, which should ship with React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npm start

```

## Step 3: Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully set up the Elden Ring app for development. :partying_face:


# Help, it doesn't work!! 😢

Please refer to the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) to make sure everything is set up correctly.
If that's been exhausted there's the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

### Running tests:

```bash
maestro test .maestro
```


