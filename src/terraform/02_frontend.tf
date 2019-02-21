resource "azurerm_app_service_plan" "frontendplan" {
  name                = "basta-2019-appsvcplan-frontend-${random_integer.ri.result}"
  resource_group_name = "${azurerm_resource_group.resgroupfrontend.name}"
  location            = "${azurerm_resource_group.resgroupfrontend.location}"
  reserved            = true

  sku = {
    tier = "Standard"
    size = "S1"
  }
}

resource "azurerm_application_insights" "frontendai" {
  name                = "basta-2019-mba-ws-frontend-insights"
  location            = "${azurerm_resource_group.resgroupfrontend.location}"
  resource_group_name = "${azurerm_resource_group.resgroupfrontend.name}"
  application_type    = "Web"
}

resource "azurerm_app_service" "frontend" {
  name                = "basta-2019-frontend-${random_integer.ri.result}"
  resource_group_name = "${azurerm_resource_group.resgroupfrontend.name}"
  location            = "${azurerm_resource_group.resgroupfrontend.location}"
  app_service_plan_id = "${azurerm_app_service_plan.frontendplan.id}"

  site_config {
    always_on = true
    scm_type  = "LocalGit"
  }

  app_settings {
    "APPINSIGHTS_INSTRUMENTATIONKEY" = "${azurerm_application_insights.frontendai.instrumentation_key}"
  }
}
