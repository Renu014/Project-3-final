sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheCarriersSingletonList.iSeeThisPage();
            Then.onTheCarriersSingletonList.onTable().iCheckColumns(1, {"CarrierSingletonID":{"header":"CarrierSingletonID"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            Then.onTheCarriersSingletonList.onTable().iCheckRows();

            When.onTheCarriersSingletonList.onTable().iPressRow(0);
            Then.onTheCarriersSingletonObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});