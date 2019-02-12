![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# ⚛️React Native & 📲React Navigation

1. Install React Navigation package:
    
    ```bash
    $ npm i react-navigation
    ```

2. Install React Native Gesture Handler:
    
    ```bash
    $ npm i react-native-gesture-handler
    ```

3. Link all dependencies:
    
    ```bash
    $ react-native link react-native-gesture-handler
    ```

4. Go to MainActivity.java then add lines below with plus ('+') sign:

    __path:__ *[yourProject]/android/app/src/main/java/com/[yourProject]/MainActivity.java*

    ```java
    package com.reactnavigation.example;

    import com.facebook.react.ReactActivity;
    + import com.facebook.react.ReactActivityDelegate;
    + import com.facebook.react.ReactRootView;
    + import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

    public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "Example";
    }

    +  @Override
    +  protected ReactActivityDelegate createReactActivityDelegate() {
    +    return new ReactActivityDelegate(this, getMainComponentName()) {
    +      @Override
    +      protected ReactRootView createRootView() {
    +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
    +      }
    +    };
    +  }
    }
    ```

5. Go to __*[yourProject]/android/settings.gradle*__ then
change all __backslash '\\'__ with __slash '/'__ sp it will look like:

    ```java
    rootProject.name = 'navigasi'
    include ':react-native-gesture-handler'
    project(':react-native-gesture-handler').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-gesture-handler/android')

    include ':app'
    ```

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)
