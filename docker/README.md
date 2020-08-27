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

# Setting up the App for Deploying to GKE

	• Login to Google Cloud Shell.
	• git clone https://github.com/rqzq/myProjects.git
		○ cd docker/python_app_gcp
		○ docker build -t myapp .
	• docker images [Find the image you want to push to container registry]
		○ docker tag myapp gcr.io/playground-s-11-989d0bdc/myapp
		○ docker push  gcr.io/playground-s-11-989d0bdc/myapp
	• Select app from container Registry and choose to deploy to GKE.
	• gcloud container clusters get-credentials my-first-cluster --zone=us-central1-c
	• Click on Expose the application called myapp.
		○ Port 80 to 8888 as our application needs 8888 to work.
		○ Hit the Endpoints available.
	• kubectl create deployment nginx --image nginx
	• kubectl expose deployment nginx --port=80 --type=LoadBalancer.
	• Cross check with Services and Ingress as we can see now both myapp as well as Nginx would be visible there.
