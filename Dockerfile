From php:7.4-apache

LABEL maintainer="Jason Ryu"

# Set the workign directory in the image
WORKDIR /var/www/html


#Copy our public folder to the working directory
COPY public .