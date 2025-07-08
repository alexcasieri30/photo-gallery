import base64
from flask import Flask, jsonify, request
from flask_cors import CORS
import boto3
from botocore.config import Config


class ImageServer:
    BUCKET_NAME = "photo-123123"
    REGION = "us-east-2"

    def __init__(self):
        self.flask_app = Flask(__name__)
        CORS(self.flask_app)
        self.setup_routes()
        self.s3 = boto3.client("s3", region_name=self.REGION)


    def setup_routes(self):
        self.flask_app.add_url_rule("/", view_func=self.index, methods=["GET"])
        self.flask_app.add_url_rule("/get_images", view_func=self.get_all_images, methods=['GET'])


    def index(self):
        return jsonify("Hello world")
    

    def get_images(self, bucket, img_name: str):
        response = self.s3.get_object(Bucket=bucket, Key=img_name)
        image_bytes = response["Body"].read()
        return image_bytes


    def start_server(self):
        self.flask_app.run(host="0.0.0.0", port=5000)


    def list_images(self, bucket):
        response = self.s3.list_objects_v2(Bucket=bucket)
        print(response)
        images = []
        for obj in response.get('Contents', []):
            key = obj['Key']
            if key.lower().endswith(('.jpg', '.jpeg', '.png')):
                url = f"https://{bucket}.s3.{self.REGION}.amazonaws.com/{key}"
                images.append({
                    "filename": key,
                    "url": url
                })
        return images


    def get_all_images(self):
        images = self.list_images(self.BUCKET_NAME)
        return_data = {}
        for image in images:
            image_name = image["filename"]
            presigned_url = self.generate_presigned_url(image_name)
            return_data[image_name] = presigned_url
        return jsonify(return_data)


    def generate_presigned_url(self, key: str):
        s3 = boto3.client("s3", config=Config(signature_version='s3v4'), region_name=self.REGION)
        return s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': "photo-123123", 'Key': key},
            ExpiresIn=600
        )


if __name__ == "__main__":
    server = ImageServer()
    server.start_server()