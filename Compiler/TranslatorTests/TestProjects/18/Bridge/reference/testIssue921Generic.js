    Bridge.define("TestIssue921Generic.Issue921Generic$1", function (T) { return {
        lambaLiftingGeneric: function lambaLiftingGeneric() {
            return System.Linq.Enumerable.from(System.Array.init([1], System.Int32)).select(function (value) {
                    return Bridge.getDefaultValue(T);
                });
        }
    }; });
