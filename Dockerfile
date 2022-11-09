FROM ubuntu:20.04
LABEL maintainer = "Junchi Zhu <zhujunch@msu.edu>"
LABEL description="REU GAME"

RUN apt update
RUN apt-get update -qq

ENV TZ=America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt -y install python3-pip
RUN apt -y install vim
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080
ENV PORT 8080
ENV FLASK_ENV=production  
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app:app