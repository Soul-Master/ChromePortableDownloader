const apiUrl = 'https://tools.google.com/service/update2';
const defaultAppId = '8A69D345-D564-463C-AFF1-A69D9E530F96';
// Configuration from https://github.com/SukkaW/CheckChrome
const requestConfig = {
    'stable-win64': { ap: 'x64-stable-multi-chrome', arch: 'x64', appId: defaultAppId },
    'beta-win64': { ap: 'x64-beta-multi-chrome', arch: 'x64', appId: defaultAppId },
    'dev-win64': { ap: 'x64-dev-multi-chrome', arch: 'x64', appId: defaultAppId },
    'canary-win64': { ap: 'x64-canary', arch: 'x64', appId: '4EA16AC7-FD5A-47C3-875B-DBF4A2008C20' },
};
export async function checkUpdate(configName, targetVersion) {
    const config = requestConfig[configName];
    targetVersion = targetVersion ? `targetversionprefix="${targetVersion}" ` : '';
    // Create XML request message for Google Omaha    
    // https://github.com/google/omaha/blob/master/doc/ServerProtocolV3.md
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<request protocol="3.0" updater="Omaha" updaterversion="1.3.36.112" shell_version="1.3.36.111"
	installsource="update3web-ondemand" dedup="cr" ismachine="0" domainjoined="0">
	<os platform="win" version="10.0.22000.282" arch="${config.arch}"/>
	<app appid="{${config.appId}}" ap="${config.ap}" lang="en-us">
		<updatecheck ${targetVersion}/>
	</app>
</request>`;
    const options = {
        headers: {
            "Content-Length": body.length.toString(),
        },
        body,
        method: "POST"
    };
    return await fetch(`https://git-proxy.soulmaster.workers.dev/?${apiUrl}`, options)
        .then(response => response.text())
        .then(parseXmlResponse);
}
function parseXmlResponse(xml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");
    const updateResult = doc.querySelector('updatecheck');
    if (!updateResult || updateResult.getAttribute('status') !== 'ok')
        return null;
    const manifest = updateResult.querySelector('manifest');
    if (!manifest)
        return null;
    const version = manifest.getAttribute('version');
    const urlNodes = updateResult.querySelectorAll('urls > url[codebase]');
    const actionNode = manifest.querySelector('actions > action[event="install"]');
    const packageNode = manifest.querySelector('packages > package');
    if (!actionNode || !packageNode)
        return null;
    const fileName = actionNode.getAttribute('run');
    const fileSize = parseInt(packageNode.getAttribute('size') || '', 10);
    const hash = packageNode.getAttribute('hash');
    const hashSha256 = packageNode.getAttribute('hash_sha256');
    const urls = [];
    for (let i = 0; i < urlNodes.length; i++) {
        const codeBase = urlNodes[i].getAttribute('codebase');
        if (!codeBase)
            continue;
        urls.push(codeBase + fileName);
    }
    return {
        version,
        fileSize,
        hash,
        hashSha256,
        urls
    };
}
