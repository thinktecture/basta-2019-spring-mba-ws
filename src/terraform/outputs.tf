output "azure_function_hostname" {
  value = "${azurerm_function_app.azfn.default_hostname}"
}

output "frontend_hostname" {
  value = "${azurerm_app_service.frontend.default_site_hostname}"
}

output "frontend_source_control" {
  value = "${azurerm_app_service.frontend.source_control}"
}

output "cosmos_db_connection_strings" {
  value = "${azurerm_cosmosdb_account.db.connection_strings}"
}
