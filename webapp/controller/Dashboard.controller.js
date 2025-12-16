sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat"
], function (Controller, JSONModel, DateFormat) {
    "use strict";

    return Controller.extend("eshm.controller.Dashboard", {
        formatter: {
            priorityState: function (sPriority) {
                switch (sPriority) {
                    case "High": return "Error";
                    case "Medium": return "Warning";
                    case "Low": return "Success";
                    default: return "None";
                }
            },
            statusState: function (sStatus) {
                switch (sStatus) {
                    case "Open": return "Error";
                    case "In Progress": return "Warning";
                    case "Closed": return "Success";
                    default: return "None";
                }
            },
            severityState: function (sSeverity) {
                switch (sSeverity) {
                    case "High": return "Error";
                    case "Medium": return "Warning";
                    case "Low": return "Success";
                    default: return "None";
                }
            }
        },

        onInit: function () {
            var oData = {
                kpi: {
                    openIncidents: 4,
                    highRisks: 4
                },
                incidents: [
                    { IncidentId: "INC000001", Plant: "AT01", IncidentDescription: "Chemical leak in storage", IncidentCategory: "Safety", IncidentPriority: "High", IncidentStatus: "Open", IncidentDate: "2025-08-19" },
                    { IncidentId: "INC000006", Plant: "AT01", IncidentDescription: "Equipment malfunction in assembly", IncidentCategory: "Operational", IncidentPriority: "Low", IncidentStatus: "Closed", IncidentDate: "2025-08-14" },
                    { IncidentId: "INC000011", Plant: "AT01", IncidentDescription: "Fire Accident", IncidentCategory: "Environmental", IncidentPriority: "Medium", IncidentStatus: "In Progress", IncidentDate: "2025-08-09" },
                    { IncidentId: "INC000016", Plant: "AT01", IncidentDescription: "Electrical Hazard", IncidentCategory: "Safety", IncidentPriority: "High", IncidentStatus: "Open", IncidentDate: "2025-08-04" },
                    { IncidentId: "INC000021", Plant: "AT01", IncidentDescription: "Chemical leak in storage", IncidentCategory: "Operational", IncidentPriority: "Low", IncidentStatus: "Closed", IncidentDate: "2025-07-30" },
                    { IncidentId: "INC000026", Plant: "AT01", IncidentDescription: "Equipment malfunction in assembly", IncidentCategory: "Environmental", IncidentPriority: "Medium", IncidentStatus: "In Progress", IncidentDate: "2025-07-25" },
                    { IncidentId: "INC000031", Plant: "AT01", IncidentDescription: "Fire Accident", IncidentCategory: "Safety", IncidentPriority: "High", IncidentStatus: "Open", IncidentDate: "2025-07-20" },
                    { IncidentId: "INC000036", Plant: "AT01", IncidentDescription: "Electrical Hazard", IncidentCategory: "Operational", IncidentPriority: "Low", IncidentStatus: "Closed", IncidentDate: "2025-07-15" },
                    { IncidentId: "INC000041", Plant: "AT01", IncidentDescription: "Chemical leak in storage", IncidentCategory: "Environmental", IncidentPriority: "Medium", IncidentStatus: "In Progress", IncidentDate: "2025-07-10" },
                    { IncidentId: "INC000046", Plant: "AT01", IncidentDescription: "Equipment malfunction in assembly", IncidentCategory: "Safety", IncidentPriority: "High", IncidentStatus: "Open", IncidentDate: "2025-07-05" },
                    { IncidentId: "INC000051", Plant: "AT01", IncidentDescription: "Fire Accident", IncidentCategory: "Operational", IncidentPriority: "Low", IncidentStatus: "Closed", IncidentDate: "2025-06-30" },
                    { IncidentId: "INC000056", Plant: "AT01", IncidentDescription: "Electrical Hazard", IncidentCategory: "Environmental", IncidentPriority: "Medium", IncidentStatus: "In Progress", IncidentDate: "2025-06-25" }
                ],
                risks: [
                    { RiskId: "RISK000001", RiskDescription: "Exposure to chemical", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Training", Plant: "AT01" },
                    { RiskId: "RISK000006", RiskDescription: "Machine malfunction", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Automation Upgrade", Plant: "AT01" },
                    { RiskId: "RISK000011", RiskDescription: "Fire risk", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Training", Plant: "AT01" },
                    { RiskId: "RISK000016", RiskDescription: "Electrical shock haz", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Automation Upgrade", Plant: "AT01" },
                    { RiskId: "RISK000021", RiskDescription: "Exposure to chemical", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Training", Plant: "AT01" },
                    { RiskId: "RISK000026", RiskDescription: "Machine malfunction", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Automation Upgrade", Plant: "AT01" },
                    { RiskId: "RISK000031", RiskDescription: "Fire risk", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Training", Plant: "AT01" },
                    { RiskId: "RISK000036", RiskDescription: "Electrical shock haz", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Automation Upgrade", Plant: "AT01" },
                    { RiskId: "RISK000041", RiskDescription: "Exposure to chemical", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Training", Plant: "AT01" },
                    { RiskId: "RISK000046", RiskDescription: "Machine malfunction", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Automation Upgrade", Plant: "AT01" },
                    { RiskId: "RISK000051", RiskDescription: "Fire risk", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Training", Plant: "AT01" },
                    { RiskId: "RISK000056", RiskDescription: "Electrical shock haz", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Automation Upgrade", Plant: "AT01" }
                ]
            };

            // Convert string dates to Date objects for proper formatting in UI
            oData.incidents.forEach(function (incident) {
                if (incident.IncidentDate) {
                    incident.IncidentDate = new Date(incident.IncidentDate);
                }
            });

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();
            oToolPage.setSideExpanded(!bSideExpanded);
        },

        onItemSelect: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            var sKey = oItem.getKey();
            var oNavContainer = this.byId("pageContainer");

            if (sKey === "overview") {
                oNavContainer.to(this.byId("overviewPage"));
            } else if (sKey === "incidents") {
                oNavContainer.to(this.byId("incidentsPage"));
            } else if (sKey === "risks") {
                oNavContainer.to(this.byId("risksPage"));
            }
        },

        onLogout: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteLogin");
        },

        onSearchIncidents: function (oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new sap.ui.model.Filter("IncidentDescription", sap.ui.model.FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            var oTable = this.byId("incidentsTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters);
        },

        onSearchRisks: function (oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new sap.ui.model.Filter("RiskDescription", sap.ui.model.FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            var oTable = this.byId("risksTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters);
        },

        onPressTileIncident: function () {
            var oNavContainer = this.byId("pageContainer");
            oNavContainer.to(this.byId("incidentsPage"));
            // Also select the side item
            // this.byId("toolPage").getSideContent().getItem().setSelectedItem("incidents"); // Logic simplified
        },

        onPressTileRisk: function () {
            var oNavContainer = this.byId("pageContainer");
            oNavContainer.to(this.byId("risksPage"));
        }
    });
});
