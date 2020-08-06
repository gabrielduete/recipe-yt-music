module.exports = Franz => class YouTubeMusic extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
    }
  };