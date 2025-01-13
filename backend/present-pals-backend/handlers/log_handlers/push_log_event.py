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


# AWS Clients
client = boto3.client('events', region_name=getenv('DEPLOY_REGION'))

def pushLog(event, context):
    """
    Push an event to the Present Pals event bus to be handled
    by a rule target.
    """
    logger.info(f"Received log: {event}")

    """
    push an event to Event Bridge
    """
    # format event info
    event_detail = {
        "userId": "user123",
        "action": "login",
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

    # put event on event bus
    response = client.put_events(
        Entries=[
            {
                'Source': 'my.custom.source',
                'DetailType': 'user-activity',
                'Detail': json.dumps(event_detail),
                'EventBusName': 'default'  # or your custom bus name
            }
        ]
    )
# end handler


if __name__ == "__main__":
    event = {

    }
    pushLog(None, None)