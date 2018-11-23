# HearthView
Cordova Web APP

Cordova project to take pictures of the surronding when the proximity sensor is near your hearth.


## Images

![MockUp](https://github.com/DiogoCastroSilva/HearthView/blob/master/Images/MockUp%20Relatorio.png)
![MockUp](https://github.com/DiogoCastroSilva/HearthView/blob/master/Images/MockUp%20Relatorio_img_A.png)
![MockUp](https://github.com/DiogoCastroSilva/HearthView/blob/master/Images/MockUp%20Relatorio_img_B.png)

## Install
```
cordova platform add android
cordova build android

cordova platform add ios
cordova build ios
```

## IOS Quirks

It is not possible to use your computers webcam during testing in the simulator, you must device test

## Plugins Used
```
# org.awokenwell.proximity

This plugin provides access to the device's (IR) proximity sensor.
This sensor is typically used in applications to prevent touch events on the screen when the device
is held close to one's face.

## Installation

    cordova plugin add https://github.com/awoken-well/cordova-plugin-proximity.git
    
    
# Cordova Plugin Camera Preview

Cordova plugin that allows camera interaction from Javascript and HTML.


## Installation

    cordova plugin add https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview.git

# cordova-plugin-splashscreen

  This plugin is required to work with splash screens. This plugin displays and hides a splash screen 
  during application launch.
  
## Installation

  cordova plugin add https://github.com/apache/cordova-plugin-splashscreen.git
  
  or
  
  cordova plugin add cordova-plugin-splashscreen


# PhoneGap / Cordova Social Sharing plugin

This plugin allows you to use the native sharing window of your mobile device.


## Installation

  phonegap local plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
  
  or
  
  cordova plugin add cordova-plugin-x-socialsharing



