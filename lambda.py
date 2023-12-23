import json
import boto3

def lambda_handler(event, context):
    sns = boto3.client('sns')
    
    email = event['email']
    topic_arn = 'arn:aws:sns:us-east-1:160400274180:Newsletter-Subscription' 
    
    try:
        response = sns.subscribe(
            TopicArn=topic_arn,
            Protocol='email',
            Endpoint=email
        )
        print("Email subscribed:", response)
        return {
            'statusCode': 200,
            'body': 'Email subscription successful!'
        }
    except Exception as e:
        print("Error:", e)
        return {
            'statusCode': 500,
            'body': 'Error subscribing email to the topic'
        }