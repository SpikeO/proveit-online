import fs from 'fs';
import path from 'path';

const createRoutes = (app, folderName) => {
  fs.readdirSync(folderName).forEach((file) => {
    if (file === 'index.js') return;
    const fullName = path.join(folderName, file);
    const stat = fs.lstatSync(fullName);
    if (stat.isDirectory()) {
      createRoutes(app, fullName);
    } else {
      require(fullName).default(app);
    }
  });
};

export default createRoutes;
