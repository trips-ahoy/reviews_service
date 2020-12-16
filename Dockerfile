# base layer 
FROM node:12  

# path to source code 
WORKDIR /Users/jnweiner/hrCapstone/reviews_service

# copy package.json into container
COPY package*.json ./

# using package.json in container, install dependencies
RUN npm install

# now that dependencies are set, copy over source code into container
# note: make sure .dockerignore is all set (including node_modules)
COPY . .

# expose port
EXPOSE 3003

# run webpack
RUN npm run build

# tell container how to run application (can only be one CMD per container)
CMD ["npm", "start"]