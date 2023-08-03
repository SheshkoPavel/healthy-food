ARG COMMIT
ARG RELEASE

FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package* ./
COPY yarn.lock ./
RUN yarn


FROM node:16-alpine AS builder

ARG CONTENTSTACK_API_KEY
ARG DELIVERY_TOKEN
ARG ENVIRONMENT
ARG LIVE_PREVIEW_HOST
ARG LIVE_PREVIEW_MANAGEMENT_TOKEN
ARG LIVE_PREVIEW_ENABLE
ARG PRODUCTION
ARG HOST_URL
ARG FUNCTION_URL
ARG PORTAL_URL
ARG FUNCTION_BASE_URL
ARG AUTH_API_KEY
ARG MEMBER_API_KEY
ARG SIGNALR_HUB_URL
ARG SEN_SOURCE_HUB
ARG CATERED_EVENT_HUB
ARG IMAGES_HOST_NAME

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build


FROM node:16-alpine AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next

COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/proxy.js ./proxy.js
COPY --from=builder /app/proxy.config.json ./proxy.config.json

LABEL commit=${COMMIT}
LABEL release=${RELEASE}

CMD ["yarn", "start"]