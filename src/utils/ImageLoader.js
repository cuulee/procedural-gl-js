/**
 * Copyright 2020 (c) Felix Palmer
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import THREE from 'three';
const ImageLoader = ( typeof createImageBitmap === 'undefined' ) ?
  THREE.ImageLoader : THREE.ImageBitmapLoader;

export default new ImageLoader();
