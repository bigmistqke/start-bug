'use server'

import { cache } from '@solidjs/router';
import * as tf from '@tensorflow/tfjs-node';
tf
export const query = cache(async () => {}, 'query')