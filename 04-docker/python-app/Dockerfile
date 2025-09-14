FROM python:3.12-slim

WORKDIR /kumar

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV PORT=9001

CMD [ "python", "app.py" ]