import json

# to invoke, run 'serverless invoke local --function hello' or
# press play button!
def hello(event, context):
    body = {
        "message": "Go Serverless v4.0! Your function executed successfully!",
    }

    response = {"statusCode": 200, "body": json.dumps(body)}

    return response


# allow play button to run this script
if __name__ == "__main__":
    print(hello(None, None))