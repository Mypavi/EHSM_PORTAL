sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat",
    "sap/m/MessageToast"
], function (Controller, JSONModel, DateFormat, MessageToast) {
    "use strict";

    return Controller.extend("eshm.controller.Dashboard", {
        // ... existing formatter ...
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
                    { IncidentId: "INC000056", Plant: "AT01", IncidentDescription: "Electrical Hazard", IncidentCategory: "Environmental", IncidentPriority: "Medium", IncidentStatus: "In Progress", IncidentDate: "2025-06-25" },
                    // Mock Incidents for other plants to ensure data is fetched
                    // BE01 Incidents
                    { IncidentId: "INC000101", Plant: "BE01", IncidentDescription: "Chemical spill", IncidentCategory: "Environmental", IncidentPriority: "High", IncidentStatus: "Open", IncidentDate: "2025-08-18" },
                    { IncidentId: "INC000102", Plant: "BE01", IncidentDescription: "Machinery noise", IncidentCategory: "Operational", IncidentPriority: "Low", IncidentStatus: "Closed", IncidentDate: "2025-08-10" },
                    // CA04 Incidents
                    { IncidentId: "INC000201", Plant: "CA04", IncidentDescription: "Icy Walkway", IncidentCategory: "Safety", IncidentPriority: "Medium", IncidentStatus: "Open", IncidentDate: "2025-08-15" },
                    { IncidentId: "INC000202", Plant: "CA04", IncidentDescription: "Heater failure", IncidentCategory: "Operational", IncidentPriority: "Low", IncidentStatus: "In Progress", IncidentDate: "2025-08-05" },
                    // AU02 Incidents
                    { IncidentId: "INC000301", Plant: "AU02", IncidentDescription: "Overheating drill", IncidentCategory: "Operational", IncidentPriority: "Medium", IncidentStatus: "Closed", IncidentDate: "2025-08-12" },
                    { IncidentId: "INC000302", Plant: "AU02", IncidentDescription: "Dust accumulation", IncidentCategory: "Environmental", IncidentPriority: "Low", IncidentStatus: "Open", IncidentDate: "2025-08-08" }
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
                    { RiskId: "RISK000056", RiskDescription: "Electrical shock haz", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Automation Upgrade", Plant: "AT01" },
                    // BE01 Data
                    { RiskId: "RISK000005", RiskDescription: "Exposure to chemical", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Emergency Drill", Plant: "BE01" },
                    { RiskId: "RISK000010", RiskDescription: "Machine malfunction", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "First Aid Training", Plant: "BE01" },
                    { RiskId: "RISK000015", RiskDescription: "Fire risk", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Emergency Drill", Plant: "BE01" },
                    { RiskId: "RISK000020", RiskDescription: "Electrical shock haz", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "First Aid Training", Plant: "BE01" },
                    { RiskId: "RISK000025", RiskDescription: "Exposure to chemical", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Emergency Drill", Plant: "BE01" },
                    { RiskId: "RISK000030", RiskDescription: "Machine malfunction", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "First Aid Training", Plant: "BE01" },
                    { RiskId: "RISK000035", RiskDescription: "Fire risk", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Emergency Drill", Plant: "BE01" },
                    { RiskId: "RISK000040", RiskDescription: "Electrical shock haz", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "First Aid Training", Plant: "BE01" },
                    { RiskId: "RISK000045", RiskDescription: "Exposure to chemical", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Emergency Drill", Plant: "BE01" },
                    { RiskId: "RISK000050", RiskDescription: "Machine malfunction", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "First Aid Training", Plant: "BE01" },
                    { RiskId: "RISK000055", RiskDescription: "Fire risk", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Emergency Drill", Plant: "BE01" },
                    { RiskId: "RISK000060", RiskDescription: "Electrical shock haz", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "First Aid Training", Plant: "BE01" },
                    // CA04 Data
                    { RiskId: "RISK000003", RiskDescription: "Fire risk", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Maintenance", Plant: "CA04" },
                    { RiskId: "RISK000008", RiskDescription: "Electrical shock haz", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Improved Ventilation", Plant: "CA04" },
                    { RiskId: "RISK000013", RiskDescription: "Exposure to chemical", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Maintenance", Plant: "CA04" },
                    { RiskId: "RISK000018", RiskDescription: "Machine malfunction", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Improved Ventilation", Plant: "CA04" },
                    { RiskId: "RISK000023", RiskDescription: "Fire risk", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Maintenance", Plant: "CA04" },
                    { RiskId: "RISK000028", RiskDescription: "Electrical shock haz", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Improved Ventilation", Plant: "CA04" },
                    { RiskId: "RISK000033", RiskDescription: "Exposure to chemical", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Maintenance", Plant: "CA04" },
                    { RiskId: "RISK000038", RiskDescription: "Machine malfunction", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Improved Ventilation", Plant: "CA04" },
                    { RiskId: "RISK000043", RiskDescription: "Fire risk", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Maintenance", Plant: "CA04" },
                    { RiskId: "RISK000048", RiskDescription: "Electrical shock haz", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Improved Ventilation", Plant: "CA04" },
                    // CA04 Data (continued...)
                    { RiskId: "RISK000053", RiskDescription: "Exposure to chemical", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Maintenance", Plant: "CA04" },
                    { RiskId: "RISK000058", RiskDescription: "Machine malfunction", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Improved Ventilation", Plant: "CA04" },
                    // AU02 Data
                    { RiskId: "RISK000004", RiskDescription: "Electrical shock haz", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Monitoring", Plant: "AU02" },
                    { RiskId: "RISK000009", RiskDescription: "Exposure to chemical", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Regular Inspections", Plant: "AU02" },
                    { RiskId: "RISK000014", RiskDescription: "Machine malfunction", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Monitoring", Plant: "AU02" },
                    { RiskId: "RISK000019", RiskDescription: "Fire risk", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Regular Inspections", Plant: "AU02" },
                    { RiskId: "RISK000024", RiskDescription: "Electrical shock haz", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Monitoring", Plant: "AU02" },
                    { RiskId: "RISK000029", RiskDescription: "Exposure to chemical", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Regular Inspections", Plant: "AU02" },
                    { RiskId: "RISK000034", RiskDescription: "Machine malfunction", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Monitoring", Plant: "AU02" },
                    { RiskId: "RISK000039", RiskDescription: "Fire risk", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Regular Inspections", Plant: "AU02" },
                    { RiskId: "RISK000044", RiskDescription: "Electrical shock haz", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Monitoring", Plant: "AU02" },
                    { RiskId: "RISK000049", RiskDescription: "Exposure to chemical", RiskCategory: "Safety", RiskSeverity: "High", Likelihood: "Likely", MitigationMeasures: "Regular Inspections", Plant: "AU02" },
                    { RiskId: "RISK000054", RiskDescription: "Machine malfunction", RiskCategory: "Operational", RiskSeverity: "Low", Likelihood: "Rare", MitigationMeasures: "Monitoring", Plant: "AU02" },
                    { RiskId: "RISK000059", RiskDescription: "Fire risk", RiskCategory: "Environmental", RiskSeverity: "Medium", Likelihood: "Unlikely", MitigationMeasures: "Regular Inspections", Plant: "AU02" }
                ],
                plants: [
                    { key: "AT01", text: "AT01 - Austria Plant" },
                    { key: "AU02", text: "AU02 - Australia Plant 2" },
                    { key: "BE01", text: "BE01 - Belgium Plant" },
                    { key: "CA04", text: "CA04 - Canada Plant" }
                ],
                selectedPlant: "AT01"
            };

            // Convert string dates to Date objects for proper formatting in UI
            oData.incidents.forEach(function (incident) {
                if (incident.IncidentDate) {
                    incident.IncidentDate = new Date(incident.IncidentDate);
                }
            });

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // Initial Filter
            this._filterByPlant("AT01");
        },

        _filterByPlant: function (sPlant) {
            if (sPlant) {
                // Simulate backend fetch message
                MessageToast.show("Fetching data for plant: " + sPlant + " from backend...");
            }
            var aFilters = [];
            if (sPlant) {
                aFilters.push(new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, sPlant));
            }

            // Filter Incidents Table
            var oTableIncidents = this.byId("incidentsTable");
            if (oTableIncidents) {
                var oBindingIncidents = oTableIncidents.getBinding("items");
                if (oBindingIncidents) oBindingIncidents.filter(aFilters);
            }

            // Filter Risks Table
            var oTableRisks = this.byId("risksTable");
            if (oTableRisks) {
                var oBindingRisks = oTableRisks.getBinding("items");
                if (oBindingRisks) oBindingRisks.filter(aFilters);
            }

            // Update KPIs based on selected plant (Dynamic Logic)
            var oModel = this.getView().getModel();

            // Ensure selectedPlant property is updated for UI bindings
            oModel.setProperty("/selectedPlant", sPlant);

            var aAllIncidents = oModel.getProperty("/incidents");
            var aAllRisks = oModel.getProperty("/risks");

            // Calculate Open Incidents (Status 'Open') for selected plant
            var iOpenIncidents = 0;
            if (aAllIncidents) {
                var aPlantIncidents = aAllIncidents.filter(function (item) {
                    return item.Plant === sPlant && item.IncidentStatus === "Open";
                });
                iOpenIncidents = aPlantIncidents.length;
            }

            // Calculate High Risks (Severity 'High') for selected plant
            var iHighRisks = 0;
            if (aAllRisks) {
                var aPlantRisks = aAllRisks.filter(function (item) {
                    return item.Plant === sPlant && item.RiskSeverity === "High";
                });
                iHighRisks = aPlantRisks.length;
            }

            // Update Model
            oModel.setProperty("/kpi/openIncidents", iOpenIncidents);
            oModel.setProperty("/kpi/highRisks", iHighRisks);
        },

        onPlantChange: function (oEvent) {
            var sSelectedPlant = oEvent.getParameter("selectedItem").getKey();
            this._filterByPlant(sSelectedPlant);
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
