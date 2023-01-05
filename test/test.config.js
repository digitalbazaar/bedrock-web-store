/*
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
import {config} from '@bedrock/core';
import path from 'path';

config.karma.suites['bedrock-web-store'] = path.join('web', '**', '*.js');
