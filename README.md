# ejercicioTypeScript

Para compilar el archivo de TypeScript a JavaScript ejecutamos en el terminal de comandos `tsc nombreArchivo`. No es necesario añadir la extensión de `.ts`.

Para usar el modo observador de TypeScript tenemos que ejecutar `tsc nombreArchivo --watch`, podemos usar la abreviatura `-w`, en el terminal de comandos. Para observar toda la carpeta ejecutamos `tsc -w`.

#### Iniciar proyecto

Para iniciar el proyecto ejecutamos en el terminal de comandos `tsc -init`, esto nos crea el archivo `tsconfig.json`.

#### Solución para cannot redeclare block-scoped variable

Podemos ver el motivo del error [aquí](https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206).

### Archivo tsconfig.json

#### Controlar null

Añandiendo en el tsconfig.json `"strictNullChecks": true` no podremos asignar `null` o `undefined` a las propiedades a no ser que sean de ese tipo concreto.

#### Depurar TypeScript

Para poder depurar los archivos TypeScript en el tsconfig.json debemos añadir `"sourceMap": true`. De esta forma nos aparecerá el archivo TypeScript en la pestaña `Sources` y podremos añadir puntos de rupturas en el archivo.

#### Eliminar comentarios

Para eliminar los comentarios en la compilación a JavaScript añadimos en el tsconfig.json `"removeComments": true`. Si queremos que un comentario no sea eliminar debe empezar con `/*!`.

#### Incluir y excluir carpetas

Para excluir algunas carpetas o archivos añadimos en el tsconfig.json `"exclude": ["ruta/**/*"]`. Para incluir algunas carpetas o archivos añadimos `"include": ["ruta/**/*"]`, `**` indica todas las carpetas y `*` indica todos los archivos. Ambas configuraciones estarían a la altura de `compilerOptions`.

#### Archivo global

Podemos indicar a TypeScript que compile todos los archivos en un archivo global añadiendo `"outFile": "ruta/nombreArchivo.js"` en el tsconfig.json.

#### Versión JavaScript

Podemos cambiar la versión al que compila TypeScript añadiendo `"target": "versión"` en el tsconfig.json.
