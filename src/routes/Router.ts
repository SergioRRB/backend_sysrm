import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * 
 * @param fileName 
 * @returns 
 */

const cleanFileName = (fileName: string) => {
  //Mis archivos se llaman prueba.routes.ts, siempre va con .routes.ts, tonce solo seria borrar el segundo .
  const file = fileName.split('.').shift();
  return file;
}


readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  const nameRoute = `${cleanName}.routes`;
  if (nameRoute !== 'Router.routes') {
    import(`./${nameRoute}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta /${nameRoute}`);
      router.use(`/${nameRoute}`, moduleRouter.router);
    })
  }
})

export { router };