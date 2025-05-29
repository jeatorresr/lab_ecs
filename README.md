# 📦 Node.js Web App

## Description

This repository contains a simple Node.js + Express application served over HTTP. It is designed to run in a containerized environment (Docker) and is intended to be deployed via ECS Fargate, exposed through API Gateway and a Network Load Balancer.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Running Locally](#running-locally)
- [Docker Support](#docker-support)
- [Contribution](#contribution)
- [Authors](#authors)

## Project Structure

.
├── Dockerfile                 # Container build file
├── app.js                    # Express server entry point
├── public/
│   └── index.html            # Static HTML served at /
├── package.json              # Project dependencies and scripts
└── .github/
    └── workflows/
        └── deploy.yml   # CI pipeline: build & push image to ECR

- GitHub Workflow:
  - .github/workflows/deploy.yml: Automates the deployment process using AWS CLI and GitHub Actions.

## Prerequisites

Before setting up this project, ensure you have the following:

- An **`AWS Account`** with permissions to use **`IAM`**, **`ECS`**, **`ECR`**, **`VPC`**, **`NLB`**, **`API Gateway`**, and **`CloudWatch`**.
- **`AWS CLI`** installed and configured.

Ensure the correct role ARN and AWS region are set in .github/workflows/deploy.yml.
```bash
- name: Configure AWS credentials
    uses: aws-actions/configure-aws-credentials@v2
    with:
      role-to-assume: arn:aws:iam::<AWS_ACCOUNT_ID>:role/<AWS_GITHUB_ROLE_NAME>
      aws-region: <AWS_REGION>
```


## Installation

1. Clone the repository:
```bash
git clone https://github.com/jeatorresr/lab_ecs.git
```
2. Create your own repository, copy the files and commit the new changes to deploy the infrastructure.

## Running Locally

```bash
npm install
node app.js
```
Visit http://localhost:80.

## Docker Support

Build locally
```bash
docker build -t node-app .
```

Run locally
```bash
docker run -p 8080:80 node-app
```

## Contribution

1. Fork the project.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Open a Pull Request.


### Authors
- Jenifer Andrea Torres
