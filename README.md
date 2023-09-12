# TemplateBackend-NodeJS-TypeScript

1. **CONFIG** ----> Dentro estan archivos y carpetas de variables de entorno, configuracion del server - app, configuracion y conexion de la base de datos y funcion que arranca el server

2. **CONTROLLERS** ----> Dentro se van a encontrar todos los controladores correspondientes a cada ruta.
   Recomiendo utilizar carpeta main para cada ruta y dentro los controladores correspondientes a cada ruta
   Luego en un archivo aparte importar todo para luego exportar.

3. **MODELS** ----> Dentro se encuentran los modelos de la base de datos.

4. **ROUTES** ----> Dentro se encuentra el archivo index.routes.ts donde estaran todas las rutas.

El archivo src/index.ts es el archivo main el cual ejecuta todo.

## PATHS configurados:

1. '@config': './src/config',
2. '@controllers': './src/controllers',
3. '@routes': './src/routes',
4. '@models': './src/models/',


Si se van agregar mas, agregar los paths en:
1. tsconfig.json
2. babel.config.json




## Libs, Utils & Middlewares
Crear estas 3 carpetas para modularizar el proyecto, si es necesario.
En libs recomiendo crear una carpeta llamada "typings" donde se van a declarar en diferentes archivos todos los tipos que necesitemos.
Modularizar - organizar cada carpeta a gusto.