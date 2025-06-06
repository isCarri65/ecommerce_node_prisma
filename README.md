Aplicacion backend del un ecommerce con nodejs, prisma para crear una base de datos de Postgres SQL. 
PASOS PARA INICIALIZAR EL PROYECTO
comandos a ejecutar
git clone <repo-url>
cd <project>
crearse un archivo.env con:
PORT=
JWT_ACCESS_SECRET=  
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRATION=   //pueden ser minutos, horas, dias
JWT_REFRESH_EXPIRATION=
BCRYPT_SALT_ROUNDS=10

POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

DATABASE_URL= //lo genera prisma

seguir con 
npm install
docker-compose up -d
npx prisma generate
npx prisma migrate deploy
npm run dev   
