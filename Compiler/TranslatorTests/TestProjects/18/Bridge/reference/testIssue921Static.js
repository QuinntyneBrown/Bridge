﻿(function (globals) {
    "use strict";

    Bridge.define('TestIssue921Static.Issue921Static', {
        statics: {
            constructor: function () {
                Bridge.get(TestIssue921Static.Issue921Static)._offset = 10;
            },
            _offset: 0,
            config: {
                properties: {
                    $Name: null
                }
            },
            computeValue: function (d) {
                return d.add(Bridge.Decimal(10));
            },
            lambaLiftingWithReadOnlyField: function () {
                var localValue = 456;
                return Bridge.Linq.Enumerable.from([1, 2, 3]).select($_.TestIssue921Static.Issue921Static.f1).select($_.TestIssue921Static.Issue921Static.f1).select($_.TestIssue921Static.Issue921Static.f2).select($_.TestIssue921Static.Issue921Static.f3).select($_.TestIssue921Static.Issue921Static.f4).select(function (value) {
                    return value + localValue;
                });
            },
            lambaLiftingWithProperty: function () {
                var localValue = "What a name";
    
                return Bridge.Linq.Enumerable.from(["one", "two", "three"]).select($_.TestIssue921Static.Issue921Static.f1).select($_.TestIssue921Static.Issue921Static.f1).select($_.TestIssue921Static.Issue921Static.f2).select($_.TestIssue921Static.Issue921Static.f5).select($_.TestIssue921Static.Issue921Static.f6).select(function (value) {
                    return value + localValue;
                });
            },
            lambaLiftingWithInstanceMethod: function () {
                var localValue = Bridge.Decimal(10.0);
    
                return Bridge.Linq.Enumerable.from([Bridge.Decimal(1.0), Bridge.Decimal(2.0), Bridge.Decimal(3.0)]).select($_.TestIssue921Static.Issue921Static.f7).select($_.TestIssue921Static.Issue921Static.f7).select($_.TestIssue921Static.Issue921Static.f8).select($_.TestIssue921Static.Issue921Static.f9).select($_.TestIssue921Static.Issue921Static.f10).select(function (value) {
                    return value.add(localValue);
                });
            },
            lambaLiftingWithDelegate: function () {
                // Lift
                var addThousand = $_.TestIssue921Static.Issue921Static.f11;
    
                var localValue = 123;
    
                return Bridge.Linq.Enumerable.from([1, 2, 3]).select(function (value) {
                    return addThousand(value + 1);
                }).select(function (value) {
                    return addThousand(value + 1);
                }).select(function (value, index) {
                    return addThousand(value + index);
                }).select(function (value) {
                    return addThousand(value) + Bridge.get(TestIssue921Static.Issue921Static)._offset;
                }).select(function (value, index) {
                    return addThousand(value) + index + Bridge.get(TestIssue921Static.Issue921Static)._offset;
                }).select(function (value) {
                    return addThousand(value + addThousand(localValue));
                });
            },
            lambaLiftingWithDelegateChangingType: function () {
                // Lift
                var toString = $_.TestIssue921Static.Issue921Static.f12;
    
                var localValue = 7;
    
                return Bridge.Linq.Enumerable.from([1, 2, 3]).select(function (value) {
                    return toString(value + 1);
                }).select(function (value) {
                    return toString(value.length);
                }).select(function (value, index) {
                    return toString(value.length + index);
                }).select(function (value) {
                    return toString(value.length) + Bridge.get(TestIssue921Static.Issue921Static)._offset;
                }).select(function (value, index) {
                    return toString(value.length) + index + Bridge.get(TestIssue921Static.Issue921Static)._offset;
                }).select(function (value) {
                    return toString(value.length + toString(localValue).length);
                });
            }
        }
    });
    
    var $_ = {};
    
    Bridge.ns("TestIssue921Static.Issue921Static", $_)
    
    Bridge.apply($_.TestIssue921Static.Issue921Static, {
        f1: function (value) {
            return value + 1;
        },
        f2: function (value, index) {
            return value + index;
        },
        f3: function (value) {
            return value + Bridge.get(TestIssue921Static.Issue921Static)._offset;
        },
        f4: function (value, index) {
            return value + index + Bridge.get(TestIssue921Static.Issue921Static)._offset;
        },
        f5: function (value) {
            return value + Bridge.get(TestIssue921Static.Issue921Static).get$Name();
        },
        f6: function (value, index) {
            return value + index + Bridge.get(TestIssue921Static.Issue921Static).get$Name();
        },
        f7: function (value) {
            return value.add(Bridge.Decimal(1));
        },
        f8: function (value, index) {
            return value.add(Bridge.get(TestIssue921Static.Issue921Static).computeValue(Bridge.Decimal.lift(index)));
        },
        f9: function (value) {
            return value.add(Bridge.get(TestIssue921Static.Issue921Static).computeValue(Bridge.Decimal(100.0)));
        },
        f10: function (value, index) {
            return value.add(Bridge.Decimal(index)).add(Bridge.get(TestIssue921Static.Issue921Static).computeValue(Bridge.Decimal(200.0)));
        },
        f11: function (i) {
            return i + 1000;
        },
        f12: function (i) {
            return i.toString();
        }
    });
    
    
    
    Bridge.init();
})(this);