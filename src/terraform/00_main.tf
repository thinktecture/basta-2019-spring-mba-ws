provider "azurerm" {}

resource "azurerm_resource_group" "resgroup" {
  name     = "${var.resourcegroup_name}"
  location = "westeurope"
}

resource "azurerm_resource_group" "resgroupfrontend" {
  name     = "${var.resourcegroup_name}-frontend"
  location = "westeurope"
}

resource "random_integer" "ri" {
  min = 10000
  max = 99999
}
