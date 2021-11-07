# Chrome Portable Downloader

A trustless way to download specified Chrome version from specified channel and run it as portable application with some limitation*.

### 1. Download Chrome installer from selected channel
Click at **Chrome icon** to download Chrome from selected channel

- <strong>Stable Channel</strong> updates every 4 weeks.<br/> 
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=stable"><img src="./images/chrome-logo.svg" width="48" height="48" alt="Chrome Stable Icon" /></a><br/> 
- <strong>Beta Channel</strong> updates every week roughly and more than a month before Stable channel.<br/>
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=beta"><img src="./images/chrome-beta-logo.svg" width="48" height="48" alt="Chrome Beta Icon" /></a><br/>     
- <strong>Dev Channel</strong> updates once or twice weekly, and it shows what we're working on right now. While this build does get tested, it is still subject to bugs, as we want people to see what's new as soon as possible.<br/>
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=dev"><img src="./images/chrome-dev-logo.svg" width="48" height="48" alt="Chrome Dev Icon" /></a><br/>
- <strong>Canary Channel</strong> updates daily. This build has not been tested or used, it's released as soon as it's built.<br/>
<a href="https://soul-master.github.io/ChromePortableDownloader/?platform=win64&channel=canary"><img src="./images/chrome-canary-logo.svg" width="48" height="48" alt="Chrome Canary Icon" /></a><br/>

For more info, please read at [Chrome Release Channels](https://www.chromium.org/getting-involved/dev-channel).

### 2. Open Chrome installer with [7-zip](https://www.7-zip.org/)
![Open Chrome installer with 7-zip](https://user-images.githubusercontent.com/442046/140624508-f268599c-d27e-4e54-bb2e-a73a390e96e9.png)

### 3. Open "chrome.7z" file inside Chrome installer
![Open chrome.7z inside Chrome installer](https://user-images.githubusercontent.com/442046/140624630-213cb9fd-77ae-46ba-8642-3420244c31d5.png)

### 4. Copy/Extract "chrome-bin" folder
For this example, I extracted and renamed to "Chrome93" folder
![Extract chrome-bin folder to Chrome93](https://user-images.githubusercontent.com/442046/140624677-5f12f887-7ad6-4852-a62b-030f782ba798.png)

### 5. Open Chrome from "chrome.exe" application
Please make sure that there is no other instance of Chrome.
![image](https://user-images.githubusercontent.com/442046/140624743-8dba877c-3083-46ca-9efc-e9a1b45ceeea.png)



\**With official Chrome launcher, you can open only one version of Chrome at the same time (including other portable Chrome application). It means you need to close all Chrome instances before open Chrome portable application.<br/><br/>
If this limitation doesn't work for you, please use custom launcher instead. But it also come with their our risk because you need to open application from unknown developer or sign by small company.*

## How to verify downloaded file
- View "Digital Signatures" tab of file properties<br/>
![Digital Signatures tab in file properties](https://user-images.githubusercontent.com/442046/140624904-515b91e1-00d1-4a8a-8b35-84aba139ae0c.png)

- Download [Sigcheck](https://docs.microsoft.com/en-us/sysinternals/downloads/sigcheck) from Microsoft to check file signature<br/>
![Sigcheck result](https://user-images.githubusercontent.com/442046/140624949-a0e950ed-66d1-4861-babf-e349cf5635b4.png)

## How to manually check latest version
https://omahaproxy.appspot.com/<br/>
https://chromereleases.googleblog.com/search/label/Desktop%20Update

## How to download old stable version
Enter version prefix before click download in the following page.<br/>
https://soul-master.github.io/ChromePortableDownloader/


