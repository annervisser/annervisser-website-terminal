# syntax = docker/dockerfile:1
FROM node:20-slim as build
WORKDIR /app
ENV NODE_ENV="production"

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Build application
COPY --link . .
RUN npm run prerender


FROM pierrezemb/gostatic as serve
COPY --link --from=build /app/dist/annervisser-website-terminal/browser /srv/http/

EXPOSE 8043
CMD ["-fallback", "index.html"]
