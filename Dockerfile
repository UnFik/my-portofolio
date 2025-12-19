# Dockerfile

FROM oven/bun:alpine AS base

# Set working directory
WORKDIR /usr/app

# Install dependencies
FROM base AS deps
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Build the app
FROM base AS builder
WORKDIR /usr/app
COPY --from=deps /usr/app/node_modules ./node_modules
COPY . .
RUN bun run build

# Production image
FROM base AS runner
WORKDIR /usr/app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 bunjs && \
    adduser --system --uid 1001 bunjs

# Copy built assets
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/package.json ./package.json
COPY --from=builder /usr/app/node_modules ./node_modules

# Set correct permissions
RUN chown -R bunjs:bunjs /usr/app

# Expose the listening port
EXPOSE 3000

# Run container as non-root user
USER bunjs

CMD ["bun", "run", "start"]