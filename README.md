# React Native

## What is the React Native?

- React Native is an open-source framework for building Android and iOS applications using React and the app platform’s native capabilities.

## Difference between Expo CLI and React Native CLI

### Expo CLI

- Is the tool to help you create React Native projects and run React Native apps and run React Native apps on simulated devices or testing devices.
- It had the services that were free.
- It managed app development (creating project so easily, and code so easily, ...).
- Writing native app by React Native will favorable than React Native CLI.

### React Native CLI

- Is the tool to help you create React Native projects and run React Native apps and run React Native apps on simulated devices or testing devices. (It exist before Expo CLI).
- It provided from React Native team and community around it.
- It provide a setup develop React Native basic (meaning you should add more configs or setup, it less convennience when use some feature for native device as Camera and ...).
- Easier integration with native source code.

## Difference between ScrollView and FlatList

- ScrollView and FlatList are both used to facilitate scrolling when items exceed the viewport. However, the key difference is that when rendering many items (more than 100 items), ScrollView may display all items at once, while FlatList will display a portion and lazily load the remaining items as you scroll down. As a result, you should use ScrollView for user interfaces with a fixed amount of scrolling, and FlatList for dynamic lists.
