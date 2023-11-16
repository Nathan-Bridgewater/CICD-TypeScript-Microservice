FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
USER node
RUN npm install
COPY --chown=node:node build/source/*.js .
EXPOSE 8080
CMD [ "node", "index.js" ]