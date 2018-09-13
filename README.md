Below steps were test in MacOS and iOS simulator,  which is from an empty project
1. react-native init <project_name>
2. cd <project_name>
3. npm install
4. npm i --save react-native-crypto
5. npm i --save react-native-randombytes
6. react-native link react-native-randombytes
7. npm i --save-dev tradle/rn-nodeify
8. npm i --save asyncstorage-down
9. ./node_modules/.bin/rn-nodeify --hack --install
10. npm i --save-dev tradle/rn-nodeify
11. ./node_modules/.bin/rn-nodeify --hack --install
12. npm i --save chain3 ???


To run your app on iOS:
   cd /Users/ychen/scratch/<project_name>
   react-native run-ios
   - or -
   Open ios/<project_name>.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd /Users/ychen/scratch/<project_name>
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android