resource "azurerm_cosmosdb_account" "db" {
  name                = "basta-2019-cosmos-db-${random_integer.ri.result}"
  resource_group_name = "${azurerm_resource_group.resgroup.name}"
  location            = "${azurerm_resource_group.resgroup.location}"
  offer_type          = "Standard"
  kind                = "GlobalDocumentDB"

  enable_automatic_failover = true

  consistency_policy {
    consistency_level       = "BoundedStaleness"
    max_interval_in_seconds = 10
    max_staleness_prefix    = 200
  }

  geo_location {
    prefix            = "basta-2019-cosmos-db-${random_integer.ri.result}-customid"
    location          = "${azurerm_resource_group.resgroup.location}"
    failover_priority = 0
  }
}
