# Dockerfile para el backend (Express API)
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto para el backend
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["npm", "start"]
