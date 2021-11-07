import * as updateService from './lib/updateService.js';
import type { ConfigNameType, UpdateInfo } from './lib/updateService.js';

declare const platformSelect: HTMLSelectElement;
declare const channelSelect: HTMLSelectElement;
declare const versionPrefixTextbox: HTMLInputElement;
declare const checkUpdateButton: HTMLButtonElement;
declare const resultContainer: HTMLDivElement;

async function onLoad() {
    if (!location.search) return;

    const params = new URLSearchParams(location.search);
    platformSelect.value = (params.get('platform') || 'win64').toLowerCase();
    channelSelect.value = (params.get('channel') || 'stable').toLowerCase();
    versionPrefixTextbox.value = params.get('version') || '';

    onCheckUpdate();
}

async function onCheckUpdate() {
    if (checkUpdateButton.disabled) return;

    const type = <ConfigNameType>`${channelSelect.value}-${platformSelect.value}`;
    resultContainer.innerHTML = '';
    checkUpdateButton.disabled = true;

    let url = `./?platform=${platformSelect.value}&channel=${channelSelect.value}`;
    versionPrefixTextbox.value = versionPrefixTextbox.value.trim();
    if (versionPrefixTextbox.value) {
        url += '&version=' + versionPrefixTextbox.value;
    }

    history.replaceState(null, '', url);

    let result: UpdateInfo | null = null;
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

async function createDownloadLink(url: string) {
    const link = document.createElement('a');
    link.download = "";
    link.href = url;
    link.innerText = url;

    resultContainer.appendChild(link);
}

window.addEventListener('load', onLoad);
checkUpdateButton.addEventListener('click', onCheckUpdate);