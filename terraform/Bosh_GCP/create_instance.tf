resource "google_compute_instance" "boshVMS" {
  name         = "bosh-vm"
  machine_type = var.machineType
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = var.image
    }
  }

  network_interface {
    network = "default"

    access_config {
      // Include this section to give the VM an external ip address
    }
  }

    metadata_startup_script = "sudo apt-get update && sudo apt-get install python3-pip -y && sudo pip3 install ansible"

    // Apply the firewall rule to allow external IPs to access this instance
    tags = ["bosh-infra"]
}

resource "google_compute_firewall" "bosh" {
  name    = "allow-all-traffic"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  // Allow traffic from everywhere to instances with an http-server tag
  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["bosh"]
}

output "ip" {
  value = google_compute_instance.boshVMS.network_interface[0].access_config[0].nat_ip
}