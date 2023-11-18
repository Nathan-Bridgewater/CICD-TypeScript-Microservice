FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
COPY --chown=node:node tsconfig.json .
COPY --chown=node:node source ./source/
USER node
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "node", "build/source/index.js" ]