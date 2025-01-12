import boto3
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


def pushLog(event, context):
    """
    Push an event to the Present Pals event bus to be handled
    by a rule target.
    """
    logger.info(f"Received log: {event}")

    table_name = getenv('TABLE_NAME', 'logs') 
    table = dynamodb.Table(table_name)

    # Item to write (this can come from the event object, e.g., an API Gateway request)
    # TODO: remove this, replace wiht event bus format for data
    item = {
        "id": "123",  # Primary key (partition key)
        "name": "Sample Item",
        "description": "This is a sample item for DynamoDB.",
        "price": 19.99,
        "inStock": True,
    }

    try:
        # Write the item to the DynamoDB table
        response = table.put_item(Item=item)
        print("Item successfully written to DynamoDB:", response)

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Item successfully written to DynamoDB.",
                "item": item
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
# end handler


if __name__ == "__main__":
    pushLog(None, None)