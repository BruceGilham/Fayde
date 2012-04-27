﻿/// <reference path="../jsTestDriverAsserts.js"/>
/// <reference path="../Javascript/Runtime/Nullstone.js"/>

function assertNullstoneRefEquals(msg, expected, actual) {
    /// <param name="msg" type="String"></param>
    /// <summary>Performs Nullstone.RefEquals on expected and actual. Fails if they are not the exact same object.</summary>
    assertTrue(msg, Nullstone.RefEquals(expected, actual));
};
function assertNullstoneNotRefEquals(msg, expected, actual) {
    /// <param name="msg" type="String"></param>
    /// <summary>Performs Nullstone.RefEquals on expected and actual. Fails if they are the exact same object.</summary>
    assertFalse(msg, Nullstone.RefEquals(expected, actual));
};

function assertMatrix(expected, actual) {
    /// <param name="expected" type="Matrix"></param>
    /// <param name="actual" type="Matrix"></param>
    assertSame("m11 is not set properly.", expected.GetM11(), actual.GetM11());
    assertSame("m12 is not set properly.", expected.GetM12(), actual.GetM12());
    assertSame("m21 is not set properly.", expected.GetM21(), actual.GetM21());
    assertSame("m22 is not set properly.", expected.GetM22(), actual.GetM22());
    assertSame("Offset X is not set properly.", expected.GetOffsetX(), actual.GetOffsetX());
    assertSame("Offset Y is not set properly.", expected.GetOffsetY(), actual.GetOffsetY());
    assertSame("Matrix Type is not set properly.", expected._Type, expected._Type);
};