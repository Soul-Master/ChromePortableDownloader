import * as updateService from './lib/updateService.js';
async function onLoad() {
    if (!location.search)
        return;
    const params = new URLSearchParams(location.search);
    platformSelect.value = (params.get('platform') || 'win64').toLowerCase();
    channelSelect.value = (params.get('channel') || 'stable').toLowerCase();
    versionPrefixTextbox.value = params.get('targetVersion') || '';
}
async function onCheckUpdate() {
    if (checkUpdateButton.disabled)
        return;
    const type = `${channelSelect.value}-${platformSelect.value}`;
    resultContainer.innerHTML = '';
    let result = null;
    try {
        result = await updateService.checkUpdate(type, versionPrefixTextbox.value || undefined);
    }
    catch {
        alert('Unable to check update');
        checkUpdateButton.disabled = false;
        return;
    }
    if (!result) {
        alert('Update not found');
        checkUpdateButton.disabled = false;
        return;
    }
    const chromeVersionLabel = document.createElement('label');
    chromeVersionLabel.className = 'chromeVersion';
    chromeVersionLabel.innerText = 'VERSION: ' + result.version;
    resultContainer.appendChild(chromeVersionLabel);
    const fileSize = (result.fileSize / (1024 * 1024)).toFixed(2) + 'MB';
    const fileSizeLabel = document.createElement('label');
    fileSizeLabel.innerText = 'SIZE: ' + fileSize;
    resultContainer.appendChild(fileSizeLabel);
    result.urls.filter(x => x.startsWith('https'))
        .forEach(createDownloadLink);
    checkUpdateButton.disabled = false;
}
async function createDownloadLink(url) {
    const link = document.createElement('a');
    link.download = "";
    link.href = url;
    link.innerText = url;
    resultContainer.appendChild(link);
}
window.addEventListener('load', onLoad);
checkUpdateButton.addEventListener('click', onCheckUpdate);
