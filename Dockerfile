# ---------- Stage 1 : Build ----------
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---------- Stage 2 : Runtime (non-root) ----------
FROM nginxinc/nginx-unprivileged:1.25-alpine

# Copier les fichiers buildés
COPY --from=builder /app/build /usr/share/nginx/html

# Copier la config Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]