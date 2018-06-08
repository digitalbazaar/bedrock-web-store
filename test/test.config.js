/*
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */

const config = require('bedrock').config;
const path = require('path');

config.karma.suites['bedrock-web-store'] = path.join('web', '**', '*.js');
