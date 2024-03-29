/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MAIN //

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param {number} n - number of elements
* @returns {Array<number>} linearly spaced numeric array
*
* @example
* var arr = oneTo( 6 );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
function oneTo( n ) {
	var arr;
	var i;

	arr = [];
	if ( n <= 0 ) {
		return arr;
	}
	for ( i = 1; i < n+1; i++ ) {
		arr.push( i );
	}
	return arr;
}


// EXPORTS //

module.exports = oneTo;
