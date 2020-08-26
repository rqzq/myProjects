#!/bin/bash

function chores(){

  # Install Python Pip
  apt-get update
  apt-get install python3-pip -y

  # Install SSH Pass for Automating Shell passwords from getting prompted
  apt-get install sshpass -y

  #Install Ansible
  pip3 install ansible==2.7

  # Make Sudoers Entry
  echo "cloud_user ALL=(ALL) NOPASSWD: ALL" >>/etc/sudoers

  # Generate ssh-keygen
  sudo -u cloud_user cat /dev/zero | ssh-keygen -q -N "" > /dev/null

  # Password Less Login
  ip_addr=`hostname -I | awk '{print $1}'`
  sudo -u cloud_user sshpass -p 'password*9' ssh-copy-id -o StrictHostKeyChecking=no cloud_user@$ip_addr

}

# Executing the Function Tasks Defined
chores