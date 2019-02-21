resource "azurerm_storage_account" "storage" {
  name                     = "azfnstorage${random_integer.ri.result}"
  resource_group_name      = "${azurerm_resource_group.resgroup.name}"
  location                 = "${azurerm_resource_group.resgroup.location}"
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_application_insights" "ai" {
  name                = "basta-2019-mba-ws-azfn-insights"
  location            = "${azurerm_resource_group.resgroup.location}"
  resource_group_name = "${azurerm_resource_group.resgroup.name}"
  application_type    = "Web"
}

resource "azurerm_app_service_plan" "azfnsvcplan" {
  name                = "basta-2019-appsvcplan-azfn-${random_integer.ri.result}"
  resource_group_name = "${azurerm_resource_group.resgroup.name}"
  location            = "${azurerm_resource_group.resgroup.location}"
  kind                = "FunctionApp"

  sku = {
    tier = "Dynamic"
    size = "Y1"
  }
}

resource "azurerm_function_app" "azfn" {
  name                      = "basta-2019-azfn-${random_integer.ri.result}"
  resource_group_name       = "${azurerm_resource_group.resgroup.name}"
  location                  = "${azurerm_resource_group.resgroup.location}"
  app_service_plan_id       = "${azurerm_app_service_plan.azfnsvcplan.id}"
  storage_connection_string = "${azurerm_storage_account.storage.primary_connection_string}"

  app_settings {
    "APPINSIGHTS_INSTRUMENTATIONKEY" = "${azurerm_application_insights.ai.instrumentation_key}"

    //"CosmosDBConnection"             = "${azurerm}"
  }
}
