# Usa una imagen base de Node.js para construir la aplicación
FROM node:20-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package.json package-lock.json ./

# Limpia cualquier instalación anterior (para evitar problemas de caché como el de rollup)
# Eliminar node_modules y package-lock.json antes de npm install puede resolver el problema de optional dependencies
RUN rm -rf node_modules package-lock.json

# Instala las dependencias de producción y desarrollo
# Vite y sus plugins son dependencias de desarrollo, pero se necesitan para el `npm run build`
# Por lo tanto, instalamos todas las dependencias y luego omitimos las de desarrollo para la etapa final del builder
RUN npm install

# Copia el resto del código de la aplicación
# El .dockerignore se aplicará aquí
COPY . .

# Construye la aplicación para producción
RUN npm run build

# --- Stage 2: Servir la aplicación con Nginx ---
FROM nginx:alpine

# Copia la configuración de Nginx personalizada
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copia los archivos construidos de la aplicación desde la etapa 'builder'
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80 donde Nginx escuchará
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]