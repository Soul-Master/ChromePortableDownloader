# Chrome Portable Downloader

The easiest way to find specified version of Chrome installer from Google update server and run it as a portable application.

![Open multiple versions of Chrome at the same time](https://user-images.githubusercontent.com/442046/140650149-77b4eaec-4b04-4d92-98cc-98da45d75b03.png)

### 1. Download Chrome installer from selected channel ([What are Chrome release channels?](https://www.youtube.com/watch?v=WL1guL5n9PU))

Click at **Chrome icon** to download Chrome installer file from Google update server. Please note, you can specify version of Chrome with this tool.

- <strong>Stable Channel</strong> updates every 4 weeks.<br/> 
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=stable"><img src="./images/chrome-logo.svg" width="48" height="48" alt="Chrome Stable Icon" /></a><br/> 
- <strong>Beta Channel</strong> updates every week roughly and more than a month before Stable channel.<br/>
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=beta"><img src="./images/chrome-beta-logo.svg" width="48" height="48" alt="Chrome Beta Icon" /></a><br/>     
- <strong>Dev Channel</strong> updates once or twice weekly, and it shows what we're working on right now. While this build does get tested, it is still subject to bugs, as we want people to see what's new as soon as possible.<br/>
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=dev"><img src="./images/chrome-dev-logo.svg" width="48" height="48" alt="Chrome Dev Icon" /></a><br/>
- <strong>Canary Channel</strong> updates daily. This build has not been tested or used, it's released as soon as it's built.<br/>
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=canary"><img src="./images/chrome-canary-logo.svg" width="48" height="48" alt="Chrome Canary Icon" /></a><br/>

Or you may download Chrome installer manually via the following page.<br/>
https://soul-master.github.io/ChromePortableDownloader/

### 2. Open Chrome installer with [7-zip](https://www.7-zip.org/)

![Open Chrome installer with 7-zip](https://user-images.githubusercontent.com/442046/140624508-f268599c-d27e-4e54-bb2e-a73a390e96e9.png)

### 3. Open "chrome.7z" file inside Chrome installer

![Open chrome.7z inside Chrome installer](https://user-images.githubusercontent.com/442046/140624630-213cb9fd-77ae-46ba-8642-3420244c31d5.png)

### 4. Copy/Extract "chrome-bin" folder

For this example, I extracted and renamed to "Chrome93" folder
![Extract chrome-bin folder to Chrome93](https://user-images.githubusercontent.com/442046/140624677-5f12f887-7ad6-4852-a62b-030f782ba798.png)

### 5. Open Chrome as portable application

- If you want to open only one version, you can open Chrome via **"chrome.exe"** directly. It should open [user profile](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md) from default folder.

- To open multiple versions at the same time, you need to open Chrome with different [profile folder](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md) like the following command.
```bat
chrome.exe --user-data-dir="./PortableProfile"
```
 You may need create shortcut and put additional argument like this.<br/>
![Chrome shortcut](https://user-images.githubusercontent.com/442046/140650923-62ecc9e8-f4d1-4144-ba0b-5af47990f340.png)

## FAQ

#### How to manually check release version?

* https://omahaproxy.appspot.com/<br/>
* https://chromereleases.googleblog.com/search/label/Desktop%20Update

#### How to find Chrome features for specified version?

https://www.chromestatus.com/roadmap

#### How to turn-off some features?

* [Chrome Flags for Tooling](https://github.com/GoogleChrome/chrome-launcher/blob/master/docs/chrome-flags-for-tools.md)
* [List of all Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)

#### Can I install Chrome with this installer?

Yes. But, this installer doesn't include auto update feature. It means you need to manually install Chrome to update version.
![Cannot update Chrome](https://user-images.githubusercontent.com/442046/140638104-a7b151e8-fab6-44ab-99c5-09fc59c9bbdd.png)

For ended user, please install Chrome with auto update feature via one of the following links.

Stable channel https://www.google.com/chrome/?standalone=1<br/>
Beta channel https://www.google.com/chrome/beta/?standalone=1<br/>
Dev channel https://www.google.com/chrome/dev/?standalone=1<br/>
Canary channel https://www.google.com/chrome/canary/?standalone=1<br/>

### Can I create portable Chrome from regular installer?

Yes. However, there is no straightforward way to extract Chrome folder from regular installer. You need to install it before copy Chrome folder.
