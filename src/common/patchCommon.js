var patchXMLHttpRequest = require('./patches/xhrPatch')
var patchFetch = require('./patches/fetchPatch').patchFetch

function patchCommon (serviceContainer) {
  patchXMLHttpRequest(serviceContainer)
  patchFetch(serviceContainer)
}

module.exports = patchCommon
