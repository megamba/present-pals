import boto3
from datetime import datetime
import json
import logging
from os import getenv

# define logger
logger = logging.getLogger('present_pals_logger')
logger.setLevel(logging.INFO)
# Create handlers
console_handler = logging.StreamHandler()  # Outputs to console
console_handler.setLevel(logging.INFO)  # Set logging level for handlers
# Create formatters and add it to handlers
log_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
console_handler.setFormatter(log_format)
logger.addHandler(console_handler)  # Add handlers to logger

# AWS resources
dynamodb = boto3.resource('dynamodb', region_name=getenv('DEPLOY_REGION'))

def writeLog(event, context):
    """
    Write a log from EventBridge to DynamoDB.

    event (dict):   event detail from EventBridge
    context (dict): lambda context
    """
    logger.info(f"Received log: {event}")

    # extract info from EventBridge rule
    eventDetail = event["detail"]

    # get Dynamo table info
    table_name = getenv('TABLE_NAME', 'logs') 
    table = dynamodb.Table(table_name)


    # read from logMessages.json to use consistent log messages
    log_messages = {}
    with open('logMessages.json', 'r') as file:
        log_messages = json.load(file)

    # Item to write (this can come from the event object, e.g., an API Gateway request)
    # TODO: decide on a standard format to include logging elements for all features
    log_entry = {
        "log": "APPLICATION_LOGS",  # Partition key value (constant or type of log category)
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "logLevel": "INFO",  # Example log level (e.g., DEBUG, INFO, WARN, ERROR)
        "message": event["log-message-key"],
        "userId": "123456789",  # Optional: associated user or entity
        "details": {  # Optional: Additional metadata
            "ipAddress": "192.168.1.1",
            "sessionId": "abc123",
            "browser": "Chrome"
        }
    }


    try:
        # Write the item to the DynamoDB table
        response = table.put_item(Item=log_entry)
        print("Item successfully written to DynamoDB:", response)

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Item successfully written to DynamoDB.",
                "item": log_entry
            })
        }
    except Exception as e:
        print("Error writing item to DynamoDB:", e)
        return {
            "statusCode": 500,
            "body": json.dumps({
                "message": "Failed to write item to DynamoDB.",
                "error": str(e)
            })
        }
# end lambda handler


if __name__ == "__main__":
    writeLog(None, None)