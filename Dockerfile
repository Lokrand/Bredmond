FROM node:20-bookworm
ENV NODE_ENV=production
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
USER root
CMD ["npm", "start"]
