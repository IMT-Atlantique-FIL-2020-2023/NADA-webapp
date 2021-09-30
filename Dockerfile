FROM ubuntu

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y git

RUN mkdir /var/www
RUN cd /var/www && git clone https://github.com/IMT-Atlantique-FIL-2020-2023/NADA-webapp.git

WORKDIR /var/www/NADA-webapp
# RUN npm install && npm run serve