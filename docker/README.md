# List of Steps for having this working in GCP

* We need to enable API's and Services
  * Need to find Google Container Registry API.

## For Using Multiple Github Accounts in single Machine

* We need to use below command.
  * git config --global credential.useHttpPath true

> Before using HTTP Path, windows is suppose to store the github url in its credentials manager, after using httpPath true, git will take every path and store it.

# Using Kleopatra

* Need to create New Key pair.
  * Need to Use the Public key into Github Account under settings for adding SSH and GPG Key.
  * And put the sign id under github account.