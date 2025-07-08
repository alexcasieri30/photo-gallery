import base64
import boto3
from botocore.config import Config
import json


BUCKET_NAME = "photo-123123"
REGION = "us-east-2"


s3 = boto3.client("s3", config=Config(signature_version='s3v4'), region_name=REGION)


def list_images(bucket):
    response = s3.list_objects_v2(Bucket=bucket)
    print(response)
    images = []
    for obj in response.get('Contents', []):
        key = obj['Key']
        if key.lower().endswith(('.jpg', '.jpeg', '.png')):
            url = f"https://{bucket}.s3.{REGION}.amazonaws.com/{key}"
            images.append({
                "filename": key,
                "url": url
            })
    return images


def get_image_bytes(bucket, name):
    response = s3.get_object(Bucket=bucket, Key=name)
    image_bytes = response["Body"].read()
    return image_bytes


def get_all_images(bucket):
    images = list_images(bucket)
    return_data = {}
    for image in images:
        image_name = image["filename"]
        image_bytes = get_image_bytes(bucket, image_name)
        base64_str = base64.b64encode(image_bytes).decode('utf-8')
        return_data[image_name] = base64_str
    return return_data

def generate_presigned_url(bucket_name, key, expiration=600):
    s3 = boto3.client("s3", config=Config(signature_version='s3v4'), region_name=REGION)

    return s3.generate_presigned_url(
        'get_object',
        Params={'Bucket': bucket_name, 'Key': key},
        ExpiresIn=expiration
    )

if __name__ == "__main__":
    presigned_url = generate_presigned_url(BUCKET_NAME, "IMG_3713.jpeg")
    print(presigned_url)