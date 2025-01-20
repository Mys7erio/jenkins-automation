FROM python:3.12-slim-bookworm

WORKDIR /backend

COPY ./main.py /backend/main.py
COPY ./requirements.txt /backend/requirements.txt

RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0"]