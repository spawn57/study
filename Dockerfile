# use the image
FROM node:18.17.0-alpine

# sets the working directory
WORKDIR /app

# copy and download dependencies, I'm not sure if i need this yet
COPY package.json package-lock.json ./


# copy source files to the image
COPY . .

# open the port 3000
EXPOSE 3000

# install dependencies
RUN npm ci

# run application
CMD npm run start:backend

