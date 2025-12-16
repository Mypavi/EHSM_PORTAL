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
            // Mock Validation for multiple users
            var aValidUsers = ["00000001", "00000002", "00000003", "00000004", "00000005", "00000006", "00000007"];

            if (aValidUsers.includes(sEmpId) && sPassword === "12345") {
                MessageToast.show("Login Successful! Fetching data from backend...");

                // Store the logged in user in global model if needed later
                this.getOwnerComponent().setModel(new JSONModel({ currentUser: sEmpId }), "session");

                var oRouter = this.getOwnerComponent().getRouter();
                // Delay slightly to simulate fetch
                setTimeout(function () {
                    oRouter.navTo("RouteDashboard");
                }, 1000);
            } else {
                MessageToast.show("Invalid Credentials. Please try again.");
            }
        }
    });
});
