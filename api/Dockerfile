FROM python:3.8 

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python3", "main.py"]