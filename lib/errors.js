'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on feathercore-p2p Module {0}'
};

module.exports = require('feathercore-lib').errors.extend(spec);
