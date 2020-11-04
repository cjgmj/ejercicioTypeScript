# ejercicioTypeScript

Para compilar el archivo de TypeScript a JavaScript ejecutamos en el terminal de comandos `tsc nombreArchivo`. No es necesario añadir la extensión de `.ts`.

Para usar el modo observador de TypeScript tenemos que ejecutar `tsc nombreArchivo --watch`, podemos usar la abreviatura `-w`, en el terminal de comandos. Para observar toda la carpeta ejecutamos `tsc -w`.

#### Iniciar proyecto

Para iniciar el proyecto ejecutamos en el terminal de comandos `tsc -init`, esto nos crea el archivo `tsconfig.json`.

#### Solución para cannot redeclare block-scoped variable

Podemos ver el motivo del error [aquí](https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206).
