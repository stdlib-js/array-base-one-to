/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike, Complex128Array, Complex64Array } from '@stdlib/types/array';

/**
* Interface describing `oneTo`.
*/
interface ZeroTo {
	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
	*
	* @param n - number of elements
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = oneTo( 6 );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*/
	( n: number ): Array<number>;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var out = new Float64Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	assign( out: Float64Array, stride: number, offset: number ): Float64Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var out = new Float32Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	assign( out: Float32Array, stride: number, offset: number ): Float32Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Int32Array = require( '@stdlib/array-int32' );
	*
	* var out = new Int32Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Int32Array>[ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( out: Int32Array, stride: number, offset: number ): Int32Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Int16Array = require( '@stdlib/array-int16' );
	*
	* var out = new Int16Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Int16Array>[ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( out: Int16Array, stride: number, offset: number ): Int16Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Int8Array = require( '@stdlib/array-int8' );
	*
	* var out = new Int8Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Int8Array>[ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( out: Int8Array, stride: number, offset: number ): Int8Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Uint32Array = require( '@stdlib/array-uint32' );
	*
	* var out = new Uint32Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Uint32Array>[ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( out: Uint32Array, stride: number, offset: number ): Uint32Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Uint16Array = require( '@stdlib/array-uint16' );
	*
	* var out = new Uint16Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Uint16Array>[ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( out: Uint16Array, stride: number, offset: number ): Uint16Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var out = new Uint8Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Uint8Array>[ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( out: Uint8Array, stride: number, offset: number ): Uint8Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
	*
	* var out = new Uint8ClampedArray( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Uint8ClampedArray>[ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( out: Uint8ClampedArray, stride: number, offset: number ): Uint8ClampedArray;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var out = new Complex128Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Complex128Array>
	*
	* var bool = ( arr === out );
	* // returns true
	*
	* var v = out.get( out.length-1 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 6.0
	*
	* var im = imag( v );
	* // returns 0.0
	*/
	assign( out: Complex128Array, stride: number, offset: number ): Complex128Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	* var realf = require( '@stdlib/complex-float32-real' );
	* var imagf = require( '@stdlib/complex-float32-imag' );
	*
	* var out = new Complex64Array( 6 );
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns <Complex64Array>
	*
	* var bool = ( arr === out );
	* // returns true
	*
	* var v = out.get( out.length-1 );
	* // returns <Complex64>
	*
	* var re = realf( v );
	* // returns 6.0
	*
	* var im = imagf( v );
	* // returns 0.0
	*/
	assign( out: Complex64Array, stride: number, offset: number ): Complex64Array;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
	*
	* var out = toAccessorArray( [ 0, 0, 0, 0, 0, 0 ] );
	* var arr = oneTo.assign( out, 1, 0 );
	*
	* var bool = ( arr === out );
	* // returns true
	*
	* var v = out.get( out.length-1 );
	* // returns 6
	*/
	assign<T = unknown>( out: AccessorArrayLike<T>, stride: number, offset: number ): AccessorArrayLike<T>;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = oneTo.assign( out, -1, out.length-1 );
	* // returns [ 6, 5, 4, 3, 2, 1 ]
	*/
	assign<T = unknown>( out: Array<T>, stride: number, offset: number ): Array<T | number>;

	/**
	* Fills an array with linearly spaced numeric elements which increment by 1 starting from one.
	*
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = oneTo.assign( out, 1, 0 );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*
	* @example
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* var arr = oneTo.assign( out, -1, out.length-1 );
	* // returns [ 6, 5, 4, 3, 2, 1 ]
	*/
	assign<T = unknown>( out: Collection<T>, stride: number, offset: number ): Collection<T | number>;
}

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 6 );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* var arr = oneTo.assign( out, 1, 0 );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* var arr = oneTo.assign( out, -1, out.length-1 );
* // returns [ 6, 5, 4, 3, 2, 1 ]
*/
declare var oneTo: ZeroTo;


// EXPORTS //

export = oneTo;
