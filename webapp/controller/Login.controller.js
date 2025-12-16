sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("eshm.controller.Login", {
        onInit: function () {
            var oModel = new JSONModel({
                empId: "00000001",
                password: "12345"
            });
            this.getView().setModel(oModel);
        },

        onLogin: function () {
            var oModel = this.getView().getModel();
            var sEmpId = oModel.getProperty("/empId");
            var sPassword = oModel.getProperty("/password");

            // Mock Validation based on User Request
            if (sEmpId === "00000001" && sPassword === "12345") {
                MessageToast.show("Login Successful!");
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDashboard");
            } else {
                MessageToast.show("Invalid Credentials. Please try again.");
            }
        }
    });
});
