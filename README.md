# Carville
This project aims to create a dynamic system using AWS services to manage newsletter subscriptions. It allows users to subscribe via a website, triggering AWS Lambda functions to add email addresses to an SNS topic for newsletter distribution.

## Architecture Overview
The project architecture comprises the following AWS services and components:

#### AWS Services Used:
- **Amazon S3 (Simple Storage Service)**: Hosting the static website files.
- **AWS API Gateway**: Handling HTTP requests and acting as the entry point for API interactions.
- **AWS Lambda**: Executing serverless functions triggered by API Gateway events.
- **Amazon SNS (Simple Notification Service)**: Storing email addresses for newsletter subscriptions and sending notifications.
- **IAM (Identity and Access Management)**: Managing user access and permissions within AWS.
- **Amazon CloudWatch**: Monitoring and logging service used for tracking API calls and Lambda function execution.

#### Components Overview:
- **Static Website**: Hosted on Amazon S3, providing the user interface for subscription interactions.
- **API Gateway**: Defining RESTful endpoints to interact with Lambda functions.
- **Lambda Functions**: Executing code logic to process requests and interact with SNS.
- **SNS Topic**: Storing email addresses and handling subscriptions for newsletter distribution.
- **IAM Roles and Policies**: Managing permissions for different AWS services and resources.
- **CloudWatch Logs**: Capturing logs from Lambda executions and API Gateway invocations for monitoring and troubleshooting.

## Step-by-Step Guide to Integrating AWS Services:
#### Step 1: Design Your Website
- **Design or Prepare Your Website**: Create your website's content or choose an existing template.

#### Step 2: Set Up Amazon S3 Bucket for Website Hosting
1. **Go to AWS Management Console**: Open the Amazon S3 console.
2. **Create a Bucket**: Click "Create bucket" and provide a unique name for your bucket.
3. **Enable Static Website Hosting**: In the bucket properties, enable "Static website hosting."
4. **Upload Website Files**: Upload your website files to the S3 bucket.
5. **Set Bucket Permissions**: Set bucket policies to allow public access for website hosting.

#### Step 3: Configure IAM Roles for Lambda and API Gateway
1. **Navigate to IAM Console**: Access the IAM console.
2. **Create Lambda Execution Role**: Create a role for Lambda execution with necessary permissions to interact with SNS, CloudWatch, and other resources.
3. **Define API Gateway Execution Role**: Define a role granting permissions for API Gateway to trigger Lambda and handle requests.

#### Step 4: Set Up AWS Lambda Function
1. **Access AWS Lambda Console**: Open the Lambda console.
2. **Create a New Lambda Function**: Define the function triggered by API Gateway, providing necessary permissions using the roles created in IAM.
3. **Code Logic**: Write code logic within Lambda to process requests and interact with SNS for email subscriptions.
4. **Test the Function**: Test the function within the Lambda console or using sample events.

#### Step 5: Configure API Gateway
1. **Open API Gateway Console**: Access the API Gateway console.
2. **Create a New API**: Define a new REST API with endpoints triggering the Lambda function.
3. **Set Endpoint Methods**: Set up methods (OPTION, POST) and integrate them with the Lambda function.
4. **Deploy API**: Deploy the API to make it accessible via the generated endpoint.

#### Step 6: Set Up Amazon SNS for Email Subscriptions
1. **Access Amazon SNS Console**: Open the SNS console.
2. **Create a New Topic**: Create an SNS topic to store email addresses for subscriptions.
3. **Configure Subscriptions**: Set up subscriptions to handle email notifications or processing.

#### Step 7: Enable CloudWatch for Monitoring
1. **Access CloudWatch Console**: Open the CloudWatch console.
2. **Set Up Logs and Monitoring**: Configure CloudWatch to capture logs from Lambda functions and API Gateway for monitoring and troubleshooting purposes.


