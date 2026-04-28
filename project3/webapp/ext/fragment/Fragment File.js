sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
    "use strict";
    return {
        Fragment File: function(sValue) {
            switch (sValue) {
                case "0":
                        return new Filter({ path: "Fragment File", operator: FilterOperator.LT, value1: 100 });
                case "1":
                        return new Filter({
                        filters: [
                            new Filter({ path: "Fragment File", operator: FilterOperator.GT, value1: 100 }),
                            new Filter({ path: "Fragment File", operator: FilterOperator.LT, value1: 500 })
                        ],
                        and: true
                    });
                case "2":
                        return new Filter({ path: "Fragment File", operator: FilterOperator.GT, value1: 500 });
            }
        }
    };
});
