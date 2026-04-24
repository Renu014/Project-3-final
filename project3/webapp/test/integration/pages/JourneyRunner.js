sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project3/test/integration/pages/CarriersSingletonList",
	"project3/test/integration/pages/CarriersSingletonObjectPage",
	"project3/test/integration/pages/CarrierObjectPage"
], function (JourneyRunner, CarriersSingletonList, CarriersSingletonObjectPage, CarrierObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project3') + '/test/flp.html#app-preview',
        pages: {
			onTheCarriersSingletonList: CarriersSingletonList,
			onTheCarriersSingletonObjectPage: CarriersSingletonObjectPage,
			onTheCarrierObjectPage: CarrierObjectPage
        },
        async: true
    });

    return runner;
});

